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
      </div>
      <div class="overlay">
        <div class="upper"></div>
        <video src="bg.mp4" muted loop autoplay></video>
      </div>
      <div class="bottom-content">
        <svg-check :width="66" :height="36" /><a>Nasze realizacje</a>
      </div>
    </header>
    <section class="realisations">
      <h3 class="section-title">Jak wygląda proces realizacji?</h3>
      <client-only>
        <Flicking class="boxes">
          <div
            v-for="box in boxes"
            :key="box.id"
            class="single-box"
            v-bind:style="{ backgroundColor: box.color }"
          >
            <component
              :is="`svg-${box.icon.name}`"
              v-bind="{
                color: box.icon.color,
                width: box.icon.width,
                height: box.icon.height,
              }"
            />
            <h4 v-bind:style="{ color: box.icon.color }">{{ box.name }}</h4>
            <p v-bind:style="{ color: box.icon.color }">{{ box.content }}</p>
          </div>
        </Flicking>
      </client-only>
      <p class="text">
        Do produkcji naszych mebli wykorzystujemy systemy renomowanych
        producentów.
      </p>
      <client-only>
        <Flicking
          class="producers"
          :plugins="plugins"
          :options="{ align: 'center', circular: true }"
        >
          <img
            v-for="producer in producers"
            :key="producer.id"
            :src="require(`~/assets/${producer.name}.jpg`)"
            :alt="`${producer.name} logo`"
            class="producer"
          />
          -->
        </Flicking>
      </client-only>
    </section>
    <section class="realisation-gallery">
      <h3 class="section-title">Sprawdź nasze realizacje</h3>
      <div class="gallery">
        <div
          class="single-image"
          v-for="image in images"
          :key="image.id"
          :style="{
            backgroundImage:
              'url(' + require(`~/assets/gallery/${image.src}.jpg`) + ')',
          }"
          @click="openModal(`${image.src}`)"
        ></div>
      </div>
      <div class="check">
        <a>Zobacz pełną galerię</a>
        <svg-arrow :color="'black'" :width="16" :height="24" />
      </div>
    </section>
    <section class="offer">
      <h3 class="section-title">Zapoznaj się z naszą ofertą</h3>
      <div class="offer-wrapper">
        <nuxt-link
          tag="div"
          class="single-offer"
          v-for="singleOffer in offer"
          :key="singleOffer.id"
          :to="`oferta/${singleOffer.route}`"
          v-bind:style="{
            backgroundImage:
              'url(' + require(`~/assets/offer/${singleOffer.bg}.jpg`) + ')',
          }"
        >
          <div class="overlay" :style="{ background: singleOffer.overlay }">
            <h4>{{ singleOffer.name }}</h4>
          </div>
        </nuxt-link>
      </div>
    </section>
    <section class="contact">
      <h3 class="section-title">Skontaktuj się z nami</h3>
      <h4 class="contact-sub-title">Przez formularz</h4>
      <form class="contact-form">
        <input type="text" name="name" placeholder="Imię i Nazwisko" />
        <input type="text" name="name" placeholder="Adres e-mail" />
        <input type="text" name="name" placeholder="Numer telefonu" />
        <input type="text" name="name" placeholder="Firma (opcjonalnie)" />
        <textarea
          placeholder="Opisz w kilku słowach swoje wymarzone zamówienie..."
        ></textarea>
        <input type="submit" value="Wyślij" />
      </form>
      <div class="contact-box">
        <div class="overlay">
          <h4 class="contact-sub-title">Bezpośrednio przez maila</h4>
          <p>e-mail: dyniameble@op.pl</p>
          <h4 class="contact-sub-title">Lub telefonicznie</h4>
          <p>telefon: 222-444-333</p>
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
          name: 'Kontakt',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
          name: 'Pomiar',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
          name: 'Realizacja',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
          name: 'Dostawa i montaż',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          color: '#E56659',
          icon: {
            name: 'truck',
            color: '#EDEDED',
            width: 36,
            height: 36,
          },
        },
      ],
      producers: [
        {
          id: 0,
          name: 'gamet',
        },
        {
          id: 1,
          name: 'siro',
        },
        {
          id: 2,
          name: 'schwinn',
        },
        {
          id: 3,
          name: 'blum',
        },
        {
          id: 4,
          name: 'gamet',
        },
        {
          id: 5,
          name: 'siro',
        },
        {
          id: 6,
          name: 'schwinn',
        },
        {
          id: 7,
          name: 'gamet',
        },
        {
          id: 8,
          name: 'siro',
        },
        {
          id: 9,
          name: 'schwinn',
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
          bg: 'kitchen',
          overlay: 'rgba(202, 103, 2, 0.815)',
          route: 'meble_kuchenne',
        },
        {
          id: 1,
          name: 'Meble pokojowe',
          bg: 'salon',
          overlay: 'rgba(0, 139, 139, 0.815)',
          route: 'meble_pokojowe',
        },
        {
          id: 2,
          name: 'Meble łazienkowe',
          bg: 'bathroom',
          overlay: 'rgba(155, 34, 38, 0.815)',
          route: 'meble_lazienkowe',
        },
        {
          id: 3,
          name: 'Łoża sypialniane',
          bg: 'bed',
          overlay: 'rgba(148, 210, 189,  0.815)',
          route: 'loza_sypialniane',
        },
      ],
    }
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
  beforeMount() {
    this.$router.push('/build')
  },
}
</script>
<style lang="scss" scoped>
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
  // width: 330px;
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
.realisations {
  padding: 0 24px;
}
.section-title {
  margin: 60px 0;
  font-size: 36px;
  color: #3d3d3d;
  font-weight: bold;
  width: 265px;
  line-height: 34px;
}
.boxes {
  margin: 60px 0;
}
.single-box {
  width: 240px;
  height: 240px;
  padding: 24px;
  display: flex;
  margin: 0 12px;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  h4 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
  svg {
    margin: 8px 0;
    width: 80px;
    margin-left: -24px;
  }
}
.text {
  font-size: 24px;
  font-weight: bold;
}
.producers {
  margin: 60px 0;
}
.producer {
  min-width: 120px;
  min-height: 30px;
  margin: 0 12px;
}
.realisation-gallery {
  padding: 0 24px;
}
.gallery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.single-image {
  width: 100%;
  height: 180px;
  background-position: center;
  background-size: cover;
  background-repeat: none;
  margin: 12px 0;
}
.check {
  width: 100%;
  margin: 24px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    margin: 0 0 0 16px;
  }
}
.offer {
  padding: 24px;
  .section-title {
    margin-bottom: 60px;
  }
}
.single-offer {
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
  text-decoration: none;
  margin: 12px 0;
  .overlay {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 24px;
  }
  h4 {
    color: white;
    font-size: 16 px;
    font-weight: bold;
  }
}
.contact {
  padding: 24px;
}
.contact-sub-title {
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 16px 0;
}
.contact-form {
  width: 100%;
  input {
    width: 100%;
    margin: 8px 0;
    background: #f4f4f4;
    border: 1px solid #f1f1f1;
    height: 36x;
    padding: 8px;
  }
  textarea {
    width: 100%;
    height: 120px;
    background: #f4f4f4;
    border: 1px solid #f1f1f1;
    padding: 8px;
  }
  input:nth-last-child(1) {
    background: darkcyan;
    width: 100%;
    height: 36px;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
  }
}
.contact-box {
  width: 100%;
  margin-top: 16px;
  height: 200px;
  background-image: url('~/assets/gallery/img1.jpg');
  background-size: cover;
  background-position: center;
  .overlay {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 25, 43, 0.81);
    h4 {
      margin: 8px 0;
    }
    h4,
    p {
      color: white;
      margin-bottom: 12px;
    }
  }
}
@media (min-width: 768px) {
  .top-content {
    top: 42%;
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
    bottom: 64px;
    a {
      font-size: 36px;
    }
  }
  .realisations,
  .realisation-gallery,
  .offer,
  .contact {
    padding: 0 48px;
  }
  .section-title {
    font-size: 64px;
    line-height: 62px;
    width: 600px;
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
  .single-image {
    height: 240px;
  }
  .single-offer {
    height: 240px;
    h4 {
      font-size: 32px;
    }
  }
  .contact-sub-title {
    font-size: 24px;
  }
  .contact-form {
    input,
    input[type='submit'] {
      height: 60px;
      font-size: 24px;
    }
    textarea {
      font-size: 24px;
    }
  }
}
</style>
