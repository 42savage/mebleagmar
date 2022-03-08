<template>
  <svg :width="width" :height="height" viewBox="0 0 28 28" fill="none">
    <path
      d="M18.6667 2.33331L25.6667 9.33331L9.33334 25.6666L2.33334 18.6666L18.6667 2.33331Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.75 12.25L11.0833 14.5833"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.25 8.75L14.5833 11.0833"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.75 5.25L18.0833 7.58333"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.25 15.75L7.58333 18.0833"
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
