<template>
  <div class="wrapper">
    <p>Wybacz, ale strony, której szukasz nie znaleziono</p>
    <nuxt-link class="back" to="/">Powrtót na stronę główną</nuxt-link>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 2rem;
    font-weight: bold;
    padding: 24px;
  }
}
.back {
  text-decoration: none;
  border: 2px solid darkcyan;
  color: darkcyan;
  padding: 4px 8px;
  margin: 16px 0;
  &:hover {
    color: white;
    background: darkcyan;
  }
}
</style>
