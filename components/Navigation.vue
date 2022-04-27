<template>
  <nav class="navigation" v-scroll-lock="state">
    <nuxt-link to="/" ref="logo" class="logo" href="#"
      ><svg-logo fill="white"
    /></nuxt-link>
    <button class="navBtn" ref="navBtn" @click="state = !state">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>
    <div ref="wrapper" class="wrapper">
      <div class="first-section">
        <div class="sec">
          <svg-compass :width="24" :height="24" color="#94D2BD" />
          <div>
            <p class="title">Adres siedziby</p>
            <p class="subtitle">Skaryszew, ul. Złota 7</p>
          </div>
        </div>
        <div class="sec">
          <svg-phone :width="24" :height="24" color="#94D2BD" />
          <div>
            <p class="title">Zadzwoń</p>
            <p class="subtitle">698-088-271</p>
          </div>
        </div>
        <div class="sec">
          <svg-clock :width="24" :height="24" color="#94D2BD" />
          <div>
            <p class="title">Godziny pracy</p>
            <p class="subtitle">Pon-Pt: 8:00-17:00</p>
          </div>
        </div>
        <div class="line"></div>
      </div>
      <div class="second-section">
        <ul class="list" ref="list">
          <li>
            <a class="active" href="#">Strona główna</a>
          </li>
          <li>
            <a href="#">Realizacje</a>
          </li>
          <li><a href="#">Oferta</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
        <div class="socials">
          <p ref="soc"><span>Zajrzyj na nasze sociale</span></p>
          <ul class="social-list">
            <li>
              <svg-website color="#94D2BD" />
            </li>
            <li>
              <svg-fb color="#94D2BD" />
            </li>
            <li><svg-instagram color="#94D2BD" /></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      state: false,
    }
  },

  watch: {
    state: function (n) {
      if (n) {
        this.tl.play()
        this.tl
          .to(
            this.$refs.wrapper,
            {
              xPercent: 100,
            },
            'btn'
          )
          .to(
            this.$refs.navBtn.children[2],
            {
              opacity: 0,
              duration: 0.01,
            },
            '-=btn'
          )
          .to(
            this.$refs.navBtn.children[1],
            {
              rotate: -45,
              y: -10,
            },
            'btn'
          )
          .to(
            this.$refs.navBtn.children[0],
            {
              rotate: 45,
            },
            'btn'
          )
          .to(
            this.arr,
            {
              yPercent: -100,
              stagger: 0.15,
              ease: 'power4.out',
            },
            'btn+=0.2'
          )
          .to(
            [this.arr2, this.arr3, this.arr4, this.$refs.soc],
            {
              yPercent: 0,
            },
            'btn+=0.2'
          )
      } else {
        this.tl.reversed(!this.tl.reversed())
      }
    },
  },
  mounted() {
    this.tl = this.$gsap.timeline({ paused: true })
    this.arr = this.$el.querySelectorAll('.list li a')
    this.arr2 = this.$el.querySelectorAll('.sec div')
    this.arr3 = this.$el.querySelectorAll('.sec svg')
    this.arr4 = this.$el.querySelectorAll('.socials svg')
    this.logo = this.$el.querySelector('.logo span')
    if (this.$mq !== 'lg') {
      this.$gsap.set([this.arr2, this.arr3, this.arr4, this.$refs.soc], {
        yPercent: 100,
      })
    }
  },
}
</script>

<style scoped lang="scss">
li {
  overflow: hidden;
}
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 24px;
  z-index: 2;
}
.logo {
  color: white;
  text-decoration: none;
  font-size: 24px;
  z-index: 2;
}
.navBtn {
  z-index: 2;
  background: none;
  display: flex;
  flex-direction: column;
  width: 42px;
  border: none;
  .line {
    background: white;
    width: 42px;
    height: 4px;
    margin: 4px 0;
    &:nth-child(3) {
      width: 24px;
    }
  }
}
.wrapper {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #1d1d1d;
  top: 0;
  left: -100%;
  padding: 124px 24px;
}
.sec {
  color: white;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
  margin: 8px;
  &:nth-child(2) svg {
    width: 36px;
    transform: rotate(45deg);
  }
}
.first-section {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
.title {
  font-size: 16px;
  font-weight: bold;
}
.subtitle {
  font-size: 12px;
}
.sec svg {
  margin-right: 16px;
}
.line {
  background: #3e3e3e;
  width: 100%;
  height: 1px;
}
.list {
  list-style-type: none;
  li {
    margin: 8px 0;
    position: relative;
    width: 100%;
    height: 50px;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 36px;
    bottom: -100%;
    position: absolute;
  }
}
.active {
  color: #8d8d8d !important;
}
.socials {
  position: absolute;
  bottom: 48px;
  justify-content: center;
  overflow: hidden;
  p {
    margin: 16px 0;
    color: #8d8d8d;
    overflow: hidden;
  }
  li {
    margin: 0 8px;
  }
  .social-list {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
}
@media (min-width: 768px) {
  .logo {
    font-size: 36px;
  }
  .navigation {
    padding: 64px 48px;
  }
  .list {
    li {
      margin: 48px 0;
    }
  }
  .list > li > a {
    font-size: 64px;
    line-height: 52px;
  }
  .first-section {
    p {
      font-size: 24px;
    }
  }
}
@media (min-width: 1440px) {
  .navBtn {
    display: none;
  }
  .wrapper {
    top: 0;
    background: none;
    left: 0;
  }
  .first-section {
    background: #1d1d1d;
    position: absolute;
    top: 0;
    left: 0;
    transform: initial;
  }
  .first-section p {
    font-size: 12px;
  }
  .line {
    display: none;
  }
  .socials {
    bottom: initial;
    top: 10px;
    right: 48px;
    p {
      display: none;
    }
  }
  .wrapper {
    width: 100%;
    height: 40px;
  }
  .list {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 80px;
    right: 0px;
    width: 480px;
    bottom: initial;
    a {
      bottom: initial;
    }
    li {
      margin: initial;
      max-width: 116px;
      margin: 0 16px;
      &:nth-child(2) {
        width: 80px;
      }
      &:nth-child(3) {
        width: 50px;
      }
      &:nth-child(4) {
        width: 61px;
      }
    }
  }
  .list > li > a {
    font-size: 18px;
    line-height: initial;
    &:hover {
      color: darkcyan;
    }
  }
  #__layout > div > nav > div > div.first-section > div:nth-child(2) > svg {
    height: 20px;
  }
}
</style>
