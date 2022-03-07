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
    <ul class="navigation-list">
      <li><a href="#">Strona główna</a></li>
      <li><a href="#">Oferta</a></li>
      <li><a href="#">Realizacje</a></li>
      <li><a href="#">Kontakt</a></li>
      <div class="socials">
        <svg-instagram :width="baseSize" :height="baseSize" />
        <svg-fb :width="baseSize" :height="baseSize" />
        <svg-website :width="baseSize" :height="baseSize" />
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      baseSize: 32,
    }
  },
}
</script>

<style scoped lang="scss">
$base-color: white;
$base-margin-y: 24px;
$base-margin-x: 48px;
$nav-index: 10;

.main-navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: $base-margin-x $base-margin-y;
}
.logo {
  z-index: $nav-index;
  a {
    color: $base-color;
    font-size: 24px;
    text-decoration: none;
  }
}
.navButton {
  background: none;
  border: none;
  z-index: $nav-index;
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
.navigation-list {
  position: fixed;
  top: 0;
  left: 0;
  background: #001219;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  li {
    list-style-type: none;
    margin: 12px 0;
    a {
      color: white;
      text-decoration: none;
      font-size: 48px;
      font-weight: 700;
    }
  }
}
.socials {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 48px;
  left: 0;
  color: white;
}
</style>
