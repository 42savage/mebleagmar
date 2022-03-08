<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.3333 19.8333H25.6667V15.9366C25.6671 15.3236 25.5468 14.7165 25.3126 14.15C25.0784 13.5835 24.7349 13.0687 24.3017 12.635L22.1667 10.5H16.3333V19.8333H17.5M11.6667 19.8333H16.3333V5.83331H2.33333V19.8333H5.83333H11.6667Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.74999 23.3333C10.3608 23.3333 11.6667 22.0275 11.6667 20.4167C11.6667 18.8058 10.3608 17.5 8.74999 17.5C7.13916 17.5 5.83333 18.8058 5.83333 20.4167C5.83333 22.0275 7.13916 23.3333 8.74999 23.3333Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.4167 23.3333C22.0275 23.3333 23.3333 22.0275 23.3333 20.4167C23.3333 18.8058 22.0275 17.5 20.4167 17.5C18.8058 17.5 17.5 18.8058 17.5 20.4167C17.5 22.0275 18.8058 23.3333 20.4167 23.3333Z"
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

<style></style>
