<template>
  <div class="container">
    <modalImage :imageSrc="currentImage" />
    <header>
      <div class="top-content">
        <h1>Meble na wymiar Radom</h1>
        <p>Produkujemy meble na wymiar na terenie Radomia.</p>
        <p>
          W naszej ofercie znajdziesz szerokiej maści meble, zaczynająć od
          prostych stolików, kończąc na pełnoprawnych zabudowach kuchennych.
        </p>
        <div v-if="$mq === 'lg'" class="bottom-content">
          <svg-check :width="120" :height="120" /><a>Nasze realizacje</a>
        </div>
      </div>
      <div class="overlay">
        <div class="upper"></div>
        <video src="bg.mp4" muted loop autoplay></video>
      </div>
      <div class="bottom-content" v-if="$mq !== 'lg'">
        <svg-check :width="66" :height="36" /><a>Nasze realizacje</a>
      </div>
    </header>
    <section
      class="aboutus"
      :class="{ netSection: this.$route.path === '/' && this.$mq === 'lg' }"
    >
      <div class="content">
        <p class="subTitle">Dlaczego my?</p>
        <p class="title">Kilka słów o nas</p>
        <p class="contentText">
          W prężnie rozwijająćym się rynku stolarskim jesteśmy od lat. Od lat
          produkujemy dla was szerokiej maści meble kuchenne, meble pokojowe,
          meble łazienkowe oraz łoża sypialniane. Od niedawna rozszerzyliśmy
          nasze struktury o pełnoprawne biuro projektowe.
        </p>
      </div>
      <div class="counters">
        <div class="singleCounter">
          <p class="bigNumber">99+</p>
          <p class="smallText">wykonanych projektów 3D</p>
        </div>
        <div class="singleCounter">
          <p class="bigNumber">20</p>
          <p class="smallText">lat na rynku</p>
        </div>
        <div class="singleCounter">
          <p class="bigNumber">499+</p>
          <p class="smallText">Zadowolonych klientów</p>
        </div>
      </div>
      <div class="systems">
        <p class="systemsTitle">Wykorzystujemy systemy renomowanych firm</p>
        <p class="systemsText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit
        </p>
        <div class="producers">
          <img
            loading="lazy"
            class="singleProducer"
            v-for="producer in producers"
            :key="producer.id"
            :src="require(`~/assets/${producer.src}.jpg`)"
            :alt="producer.src"
          />
        </div>
      </div>
    </section>
    <section
      class="howTo"
      :class="{ netSection: this.$route.path === '/' && this.$mq === 'lg' }"
    >
      <div class="content">
        <img
          loading="lazy"
          src="~/assets/gallery/img2.jpg"
          alt="Fotografia przedstawiająca kuchnie"
          class="photo"
        />
        <p class="subTitle">Jest to na prawdę banalnie proste</p>
        <p class="title">Jak wygląda proces realizacji zamówienia?</p>
        <p class="contentText">
          Meble kuchnne jak i zarówno meble pokojowe to trzon naszej
          działalności. To nimi w głównej mierze się zajmujemy. Przygotowaliśmy
          małą prezentację jak to wygląda od strony kuchni.
        </p>
      </div>
      <client-only v-if="$mq !== 'lg'">
        <flicking class="boxes">
          <div
            class="singleBox"
            v-for="box in boxes"
            :key="box.id"
            :style="{ background: box.color }"
          >
            <component
              :is="`svg-${box.icon.name}`"
              :width="box.icon.width"
              :height="box.icon.height"
              :color="box.icon.color"
            ></component>
            <p class="boxTitle" :style="{ color: box.icon.color }">
              {{ box.title }}
            </p>
            <p :style="{ color: box.icon.color }" class="boxSubTitle">
              {{ box.subTitle }}
            </p>
          </div>
        </flicking>
      </client-only>
      <div v-else class="boxes-lg">
        <div v-for="box in boxes" :key="box.id" class="single-box">
          <component
            :is="`svg-${box.icon.name}`"
            color="darkcyan"
            :width="36"
            :height="36"
          />
          <p class="boxTitle">{{ box.title }}</p>
          <p class="boxSubTitle">{{ box.subTitle }}</p>
        </div>
      </div>
      <div class="stripe">
        <button v-if="$mq !== 'lg'" class="prev"><svg-arrow /></button>
        <button v-if="$mq !== 'lg'" class="next"><svg-arrow /></button>
      </div>
    </section>
    <section
      class="realisations"
      :class="{ netSection: this.$route.path === '/' && this.$mq === 'lg' }"
    >
      <div class="content">
        <p class="subTitle">Jest tego na prawdę dużo</p>
        <p class="title">Sprawdź nasze realizacje</p>
        <p class="contentText">
          Meble kuchnne jak i zarówno meble pokojowe to trzon naszej
          działalności. To nimi w głównej mierze się zajmujemy. Przygotowaliśmy
          małą prezentację jak to wygląda od strony kuchni.
        </p>
        <a href="#" class="contentButton">Zajrzyj do galerii</a>
        <img
          loading="lazy"
          src="~/assets/gallery/img1.jpg"
          alt="Zdjęcie przedstawiające kuchnie"
          class="realisationImages"
        />
        <img
          loading="lazy"
          src="~/assets/gallery/img3.jpg"
          alt="Zdjęcie przedstawiające kuchnie"
          class="realisationImages"
        />
      </div>
      <div class="stripeGallery">
        <div
          v-for="image in stripeGallery"
          :key="image.id"
          class="singleStripe"
          :style="` background: url(${image.src}); background-position: center; background-size: cover; `"
        ></div>
      </div>
    </section>
    <section
      class="offer"
      :class="{ netSection: this.$route.path === '/' && this.$mq === 'lg' }"
    >
      <div class="content">
        <p class="subTitle">Jest tego na prawdę dużo</p>
        <p class="title">Oferta tak ogromna, że czacha dyni dymi</p>
        <p class="contentText">
          Meble kuchnne jak i zarówno meble pokojowe to trzon naszej
          działalności. To nimi w głównej mierze się zajmujemy. Przygotowaliśmy
          małą prezentację jak to wygląda od strony kuchni.
        </p>
        <svg-people
          v-if="$mq === 'lg'"
          style="position: absolute; right: 160px"
          :width="460"
        />
      </div>
      <div class="offerList">
        <nuxt-link
          class="singleOffer"
          v-for="element in offer"
          :key="element.id"
          :to="`oferta/${element.route}`"
          :style="`background: url(${element.bg}); background-size: cover; background-position: center; box-shadow: 0px 0px 0px 4000px ${element.overlay} inset;`"
        >
          <p class="offerTitle">{{ element.name }}</p>
        </nuxt-link>
      </div>
    </section>
    <section
      class="contact"
      :class="{ netSection: this.$route.path === '/' && this.$mq === 'lg' }"
    >
      <div class="titleContent">
        <p class="contactSubTitle">
          Z przyjemnością stworzymy dla Ciebie coś niezwykłego
        </p>
        <p class="contactTitle">Skontaktuj się z nami</p>
      </div>
      <div class="content">
        <form class="contactForm">
          <p class="contactNdTitle">Przez formularz</p>
          <input type="text" class="name" placeholder="Imię i nazwisko" />
          <input
            type="text,"
            class="company"
            placeholder="Firma(opcjonalnie)"
          />
          <input type="text," class="email" placeholder="Adres email" />
          <input type="text," class="phone" placeholder="Numer telefonu" />
          <textarea
            placeholder="Opisz w kilku słowach swoje zamówienie"
          ></textarea>
          <input type="submit" class="submit" value="Wyślij" />
        </form>

        <div class="contactInfoBox">
          <p class="contactNdTitle">Telefonicznie lub mailowo</p>
          <p class="phone">tel. 698-088-271</p>
          <p class="mail">email: kontakt@radommeble.pl</p>
          <p class="mail">email: dyniameble@wp.pl</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { AutoPlay } from '@egjs/flicking-plugins'

