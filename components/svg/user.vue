<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M63.3334 70V63.3333C63.3334 59.7971 61.9287 56.4057 59.4282 53.9052C56.9277 51.4048 53.5363 50 50.0001 50H30.0001C26.4639 50 23.0725 51.4048 20.572 53.9052C18.0715 56.4057 16.6667 59.7971 16.6667 63.3333V70"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M40.0001 36.6667C47.3639 36.6667 53.3334 30.6971 53.3334 23.3333C53.3334 15.9695 47.3639 10 40.0001 10C32.6363 10 26.6667 15.9695 26.6667 23.3333C26.6667 30.6971 32.6363 36.6667 40.0001 36.6667Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      default: 80,
    },
    height: {
      default: 80,
    },
    color: {
      default: '#4E4E4E',
    },
  },
}
</script>

<style></style>
