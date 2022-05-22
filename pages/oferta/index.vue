<template>
  <div class="container">
    <header>
      <img
        src="~/assets/gallery/img1.jpg"
        alt="Fotografia przedstawiająca kuchnie w nowoczesnym wzornictwie."
        class="backgroundImage"
      />
    </header>
    <section class="offer">
      <div class="overlap">
        <p class="sectionTitle">Zapoznaj się z naszą ofertą</p>
      </div>
      <div class="offerGrid">
        <p class="sectionSubTitle">Meble</p>
        <div class="subGrid">
          <nuxt-link
            class="singleBox"
            v-for="box in meble"
            :key="box.id"
            :style="{
              background: `linear-gradient(to bottom, ${box.bgColor}, rgba(100, 100, 0, 0.01)), url(${box.bg})`,
            }"
            :to="box.route"
          >
            <p class="boxTitle">{{ box.title }}</p>
          </nuxt-link>
        </div>
        <p class="sectionSubTitle">Fronty meblowe</p>
        <div class="subGrid">
          <nuxt-link
            class="singleBox"
            v-for="box in frontyMeblowe"
            :key="box.id"
            :style="{
              background: `linear-gradient(to bottom, ${box.bgColor}, rgba(100, 100, 0, 0.01)), url(${box.bg})`,
            }"
            :to="box.route"
          >
            <p class="boxTitle">{{ box.title }}</p>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      meble: 'offer/meble',
      frontyMeblowe: 'offer/frontyMeblowe',
    }),
  },
}
</script>

<style scoped lang="scss">
.backgroundImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.overlap {
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 80%;
  padding: 8px 16px;
}
.sectionTitle {
  color: #f09f4b;
  font-weight: bold;
  font-size: 20px;
}
section {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px;
}
.sectionSubTitle {
  font-size: 24px;
  font-weight: bold;
  color: #005f73;
}
.singleBox {
  width: 100%;
  height: 240px;
  display: block;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-size: cover !important;
  text-decoration: none;
  background-position: center !important;
  margin: 8px 8px 8px 0;
}
.boxTitle {
  font-size: 22px;
  color: white;
  margin: 8px;
}
.subGrid {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  section {
    padding: 64px;
  }
  .subGrid {
    flex-direction: row;
  }
}
</style>