export default {
  name: 'IndexPage',
  data() {
    return {
      plugins: [
        new AutoPlay({ duration: 600, direction: 'NEXT', stopOnHover: false }),
      ],
      currentImage: '',
      boxes: [
        {
          id: 0,
          title: 'Kontakt',
          subTitle:
            'Pierwszy i zarazem kluczowy punkt. To tu się wszystko zaczyna.',
          color: '#E9D8A6',
          icon: {
            name: 'phone',
            color: '#3D3D3D',
            width: 36,
            height: 36,
          },
        },
        {
          id: 1,
          title: 'Pomiar',
          subTitle:
            'Wizyta u klienta w celu wymierzenia ścian i określenia charakterystycznych punktów.',
          color: '#94D2BD',
          icon: {
            name: 'ruler',
            color: '#3D3D3D',
            width: 36,
            height: 36,
          },
        },
        {
          id: 2,
          title: 'Realizacja',
          subTitle: 'Proddukcja mebli skrojonych idealnie pod Twoje potrzeby.',
          color: '#F09F4B',
          icon: {
            name: 'box',
            color: '#EDEDED',
            width: 36,
            height: 36,
          },
        },
        {
          id: 3,
          title: 'Dostawa i montaż',
          subTitle: 'Montaż mebli w wybranym przez Ciebie terminie.',
          color: '#E56659',
          icon: {
            name: 'truck',
            color: '#EDEDED',
            width: 36,
            height: 36,
          },
        },
      ],
      stripeGallery: [
        { id: 0, src: require('~/assets/stripeGallery/img1.jpg') },
        { id: 1, src: require('~/assets/stripeGallery/img2.jpg') },
        { id: 2, src: require('~/assets/stripeGallery/img3.jpg') },
      ],
      producers: [
        {
          id: 0,
          src: 'gamet',
        },
        {
          id: 1,
          src: 'siro',
        },
        {
          id: 2,
          src: 'schwinn',
        },
        {
          id: 3,
          src: 'blum',
        },
      ],
      images: [
        {
          id: 0,
          src: 'img1',
        },
        {
          id: 1,
          src: 'img2',
        },
        {
          id: 2,
          src: 'img3',
        },
        {
          id: 3,
          src: 'img4',
        },
        {
          id: 4,
          src: 'img5',
        },
      ],
      offer: [
        {
          id: 0,
          name: 'Meble kuchenne',
          bg: require('~/assets/offer/kitchen.jpg'),
          overlay: 'rgba(202, 103, 2, 0.615)',
          route: 'meble_kuchenne',
        },
        {
          id: 1,
          name: 'Meble pokojowe',
          bg: require('~/assets/offer/salon.jpg'),
          overlay: 'rgba(0, 139, 139, 0.615)',
          route: 'meble_pokojowe',
        },
        {
          id: 2,
          name: 'Meble łazienkowe',
          bg: require('~/assets/offer/bathroom.jpg'),
          overlay: 'rgba(155, 34, 38, 0.615)',
          route: 'meble_lazienkowe',
        },
        {
          id: 3,
          name: 'Łoża sypialniane',
          bg: require('~/assets/offer/bed.jpg'),
          overlay: 'rgba(148, 210, 189,  0.615)',
          route: 'loza_sypialniane',
        },
      ],
    }
  },
  computed: {
    selectedProducers() {
      const arr = []
      for (let i = 0; i <= 3; i++) {
        arr.push(this.producers[i])
      }
      return arr
    },
  },
  methods: {
    openModal(src) {
      this.currentImage = src
    },
    enter: function (el, done) {
      console.log(el)

      done()
    },
  },
  // beforeMount() {
  //   this.$router.push('/build')
  // },
}
</script>
<style lang="scss" scoped>
// style for horizontal lines that appears in every section, style for horziontal lines is put into default layout
.netSection {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #dadada;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 64px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #dadada;
  }
}
#__layout
  > div
  > div
  > section.howTo
  > div.boxes.flicking-viewport
  > div
  > div:nth-child(1)
  > svg {
  transform: rotate(45deg);
  width: 48px;
  margin-bottom: 8px;
}
.overlay {
  overflow: hidden;
  position: relative;
  .upper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.6;
  }
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
  }
}
.top-content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  top: 220px;
  margin: 24px;
  z-index: 1;
  left: 0;
  h1 {
    color: white;
    line-height: 52px;
    font-size: 60px;
  }
  p {
    color: white;
    font-size: 16px;
    &:nth-child(2) {
      margin-top: 24px;
    }
  }
}
.bottom-content {
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-left: 16px;
  }
}

