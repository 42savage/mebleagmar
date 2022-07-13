<template>
  <div
    class="main-container"
    :class="{ net: this.$route.path === '/' && this.$mq === 'lg' }"
  >
    <Navigation />
    <ThetransitionObject />
    <Nuxt />
    <footer>
      <svg-logo />
      <div class="menuShortcut">
        <ul class="menuSection">
          <p class="menuTitle">Meble</p>
          <li><nuxt-link to="oferta/meble/kuchenne">Kuchenne</nuxt-link></li>
          <li><nuxt-link to="oferta/meble/pokojowe">Pokojowe</nuxt-link></li>
          <li>
            <nuxt-link to="oferta/meble/lazienkowe">Łazienkowe</nuxt-link>
          </li>
          <li>
            <nuxt-link to="oferta/meble/loza_sypialniane"
              >Łoża sypialniane</nuxt-link
            >
          </li>
        </ul>
        <ul class="menuSection">
          <p class="menuTitle">Systemy</p>
          <li><nuxt-link to="oferta/systemy/blum">Blum</nuxt-link></li>
          <li><nuxt-link to="oferta/systemy/schwinn">Schwinn</nuxt-link></li>
          <li>
            <nuxt-link to="oferta/systemy/gamet">Gamet</nuxt-link>
          </li>
          <li>
            <nuxt-link to="oferta/systemy/siro">Siro</nuxt-link>
          </li>
        </ul>
        <ul class="menuSection">
          <p class="menuTitle">Fronty</p>
          <li><nuxt-link to="oferta/fronty/mdf">Fronty MDF</nuxt-link></li>
          <li>
            <nuxt-link to="oferta/fronty/drewniane">Fronty drewniane</nuxt-link>
          </li>
          <li>
            <nuxt-link to="oferta/fronty/lakierowane"
              >Fronty lakierowane</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="oferta/fronty/akrylowe">Fronty akrylowe</nuxt-link>
          </li>
        </ul>
        <ul class="menuSection">
          <p class="menuTitle">Szkło grafika</p>
          <li><nuxt-link to="oferta/szklo/fraktale">Fraktale</nuxt-link></li>
          <li><nuxt-link to="oferta/szklo/tekstsury">Tekstury</nuxt-link></li>
          <li>
            <nuxt-link to="oferta/szklo/zwierzeta">Zwierzęta</nuxt-link>
          </li>
          <li>
            <nuxt-link to="oferta/szklo/krajobrazy">Krajobrazy</nuxt-link>
          </li>
        </ul>
        <p class="author">
          Projekt i realizacja:
          <a href="https://kzweb.dev/" target="_blank">kzweb.dev</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
$base-font-family: 'Roboto', sans-serif;
svg {
  margin-top: 32px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $base-font-family;
}
.main-container {
  position: relative;
  overflow: hidden;
}
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background: #f1f1f1;
  position: relative;
}

.menuShortcut {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 64px 0;
}
.menuSection {
  display: flex;
  flex-direction: column;
  margin: 8px 32px;
  li {
    list-style-type: none;
    margin: 4px 0;
    font-size: 16px;
  }
  li > a {
    text-decoration: none;
    color: black;
  }
}
.menuTitle {
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin-bottom: 16px;
}
.author {
  color: #98bfd0;
  position: absolute;
  left: 0;
  text-align: center;
  bottom: 24px;
  width: 100%;
  a {
    color: crimson;
    text-decoration: none;
    font-weight: bold;
  }
}
@media (min-width: 1440px) {
  footer {
    padding: 0 120px 36px 120px;
  }
}
// vertical lines throught whole page;
// style for horizontal lines is put right into index page
.net {
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
</style>
