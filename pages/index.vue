<template>
  <div class="container">
    <modalImage :imageSrc="currentImage" />
    <header class="mainHeader">
      <div ref="topContent" class="top-content">
        <h1>Meble na wymiar</h1>
        <p>Produkujemy meble na wymiar na terenie Radomia i okolic.</p>
        <p>
          Oferujemy meble kuchenne, meble pokojowe, meble łazienkowe, szafy oraz
          łoża sypialniane i zabudowy RTV.
        </p>
        <p>Zajrzyj do naszych realizacji.</p>
        <div v-if="$mq === 'lg'" class="bottom-content">
          <svg-check :width="120" :height="120" /><nuxt-link to="/realizacje"
            >Nasze realizacje</nuxt-link
          >
        </div>
      </div>
      <div class="overlay">
        <div class="upper"></div>
        <video src="bg.mp4" muted loop autoplay></video>
      </div>
      <div class="bottom-content" v-if="$mq !== 'lg'">
        <svg-check :width="66" :height="36" /><nuxt-link to="/realizacje"
          >Nasze realizacje</nuxt-link
        >
      </div>
    </header>
    <section
      ref="net"
      class="aboutus"
      :class="{ netSection: this.$route.path === '/' && this.$mq === 'lg' }"
    >
      <div class="content">
        <p class="subTitle">Wysoka jakość i profejsonalizm</p>
        <p class="title">Dowiedz się o nas więcej</p>
        <p class="contentText">
          Produkcją mebli zajmujemy się od 20 lat. Do każdego zamówienia
          podchodzimy z należytym staraniem aby jakość wykonania zadowoliła
          każdego nawet najbardziej wymagająceog Klienta.
        </p>
        <p class="contentText">
          Naszym priorytetem jest satysfakcja Klienta dlatego dbale podchodzmy
          do szczegółów.
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
      <div class="opinions" v-if="$mq === 'lg'">
        <p class="opinionsTitle">Opinie naszych zadowolonych Klientów</p>
        <div
          class="singleOpinion"
          ref="singleOpinion"
          v-for="opinion in opinions"
          :key="opinion.id"
        >
          <div class="left">
            <svg-user />
            <p class="opinionName">
              {{ opinion.name }}
            </p>
          </div>
          <p class="opinionContent">{{ opinion.content }}</p>
          <client-only
            ><vue-stars class="stars" :value="opinion.stars" :readonly="true"
          /></client-only>
        </div>
        <div class="moreBox">
          <span class="moreOpinions">Więcej opinii znajdziesz na </span>
          <a
            class="moreOpinions"
            href="https://www.google.com/search?q=meble+agmar+radom&oq=meble+agmar+r&aqs=chrome.0.69i59j69i57j0i22i30l3j69i60l3.4522j0j7&sourceid=chrome&ie=UTF-8#lrd=0x471867383b56d30f:0xfbd398022dbb76c0,1,,,"
            target="_blank"
            >mapach google</a
          ><span class="moreOpinions"> oraz na </span
          ><a
            href="https://fixly.pl/profil/NkaKOW5F"
            class="moreOpinions"
            target="_blank"
            >portalu fixly.pl</a
          >
        </div>
      </div>
      <div v-else>
        <client-only>
          <flicking class="opinions">
            <div
              class="singleOpinion"
              v-for="opinion in opinions"
              :key="opinion.id"
            >
              <div class="left">
                <svg-user />
                <p class="opinionName">
                  {{ opinion.name }}
                </p>
              </div>
              <p class="opinionContent">{{ opinion.content }}</p>

              <vue-stars
                class="stars"
                :value="opinion.stars"
                :readonly="true"
              />
            </div>
          </flicking>
        </client-only>
      </div>
      <div class="systems">
        <p class="systemsTitle">Wykorzystujemy systemy renomowanych firm</p>
        <p class="systemsText">
          Przez lata w branży i setki wykonanych projektów znaleźliśmym
          najlepsze pod względem jakości systemy i akcesoria meblowe, które
          zdecydowanie spełnią Państwa wymagania.
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
        <p class="title">Realizacja zamówienia to pestka</p>
        <p class="contentText">
          Cały proces jest na tyle prosty, że postanowiliśmy przedstawić go za
          pomocą czterech poniższych kroków.
        </p>
      </div>
      <div v-if="$mq !== 'lg'">
        <client-only>
          <flicking>
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
      </div>
      <div v-if="$mq === 'lg'" class="boxes-lg">
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
        <!-- <button v-if="$mq !== 'lg'" class="prev"><svg-arrow /></button>
        <button v-if="$mq !== 'lg'" class="next"><svg-arrow /></button> -->
      </div>
    </section>
    <section
      class="realisations"
      :class="{ netSection: this.$route.path === '/' && this.$mq === 'lg' }"
    >
      <div class="content">
        <p class="subTitle">Meble to nasza pasja</p>
        <p class="title">Kochamy to co robimy, a oto tego efekty</p>
        <p class="contentText">
          Przez lata pracy udało nam się stworzyć dosyć pokaźne portfolio, z
          którym możesz się zapoznać na tej właśnie stronie, wystarczy, że
          klikniesz w poniższy odnośnik.
        </p>
        <nuxt-link to="/realizacje" href="#" class="contentButton"
          >Zajrzyj do galerii</nuxt-link
        >
        <p>
          Prowadzimy również
          <a
            href="https://www.facebook.com/MebleNaWymiarAgmar"
            target="_blank"
            title="Strona na facebooku"
            >fanpage na facebooku</a
          >, na którego wrzucamy wszystkie swoje zamówienia, konkursy,
          ogłoszenia oraz wydarzenia branżowe w jakich braliśmy udział.
        </p>
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
        <p class="subTitle">Wysoka jakość i profesjonalizm</p>
        <p class="title">Zapoznaj się z naszą ofertą</p>
        <p class="contentText">
          Wychodząc na przeciw Państwa oczekiwaniom cały czas rozszerzamy swoją
          ofertę o nowe produkty. Sprawdź co mamy do zaoferowania i skontaktuj
          się z nami.
        </p>
        <nuxt-link to="/oferta" class="offerBtn">Oferta</nuxt-link>
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
      ref="contact"
      id="contact"
      :class="{ netSection: this.$route.path === '/' && this.$mq === 'lg' }"
    >
      <div class="titleContent">
        <p class="contactSubTitle">
          Z przyjemnością stworzymy dla Ciebie coś niezwykłego
        </p>
        <p class="contactTitle">Skontaktuj się z nami</p>
      </div>
      <div class="content">
        <contact />

        <div class="contactInfoBox">
          <p class="contactNdTitle">Telefonicznie lub mailowo</p>
          <div class="contactContainer">
            <a href="tel:698088271" class="phone">tel. 698-088-271</a>
            <a href="mailto:kontakt@radommeble.pl" class="mail"
              >email: kontakt@radommeble.pl</a
            >
          </div>
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.2744593087295!2d21.241886015628552!3d51.32447147960556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471867383b56d30f%3A0xfbd398022dbb76c0!2sMeble%20na%20wymiar%20Agmar!5e0!3m2!1spl!2snl!4v1654792879571!5m2!1spl!2snl"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            title="Mapa przedstawiająca lokalizację firmy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  data() {
    return {
      currentImage: '',
      boxes: [
        {
          id: 0,
          title: 'Kontakt',
          subTitle:
            'Kontakt z naszym pracownikiem i umówienie się na pomiar. To tutaj zaczyna się całą historia.',
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
            'Wizyta u klienta w celu wymierzenia ścian, określenia charakterystycznych punktów i doprecyzowaniu szczegółów i oczekiwań.',
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
          subTitle:
            'Przedstawienie przez nas kosztorysu i ewentualnego planu 3D. Po akceptacji przez klienta produkcja mebli.',
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
          subTitle: 'Umówienie się na montaż i realizacja zamówienia.',
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
        {
          id: 4,
          name: 'Szafy',
          bg: require('~/assets/offer/wardrobe.jpg'),
          overlay: 'rgba(233, 161, 66,  0.615)',
          route: 'szafy',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      opinions: 'opinions/opinions',
    }),
    selectedProducers() {
      const arr = []
      for (let i = 0; i <= 3; i++) {
        arr.push(this.producers[i])
      }
      return arr
    },
  },
  methods: {
    revealSections() {
      let sections = []
      if (this.$mq !== 'sm') {
        sections = [
          this.$el.querySelector('.content'),
          this.$el.querySelector('.counters'),
          this.$el.querySelector('.opinions'),
          this.$el.querySelector('.systems'),
          this.$el.querySelector('.howTo > .content >.subTitle'),
          this.$el.querySelector('.howTo>.content>.title'),
          this.$el.querySelector('.howTo>.content>.contentText'),
          this.$el.querySelectorAll('.boxes-lg'),
          this.$el.querySelector('.realisations > .content'),
          this.$el.querySelector('.realisations > .stripeGallery'),
          this.$el.querySelector('.offer > .content'),
          this.$el.querySelector('.offer > .offerList'),
          this.$el.querySelector('.contact > .titleContent'),
          this.$el.querySelector('.contact > .content'),
          this.$el.querySelectorAll('.singleOpinion'),
          this.$el.querySelectorAll('.moreBox'),
          this.$el.querySelectorAll('.opinionsTitle'),
        ]
      } else {
        sections = [
          this.$el.querySelector('.content'),
          this.$el.querySelector('.counters'),
          this.$el.querySelector('.opinions'),
          this.$el.querySelector('.systems'),
          this.$el.querySelector('.howTo > .content >.subTitle'),
          this.$el.querySelector('.howTo>.content>.title'),
          this.$el.querySelector('.howTo>.content>.contentText'),
          this.$el.querySelector('.realisations > .content'),
          this.$el.querySelector('.offer > .content'),
          this.$el.querySelector('.offer > .offerList'),
          this.$el.querySelector('.contact > .titleContent'),
          this.$el.querySelector('.contact > .content'),
          this.$el.querySelectorAll('.singleOpinion'),
        ]
      }
      sections.forEach((section) => {
        this.$gsap.fromTo(
          section,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: 'easeInOut',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom + 20',
              // markers: true,
              toggleActions: 'play pause resume reverse',
            },
          }
        )
      })
    },
    openModal(src) {
      this.currentImage = src
    },
    enter: function (el, done) {
      done()
    },
  },
  // async mounted() {
  // try {
  //   await this.$recaptcha.init()
  // } catch (e) {
  //   console.error(e)
  // }
  // },

  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
    this.revealSections()
    let gsap = this.$gsap
    gsap.fromTo(
      this.$refs.topContent,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 1,
      }
    )
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&display=swap');
$text-color: #083233;
iframe {
  margin-top: 16px;
}
#__layout
  > div
  > div.container
  > section.aboutus.netSection
  > div.systems
  > div
  > img:nth-child(2) {
  width: 60px;
}
#__layout
  > div
  > div.container
  > section.aboutus.netSection
  > div.systems
  > div
  > img:nth-child(4) {
  width: 80px;
}
img {
  object-fit: cover;
}
.messenger {
  color: rgb(0, 117, 206);
}
.tst {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.flicking-camera {
  display: flex !important;
}

.moreBox {
  padding: 0 32px;
}
.offerBtn {
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
.boxes {
  display: flex;
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
    background: $text-color;
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
    text-shadow: 2px 2px #000000;
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
  justify-content: center;
  align-items: flex-start;
}
.subTitle {
  font-size: 16px;
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
  font-size: 16px;
  color: $text-color;
  font-family: 'Rajdhani', sans-serif;
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
  color: $text-color;
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
  color: $text-color;
  margin-top: 8px;
  font-family: 'Rajdhani', sans-serif;
}
.producers {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 120px;
}
.singleProducer {
  max-width: 110px;
  margin: 16px;
  object-fit: contain;
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
.boxes {
  display: flex;
  flex-direction: row;
  margin: 36px 0;
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
  padding: 16px 36px;
  background: #005f73;
  text-decoration: none;
  color: white;
  box-shadow: 2px 2px 12px #178b84;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 42px;
}
.realisations {
  margin-top: 80px;
}
.realisationImages {
  width: 100%;
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
  font-size: 20px;
  color: white;
  margin: 8px;
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
  text-align: center;
}

.titleContent {
  padding: 42px;
}
.map {
  width: 100%;
  height: 200px;
}
.moreOpinions {
  font-weight: bold;
  color: darkcyan;
  margin: 0 2px;
}
.singleOpinion {
  position: relative;
  width: 100%;
  background: #f9f9f9;
  color: #4e4e4e;
  display: flex;
  margin: 8px 4px;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
.stars {
  position: absolute;
  right: 32px;
  bottom: 16px;
  display: flex;
  flex-direction: row;
}
.opinions {
  padding: 0 32px;
}
.opinionsTitle {
  font-size: 24px;
  color: darkcyan;
  font-weight: bold;
  padding: 0 24px;
}
.opinionName {
  font-weight: bold;
  color: rgb(20, 20, 20);
}
.opinionContent {
  color: rgb(20, 20, 20);
  margin-bottom: 16px;
  padding: 16px;
}
.phone,
.mail {
  text-decoration: none;
  color: #083233;
  width: initial;
  &:hover {
    color: darkcyan;
    font-weight: bold;
  }
}
.contactContainer {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .singleOpinion {
    padding: 32px;
  }
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
  .map {
    width: 600px;
    margin-top: 32px;
  }
}
@media (min-width: 1280px) {
  // fix because of problem with reveal animation
  .list a {
    bottom: initial;
  }
  // end of fix
  .bottom-content {
    bottom: -160px !important;
    left: -100px !important;
  }
  .content {
    padding: 96px 120px;
  }
  .contentText {
    width: 400px;
  }
  .counters {
    padding: 0 120px;
  }
  .opinions {
    padding: 120px;
    display: grid;
    grid-template-columns: 50% 50%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .singleOpinion {
    padding: 0;
    margin: 8px;
  }
  .moreBox {
    margin-top: 60px;
  }
  .systems {
    padding: 80px 120px;
  }
  .photo {
    margin: 0;
  }
  #__layout
    > div
    > div.container
    > section.howTo.netSection
    > div.content
    > p.subTitle {
    margin-top: 56px;
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
    padding: 0 8px;
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
  #__layout > div > div.container > section.offer.netSection > div.content {
    padding-bottom: 0;
  }
  .offerList {
    padding: 0 120px 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  }
  .titleContent {
    padding: 0 360px;
  }
  .contactForm {
    padding: 32px 180px;
  }
  iframe.map {
    width: 100%;
    height: 320px;
  }
}
@media (min-width: 1440px) {
  .contentText {
    font-size: 22px;
  }
  .left {
    margin-right: 32px;
  }
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
    align-items: flex-start;
  }
  .subTitle {
    font-size: 24px;
  }
  .title {
    font-size: 72px;
    line-height: 68px;
    margin-bottom: 16px;
  }
  .counters {
    padding: 0;
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
      padding: 0;
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
  .contactInfoBox {
    width: 50%;
    margin: 0 12px;
  }
  .opinionsTitle {
    font-size: 32px;
    padding: 0;
  }
  .opinions {
    width: 100%;
    padding: 0 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .singleOpinion {
    padding: 32px;
    width: 600px;
  }
  .moreBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0;
  }
  .singleProducer {
    margin: 8px;
  }
}
</style>
