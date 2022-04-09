<template>
  <div class="container">
    <div class="text">
      <h1>Strona w budowie</h1>
      <p>
        Tymczasem zapraszamy na naszego
        <a href="https://www.facebook.com/MebleNaWymiarAgmar">facebooka</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'build',
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 64px;
}
p {
  font-size: 42px;
}
h1,
p {
  color: white;
}
a {
  color: crimson;
}
.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 24px;
  background: rgb(0, 1, 51);
  flex-direction: column;
}
</style>
