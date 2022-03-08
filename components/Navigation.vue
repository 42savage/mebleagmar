<template>
  <nav class="main-navigation">
    <div class="logo">
      <a href="#"><b>meble</b>agmar</a>
    </div>
    <button ref="button" @click="state = !state" class="navButton">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>
    <ul ref="navList" class="navigation-list">
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
      state: false,
    }
  },
  watch: {
    state: function (n) {
      if (n) {
        this.tl.play()
        this.tl
          .to(this.$refs.navList, {
            xPercent: 100,
          })
          .to(
            this.$refs.navList.children,
            {
              opacity: 1,
              duration: 0.4,
              y: 10,
              stagger: 0.1,
            },
            'same'
          )
          .to(
            this.$refs.button.children[2],
            {
              y: -10,
              width: 6,
              opacity: 0,
            },
            '-=same'
          )
          .to(
            this.$refs.button.children[0],
            {
              rotation: '45deg',
            },
            '-=same'
          )
          .to(
            this.$refs.button.children[1],
            {
              rotation: '-45deg',
              width: '42px',
              y: -9,
            },
            '-=same'
          )
      } else {
        this.tl.reversed(!this.tl.reversed())
        console.log('bec')
      }
    },
  },
  mounted() {
    this.tl = this.$gsap.timeline({ paused: true, autoAlpha: 1 })
  },
}
</script>

<style scoped lang="scss">
$base-color: white;
$base-margin-y: 24px;
$base-margin-x: 48px;
$nav-index: 10;

.main-navigation {
  z-index: 2;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: $base-margin-x $base-margin-y;
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
  cursor: pointer;
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
  left: -100%;
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
    opacity: 0;
    overflow: hidden;
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
  opacity: 0;
}
</style>
