<template>
  <div class="breadcrumbs">
    <nuxt-link to="/oferta" class="back"><svg-arrow color="black" /></nuxt-link>
    <div>
      <nuxt-link class="link" to="/">Strona główna</nuxt-link><span> > </span>
      <nuxt-link class="link" to="/oferta">Oferta</nuxt-link><span> > </span
      ><span class="bold"> {{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Strona, na której się znajdujesz',
    },
  },
}
</script>

<style scoped lang="scss">
.breadcrumbs {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
.link {
  text-decoration: none;
  font-size: 16px;
  &:hover {
    font-weight: bold;
  }
}
.bold {
  font-weight: bold;
  color: crimson;
}
.back {
  svg {
    transform: rotate(180deg);
  }
}
@media (min-width: 768px) {
  .back {
    background: none;
    border: none;
    position: absolute;
    left: 64px;
  }
}
</style>
