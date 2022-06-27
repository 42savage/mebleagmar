<template>
  <div class="wrapper" ref="obj">
    <svg-logo ref="logo" fill="#0000f" :width="256" :height="256" />
  </div>
</template>
//
<script>
export default {
  mounted() {
    this.$gsap.fromTo(
      this.$refs.obj,
      {
        y: 0,
      },
      {
        yPercent: -100,
        duration: 2,
        ease: 'Power2.easeInOut',
      }
    )
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  background: rgb(199, 199, 199);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
