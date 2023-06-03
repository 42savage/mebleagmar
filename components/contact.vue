<template>
  <form class="contactForm" ref="form" @submit.prevent="mailSubmit">
    <div ref="message" class="message" v-show="message">
      <p>{{ this.message }}</p>
    </div>
    <p class="contactNdTitle">Przez formularz</p>
    <p class="error" v-if="errors.name">{{ errors.name }}</p>
    <input
      type="hidden"
      id="g-recaptcha-response"
      name="g-recaptcha-response"
    />
    <input type="hidden" name="action" value="validate_captcha" />
    <input
      type="text"
      class="name"
      name="name"
      placeholder="Imię i nazwisko"
      v-model="mail.name"
    />
    <input
      type="text,"
      class="company"
      name="company"
      placeholder="Firma(opcjonalnie)"
      v-model="mail.company"
    />
    <p class="error" v-if="errors.email">{{ errors.email }}</p>
    <input
      type="text,"
      class="email"
      name="email"
      placeholder="Adres email"
      v-model="mail.email"
    />
    <p class="error" v-if="errors.phone">{{ errors.phone }}</p>
    <input
      type="text,"
      class="phone"
      name="phone"
      placeholder="Numer telefonu"
      v-model="mail.phone"
    />
    <p class="error" v-if="errors.message">{{ errors.message }}</p>
    <textarea
      placeholder="Opisz w kilku słowach swoje zamówienie"
      v-model="mail.message"
      name="message"
    ></textarea>
    <input
      type="submit"
      class="submit g-recaptcha"
      data-sitekey="reCAPTCHA_site_key"
      data-callback="onSubmit"
      data-action="submit"
      value="Wyślij"
    />
  </form>
</template>

<script>
import emailjs from '@emailjs/browser'
export default {
  data() {
    return {
      errors: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      message: '',
      mail: {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      },
    }
  },
  methods: {
    async mailSubmit() {
      if (!this.mail.name) {
        this.errors.name = 'Przed wysłaniem musisz uzupełnić imię i nazwisko'
      } else {
        this.errors.name = ''
      }
      if (!this.mail.phone) {
        this.errors.phone = 'Przed wysłaniem musisz uzupełnić numer telefonu'
      } else {
        this.errors.phone = ''
      }
      if (!this.mail.email) {
        this.errors.email = 'Przed wysłaniem musisz uzupełnić adres e-mail'
      } else {
        this.errors.email = ''
      }
      if (!this.mail.message) {
        this.errors.message =
          'Przed wysłaniem musisz uzupełnić treść wiadomości'
      } else {
        this.errors.message = ''
      }
      if (
        !this.errors.name &&
        !this.errors.email &&
        !this.errors.phone &&
        !this.errors.message
      ) {
        emailjs.sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          this.$refs.form,
          process.env.MAIL_KEY
        )
        this.message = 'Wiadomość została wysłana.'
        this.mail.email = ''
        this.mail.phone = ''
        this.mail.name = ''
        this.mail.message = ''
        this.mail.company = ''
        setTimeout(() => {
          this.message = ''
        }, 2000)
        // grecaptcha.ready(function () {
        //   grecaptcha
        //     .execute(process.env.RECAPTCHA_SITE_KEY, { action: 'submit' })
        //     .then(function (token) {
        //       // Add your logic to submit to your backend server here.
        //       sendMail()
        //     })
        // })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.contactForm {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 100%;
    height: 40px;
    background: white;
    color: #6d6d6d;
    border: 1px solid #6d6d6d;
    margin: 8px 0;
    padding: 0 8px;
    font-size: 16px;
  }
  textarea {
    font-size: 16px;
    padding: 8px;
    height: 200px;
    border: 1px solid #6d6d6d;
    margin-top: 8px;
  }
  input[type='submit'] {
    background: #005f73;
    color: white;
  }
}
.message {
  color: rgb(232, 229, 229);
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1;
  height: 40px;
  background: rgb(0, 140, 172);
  border: 1px solid rgb(0, 40, 54);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
}
.contactNdTitle {
  font-size: 22px;
  font-weight: bold;
  margin: 32px 0 16px 0;
  color: #ee9b00;
}
@media (min-width: 1440px) {
  .message {
    right: 120px;
  }
}
.submit {
  cursor: pointer;
}
.error {
  color: crimson;
}
</style>
