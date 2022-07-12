<template>
  <div class="wrapper">
    <div class="grid" ref="grid">
      <img
        v-for="image in images"
        :key="image.id"
        :src="image.src"
        :alt="image.alt"
        ref="singleItem"
        class="singleItem"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      images: 'realisations/images',
    }),
  },
  mounted() {
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
}
@media (min-width: 1440px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr min-content;
  }
}
</style>
