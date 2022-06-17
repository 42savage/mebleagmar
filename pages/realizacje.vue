<template>
  <div class="wrapper">
    <div class="grid">
      <img
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
  computed: {
    ...mapGetters({
      images: 'realisations/images',
    }),
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
