<template>
  <nav class="main-navigation">
    <div class="logo">
      <a href="#"><b>meble</b>agmar</a>
    </div>
    <button class="navButton">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style scoped lang="scss">
$base-color: #3d3d3d;
$base-margin-y: 24px;
$base-margin-x: 48px;

.main-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: $base-margin-y $base-margin-x;
}
.logo {
  a {
    color: $base-color;
    font-size: 24px;
    text-decoration: none;
  }
}
.navButton {
  background: none;
  border: none;
  .line {
    width: 42px;
    height: 4px;
    background: $base-color;
    margin: 6px 0;
    &:nth-child(2) {
      width: 36px;
    }
  }
}
</style>
