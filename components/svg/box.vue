<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24.5 18.6667V9.33336C24.4996 8.92418 24.3916 8.52231 24.1868 8.16805C23.982 7.8138 23.6877 7.51962 23.3333 7.31503L15.1667 2.64836C14.812 2.44357 14.4096 2.33575 14 2.33575C13.5904 2.33575 13.188 2.44357 12.8333 2.64836L4.66667 7.31503C4.31231 7.51962 4.01798 7.8138 3.81321 8.16805C3.60843 8.52231 3.50042 8.92418 3.5 9.33336V18.6667C3.50042 19.0759 3.60843 19.4778 3.81321 19.832C4.01798 20.1863 4.31231 20.4804 4.66667 20.685L12.8333 25.3517C13.188 25.5565 13.5904 25.6643 14 25.6643C14.4096 25.6643 14.812 25.5565 15.1667 25.3517L23.3333 20.685C23.6877 20.4804 23.982 20.1863 24.1868 19.832C24.3916 19.4778 24.4996 19.0759 24.5 18.6667Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.815 8.12L14 14.0117L24.185 8.12"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 25.76V14"
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