.content {
  padding: 32px;
  display: flex;
  flex-direction: column;
  place-content: center;
}
.subTitle {
  font-size: 24px;
  font-weight: bold;
  color: #f09f4b;
  position: relative;
  padding-left: 42px;
  &:before {
    content: '';
    width: 32px;
    height: 4px;
    background: #f09f4b;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
.title {
  font-size: 36px;
  color: #005f73;
  font-weight: bold;
}
.contentText {
  margin-top: 8px;
  font-size: 24px;
  color: black;
}
.counters {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
}
.singleCounter {
  margin: 20px;
  display: flex;
  flex-direction: column;
}
.bigNumber {
  color: #f09f4b;
  font-size: 72px;
  font-weight: bold;
}
.smallText {
  font-size: 24px;
  color: black;
  max-width: 142px;
}
.systems {
  padding: 32px;
}
.systemsTitle {
  font-size: 36px;
  font-weight: bold;
  color: #ae2012;
}
.systemsText {
  font-size: 24px;
  color: black;
  margin-top: 8px;
}
.producers {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 120px;
}
.singleProducer {
  max-width: 110px;
  margin: 16px;
}
.howTo {
  background: #f1f1f1;
  position: relative;
}
.photo {
  width: 100%;
  height: auto;
  box-shadow: 0px 12px 24px 1px rgba(0, 0, 0, 0.38);
  margin-top: -96px;
  margin-bottom: 64px;
}
.singleBox {
  width: 260px;
  height: 260px;
  display: flex;
  flex-direction: column;
  place-content: center;
  padding: 32px;
  margin: 0 12px;
}
.boxTitle {
  font-size: 18px;
  font-weight: bold;
}
.boxSubTitle {
  font-size: 16px;
  color: #363232;
}
button.prev,
button.next {
  background: #363636;
  width: 42px;
  height: 42px;
  margin-top: 80px;
  border: none;
  margin: 96px 8px 0 0;
}
button.prev {
  transform: rotate(180deg);
}
button.next {
  margin-right: 32px;
}
.stripe {
  width: 100%;
  height: 60px;
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: flex-end;
  justify-content: flex-end;
}
.contentButton {
  padding: 8px 36px;
  background: #005f73;
  text-decoration: none;
  color: white;
  box-shadow: 2px 2px 12px #178b84;
  width: 186px;
  height: 42px;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 42px;
}
.realisations {
  margin-top: 80px;
}
.realisationImages {
  width: 324px;
  height: 342px;
  margin: 8px 0;
}
.offerList {
  display: flex;
  flex-direction: column;
  place-content: center;
  padding: 32px;
}
.singleOffer {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-decoration: none;
  // box-shadow: 0px 0px 0px 4000px rgba(27, 61, 88, 0.5) inset;
  margin: 4px 0;
}
.offerTitle {
  font-size: 24px;
  color: white;
  height: 30px;
  margin: 16px;
}
.contact .content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contactSubTitle {
  font-size: 18px;
  font-weight: bold;
  color: #f09f4b;
  text-align: center;
  position: relative;
  padding: 0 44px;
  &:before {
    content: '';
    width: 32px;
    height: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    background: #ee9b00;
  }
  &:after {
    content: '';
    width: 32px;
    height: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    background: #ee9b00;
  }
}
.contactTitle {
  font-size: 32px;
  color: #005f73;
  font-weight: bold;
}
.contactNdTitle {
  font-size: 22px;
  font-weight: bold;
  margin: 32px 0 16px 0;
  color: #ee9b00;
}
.contactForm {
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
.titleContent {
  padding: 42px;
}
@media (min-width: 768px) {
  .top-content {
    margin: 0 48px;
    width: 600px;
    h1 {
      font-size: 72px;
      line-height: 68px;
    }
    p {
      font-size: 36px;
    }
  }
  .bottom-content {
    bottom: 4%;
    a {
      font-size: 36px;
    }
  }
  .text {
    font-size: 36px;
    line-height: 34px;
  }
  .check {
    a {
      font-size: 24px;
      font-weight: bold;
    }
  }
}
@media (min-width: 1440px) {
  .top-content p {
    font-size: 22px;
  }
  .top-content h1 {
    width: 500px;
  }
  .bottom-content {
    width: initial;
    position: initial;
    a {
      font-size: 22px;
    }
  }
  .text {
    font-size: 22px;
    color: #9b2226;
  }
  .aboutus {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .content {
    padding: 120px;
    width: 800px;
  }
  .subTitle {
    font-size: 24px;
  }
  .title {
    font-size: 72px;
    line-height: 68px;
  }
  .counters {
    margin: 160px 0 0 0;
  }
  .systems {
    padding-left: 120px;
    width: 800px;
  }
  .photo {
    position: absolute;
    right: 80px;
    top: -200px;
    margin: initial;
    width: 460px;
    height: 600px;
  }
  .boxes-lg {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 0 80px;
    height: 360px;
  }
  .single-box {
    border-top: 2px solid #dadada;
    border-right: 2px solid #dadada;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 36px;
    .boxTitle {
      margin-top: 24px;
    }
    p {
      width: 260px;
    }
    &:hover {
      background: darkcyan;
      cursor: pointer;
      svg {
        fill: white;
      }
      p {
        color: white;
      }
    }
  }
  #__layout
    > div
    > div.container
    > section.howTo
    > div.boxes-lg
    > div:nth-child(1)
    > svg {
    // transform: rotate(45deg);
    overflow: initial;
    width: 40px;
  }
  .stripe {
    height: 64px;
  }
  .realisations {
    margin-top: 0;
    display: flex;
    flex-direction: row-reverse;
  }
  .realisationImages {
    display: none;
  }
  .stripeGallery {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 800px;
    padding: 100px 0;
  }
  .singleStripe {
    height: 100%;
    width: 160px;
    margin: 0 8px;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      width: 220px;
    }
  }
  .offerList {
    display: flex;
    flex-direction: row;
    padding-bottom: 160px;
  }
  .singleOffer {
    width: 300px;
    height: 300px;
    margin: 0 8px;
  }
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .content {
      padding-top: 0px;
      width: 100%;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-around;
    }
    .contactForm {
      width: 600px;
    }
  }
  .titleContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 96px;
  }
  .contactTitle {
    font-size: 64px;
  }
}
</style>
