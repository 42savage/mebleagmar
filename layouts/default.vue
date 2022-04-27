<template>
  <div class="main-container">
    <Navigation />
    <Nuxt />
    <footer>
      <div class="top">
        <svg-logo />
        <div class="line"></div>
        <a class="author">Projekt i realizacja <span>SAVAGE AGENCY</span></a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
$base-font-family: 'Roboto', sans-serif;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $base-font-family;
}
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
  align-items: center;
  padding: 0 24px;
}
.line {
  height: 1px;
  background: rgb(199, 199, 199);
  width: 100%;
  margin: 24px 0;
}
.top {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    color: black;
    font-size: 16px;
    span {
      color: crimson;
      font-weight: bold;
    }
  }
  .author {
    margin-bottom: 24px;
  }
}
</style>
