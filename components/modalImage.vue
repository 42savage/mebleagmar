<template>
  <div v-if="showModal" class="modal" v-scroll-lock="showModal">
    <div
      class="image"
      :style="{
        backgroundImage:
          'url(' + require(`~/assets/gallery/${imageSrc}.jpg`) + ')',
      }"
    >
      <button class="close" @click="modalState">
        <div class="line"></div>
        <div class="line"></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    }
  },
  props: {
    imageSrc: {
      type: String,
    },
  },
  methods: {
    modalState() {
      this.showModal = !this.showModal
    },
  },
  watch: {
    imageSrc: function (n) {
      if (n) {
        this.showModal = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.871);
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.close {
  background: none;
  border: none;
  position: absolute;
  top: -48px;
  right: 0;
  width: 42px;
  height: 42px;
  cursor: pointer;
  .line {
    width: 42px;
    height: 4px;
    background: white;
    margin: 3px 0;
    &:nth-child(1) {
      transform: rotate(-45deg);
    }
    &:nth-child(2) {
      transform: rotate(45deg);
      margin: -6px 0;
    }
  }
}

@media (min-width: 1024px) {
  .image {
    height: 80%;
  }
}
@media (min-width: 1440px) {
  .image {
    width: 80%;
  }
}
</style>
