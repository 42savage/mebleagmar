<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_243_2)">
      <path
        d="M24.9999 16.92V19.92C25.0011 20.1985 24.944 20.4741 24.8324 20.7293C24.7209 20.9845 24.5572 21.2136 24.352 21.4018C24.1468 21.5901 23.9045 21.7335 23.6407 21.8227C23.3769 21.9119 23.0973 21.945 22.8199 21.92C19.7428 21.5856 16.7869 20.5341 14.1899 18.85C11.7738 17.3146 9.72527 15.2661 8.18993 12.85C6.49991 10.2412 5.44818 7.27097 5.11993 4.17997C5.09494 3.90344 5.12781 3.62474 5.21643 3.3616C5.30506 3.09846 5.4475 2.85666 5.6347 2.6516C5.82189 2.44653 6.04974 2.28268 6.30372 2.1705C6.55771 2.05831 6.83227 2.00024 7.10993 1.99997H10.1099C10.5952 1.9952 11.0657 2.16705 11.4337 2.48351C11.8017 2.79996 12.042 3.23942 12.1099 3.71997C12.2366 4.68004 12.4714 5.6227 12.8099 6.52997C12.9445 6.8879 12.9736 7.27689 12.8938 7.65086C12.8141 8.02482 12.6288 8.36809 12.3599 8.63998L11.0899 9.90997C12.5135 12.4135 14.5864 14.4864 17.0899 15.91L18.3599 14.64C18.6318 14.3711 18.9751 14.1858 19.3491 14.1061C19.723 14.0263 20.112 14.0554 20.4699 14.19C21.3772 14.5285 22.3199 14.7634 23.2799 14.89C23.7657 14.9585 24.2093 15.2032 24.5265 15.5775C24.8436 15.9518 25.0121 16.4296 24.9999 16.92Z"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_243_2"
        x="-1"
        y="0"
        :width="width"
        :height="height"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_243_2"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_243_2"
          result="shape"
        />
      </filter>
    </defs>
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
