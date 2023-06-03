<template>
  <div class="wrapper">
    <header
      class="mainHeader"
      :style="{
        background: `url(${fronty.bgImg}) center no-repeat`,
      }"
    >
      <h1 v-if="$mq === 'lg'">{{ fronty.title }}</h1>
    </header>
    <breadcrumbs style="padding: 24px 24px 0 24px" :title="fronty.title" />
    <div class="content">
      <h1 class="title">{{ fronty.title }}</h1>
      <p class="description">{{ fronty.description }}</p>
      <p class="contentText">{{ fronty.content }}</p>
    </div>
    <div class="images">
      <img
        class="image"
        v-for="image in fronty.images"
        :key="image.id"
        :src="image.src"
        :alt="image.alt"
      />
    </div>
    <div class="extra">
      <h1 class="title">{{ fronty.extra.title }}</h1>
      <p class="description">{{ fronty.extra.description }}</p>
      <p class="contentText">{{ fronty.extra.content }}</p>
    </div>
    <div class="contactWrapper"><contact /></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      fronty: 'offer/specifiedFronty',
    }),
  },
}
</script>
<style scoped lang="scss">
.contactWrapper {
  padding: 24px;
  margin-bottom: 32px;
}
.mainHeader {
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover !important;
}
.content {
  padding: 32px;
}
.title {
  color: #ca6602;
}
.description {
  font-weight: bold;
}
.contentText {
  padding: 12px 0;
}
.image {
  padding: 0 4px;
  width: 100%;
}
@media (min-width: 1440px) {
  .mainHeader {
    height: 600px;
    h1 {
      color: white;
      font-size: 60px;
    }
  }
  .contentText {
    width: 400px;
  }
  .wrapper {
    div {
      padding: 0 120px;
    }
  }
}
</style>
