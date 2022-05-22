<template>
  <div class="wrapper" ref="container">
    <div class="header">
      <div
        ref="backgroundImage"
        class="image"
        :style="{
          background: `linear-gradient(to bottom, ${this.specifiedOffer.bgColor}, rgba(100, 100, 0, 0.01)), url(${this.specifiedOffer.bg})`,
        }"
      >
        <h1>{{ specifiedOffer.title }}</h1>
      </div>
    </div>
    <section class="main-content">
      <div class="breadcrumbs">
        <nuxt-link to="/" class="back"
          ><svg-arrow :color="this.specifiedOffer.bgColor"
        /></nuxt-link>
        <div>
          <nuxt-link
            :style="{ color: this.specifiedOffer.bgColor }"
            class="link"
            to="/"
            >Strona główna</nuxt-link
          ><span> > </span><span>{{ this.specifiedOffer.title }}</span>
        </div>
      </div>
      <div class="content">
        <h1 :style="{ color: this.specifiedOffer.bgColor }" class="title">
          {{ this.specifiedOffer.title }}
        </h1>
        <p class="subTitle">{{ this.specifiedOffer.subTitle }}</p>
        <p>{{ this.specifiedOffer.textContent }}</p>
        <ul class="images">
          <li v-for="image in this.specifiedOffer.images" :key="image.id">
            <img :src="image.src" :alt="image.desc" />
          </li>
        </ul>
        <h2 :style="{ color: this.specifiedOffer.bgColor }" class="listTitle">
          {{ this.specifiedOffer.header }}
        </h2>
        <ul class="list">
          <li v-for="element in this.specifiedOffer.list" :key="element.id">
            {{ element }}
          </li>
        </ul>
        <div class="systems">
          <p>Systemy, które wykorzystujemy</p>
          <div class="systemsGrid">
            <img src="~/assets/blum.jpg" alt="Systemy firmy Blum" />
            <img src="~/assets/gamet.jpg" alt="Systemy firmy Gamet" />
            <img src="~/assets/schwinn.jpg" alt="Systemy firmy Schwinn" />
            <img src="~/assets/siro.jpg" alt="Systemy firmy Siro" />
          </div>
        </div>
      </div>
    </section>
    <section v-if="this.specifiedOffer.extrass" class="extrass">
      <p>
        W zależności od Twoich potrzeb możesz skonfigurować swoją wymarzoną
        kuchnię.
      </p>
      <p>
        Możesz dobrać szereg różnych podzespołów takich jak systemy jakie mamy
        zastosować, typ frontów jak i szkło z grafiką.
      </p>
      <p>Extrass: {{ this.specifiedExtrass }}</p>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      offer: 'offer/offer',
      specifiedOffer: 'offer/specifiedOffer',
      specifiedExtrass: 'offer/specifiedExtrass',
    }),
  },
  mounted() {
    this.$el.querySelector('.image').style.backgroundPosition = `50% ${
      -innerHeight / 2
    }px`

    this.$gsap.to(this.$refs.backgroundImage, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      scrollTrigger: {
        trigger: this.$el.querySelector('.wrapper'),
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  },
}
</script>

<style scoped lang="scss">
.header {
  background-size: cover;
  background-position: center;
  .image {
    width: 100%;
    height: 300px;
  }
  h1 {
    display: none;
  }
}
.back {
  background: none;
  border: none;
  position: absolute;
  left: 24px;
  svg {
    transform: rotate(180deg);
  }
}
.content {
  padding: 32px 24px 0;
}
.breadcrumbs {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
.link {
  text-decoration: none;
  font-size: 16px;
}
.main-content {
  width: 100%;
  background: white;
  margin: -48px 0 0 0;
  padding: 24px 0;
  border-radius: 36px;
}
.title {
  font-size: 36px;
  font-weight: bold;
}
.subTitle {
  font-weight: bold;
  margin-bottom: 24px;
}
.images {
  width: 100%;
  list-style-type: none;
  img {
    margin: 8px 0;
    width: 100%;
    height: 140px;
    object-fit: cover;
  }
}
.listTitle {
  font-size: 24px;
  margin-bottom: 16px;
}
.list {
  font-size: 18px;
  margin-left: 24px;
  li {
    position: relative;
  }
}
.systems {
  p {
    font-size: 18px;
    margin: 16px 0;
  }
}
.extrass {
  padding: 0 24px;
}
@media (min-width: 1440px) {
  .header {
    position: relative;
    width: 100%;
    height: 100vh;
    h1 {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 64px;
    }
    .image {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
    }
  }
  .content {
    padding: 32px 120px;
    p {
      width: 600px;
    }
  }
  .images {
    display: flex;
    li {
      width: 33%;
      height: 360px;
      margin: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .breadcrumbs {
    margin-top: 60px;
  }
  .back {
    left: 120px;
  }
}
</style>
