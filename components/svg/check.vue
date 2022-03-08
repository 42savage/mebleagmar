<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 66 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="18" cy="18" r="17.5" :stroke="color" />
    <circle cx="48" cy="18" r="18" :fill="color" />
    <path
      d="M56 11C56 10.4477 55.5523 10 55 10L46 10C45.4477 10 45 10.4477 45 11C45 11.5523 45.4477 12 46 12L54 12L54 20C54 20.5523 54.4477 21 55 21C55.5523 21 56 20.5523 56 20L56 11ZM41.7071 25.7071L55.7071 11.7071L54.2929 10.2929L40.2929 24.2929L41.7071 25.7071Z"
      fill="black"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: 'white',
    },
  },
}
</script>

<style></style>
