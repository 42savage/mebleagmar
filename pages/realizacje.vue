<template>
  <div class="wrapper">
    <div class="grid" ref="grid">
      <img
        loading="lazy"
        v-for="image in images"
        :key="image.id"
        :src="image.src"
        :alt="image.alt"
        class="singleItem"
      />
    </div>
    <button class="backTop" @click="backTop">
      <svg-arrow class="arrow" />
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      images: [],
    }
  },
  methods: {
    backTop() {
      window.scrollTo(0, 0)
    },
  },
  mounted() {
    for (let i = 0; i < 61; i++) {
      this.images.push({
        id: i,
        src: require(`~/assets/gallery/realisations/img${i}.jpg`),
        alt: 'Zdjęcie przedstawiające kuchnie.',
      })
    }
    this.$gsap.fromTo(
      this.$refs.grid,
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
          trigger: this.$refs.grid,
          start: 'top bottom + 20',
          toggleActions: 'play pause resume reverse',
        },
      }
    )
  },
}
</script>

<style scoped lang="scss">
.backTop {
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 60px;
  height: 60px;
  background: rgb(18, 17, 17);
  cursor: pointer;
}
.arrow {
  transform: rotate(270deg);
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  padding: 24px;
}
.singleItem {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (min-width: 1440px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr min-content;
  }
}
</style>
