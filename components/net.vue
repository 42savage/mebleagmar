<template></template>

<script>
export default {}
</script>

<style lang="scss">
@media (min-width: 1440px) {
  body {
    position: relative;
    &:before {
      position: absolute;
      content: '';
      width: 2px;
      height: calc(100% - 100vh);
      background: #dadada;
      left: 80px;
      top: calc(100vh + 5px);
      z-index: 2;
    }
    &:after {
      position: absolute;
      content: '';
      width: 2px;
      height: calc(100% - 100vh);
      background: #dadada;
      right: 80px;
      top: calc(100vh + 5px);
      z-index: 2;
    }
  }
  section {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 64px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #dadada;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 64px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #dadada;
    }
  }
}
</style>
