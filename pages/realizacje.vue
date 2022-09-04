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
  // computed: {
  //   ...mapGetters({
  //     images: 'realisations/images',
  //   }),
  // },
  mounted() {
    for (let i = 0; i < 61; i++) {
      this.images.push({
        id: i,
        src: require(`~/assets/gallery/realisations/img${i}.jpg`),
        alt: 'Zdjęcie przedstawiające kuchnie.',
      })
    }
    console.log(this.images)
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
          // markers: true,
          toggleActions: 'play pause resume reverse',
        },
      }
    )
  },
}
</script>

<style scoped lang="scss">
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
