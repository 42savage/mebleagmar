<template>
  <div class="container">
    <header
      :style="{
        background: `url(${this.systems.subPage.header.bgImg})`,
      }"
    >
      <h1 class="title">{{ systems.subPage.header.title }}</h1>
    </header>
    <section class="content">
      <breadcrumbs :title="systems.subPage.header.title" />
      <div class="mainText">
        <h3>{{ systems.subPage.body.title }}</h3>
        <h5>{{ systems.subPage.body.text }}</h5>
      </div>
      <div class="grid">
        <div
          class="singleBox"
          v-for="image in systems.subPage.body.grid"
          :key="image.id"
        >
          <div class="left">
            <img :src="image.src" :alt="image.alt" />
          </div>
          <div class="right">
            <div class="texts">
              <p class="contentTitle">{{ image.title }}</p>
              <p class="contentText">{{ image.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="extrContent" v-if="systems.extra">
      <section class="extra">
        <h1>{{ systems.extra.first_title }}</h1>
        <div class="offerGrid">
          <div
            class="offerItem"
            v-for="singleItem in systems.extra.first"
            :key="singleItem.id"
          >
            <img :src="singleItem.image" :alt="singleItem.subTitle" />
            <div class="bottom">
              <p class="singleTitle">{{ singleItem.title }}</p>
              <p class="sungleSubTitle">{{ singleItem.subTitle }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="extra">
        <h1>{{ systems.extra.second_title }}</h1>
        <div class="offerGrid">
          <div
            class="offerItem"
            v-for="singleItem in systems.extra.second"
            :key="singleItem.id"
          >
            <img :src="singleItem.image" :alt="singleItem.subTitle" />
            <div class="bottom">
              <p class="singleTitle">{{ singleItem.title }}</p>
              <p class="sungleSubTitle">{{ singleItem.subTitle }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="extra">
        <h1>{{ systems.extra.third_title }}</h1>
        <div class="offerGrid">
          <div
            class="offerItem"
            v-for="singleItem in systems.extra.third"
            :key="singleItem.id"
          >
            <img :src="singleItem.image" :alt="singleItem.subTitle" />
            <div class="bottom">
              <p class="singleTitle">{{ singleItem.title }}</p>
              <p class="sungleSubTitle">{{ singleItem.subTitle }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import breadcrumbs from '~/components/breadcrumbs.vue'
export default {
  components: { breadcrumbs },
  computed: {
    ...mapGetters({
      systems: 'offer/specifiedSystemy',
    }),
  },
  mounted() {
    console.log(this.$route.params)
  },
}
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 600px;
  object-fit: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover !important;
  background-position: center !important;
}
h1 {
  color: darkcyan;
  font-weight: bold;
  font-size: 24px;
}
.content {
  padding: 24px;
}
.title {
  font-size: 64px;
  color: white;
  text-align: center;
}
.grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.singleBox {
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
  }
}
.contentTitle {
  font-size: 32px;
  font-weight: bold;
}
.contentText {
  font-size: 18px;
}
.texts {
  margin: 32px;
}
.extra {
  padding: 24px;
}
.offerGrid {
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
}
.offerItem {
  width: 270px;
  img {
    width: 100%;
    object-fit: cover;
  }
}
.singleTitle {
  font-weight: bold;
  font-size: 18px;
}
.sungleSubTitle {
  font-size: 18px;
}
@media (min-width: 768px) {
  .singleBox {
    flex-direction: row;
    img {
      width: 400px;
    }
  }
  .content {
    h3 {
      font-size: 32px;
      width: 200px;
    }
    h5 {
      font-size: 18px;
      width: 400px;
    }
  }
  .mainText {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 60px;
  }
  .contentText {
    width: 400px;
  }
  .extra {
    padding: 0 120px;
  }
  .contentTitle {
    width: 440px;
  }
  .offerItem {
    margin: 16px;
  }
  .offerGrid {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
