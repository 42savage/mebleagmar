<template>
  <div v-if="showModal" class="modal">
    <button class="close" @click="modalState">
      <div class="line"></div>
      <div class="line"></div>
    </button>
    <div
      class="image"
      :style="{
        backgroundImage:
          'url(' + require(`~/assets/gallery/${imageSrc}.jpg`) + ')',
      }"
    ></div>
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
  background: rgba(0, 0, 0, 0.342);
  padding: 48px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
}
.image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.close {
  background: none;
  border: none;
  position: absolute;
  right: 0;
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
</style>
