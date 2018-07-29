<template lang="pug">
.product-details.responsive-font
  h2.product-details--title Product Details
  .product-details--text(v-for="paragraph in summary") {{ paragraph }}
  .pair
    .half
      h2.product-details--title Features
      ul
        li(v-for="feature in features") {{ feature }}
    .half
      h2.product-details--title Requirements
      ul
        li(v-for="req in requirements") {{ req }}
</template>
<script>
export default {
  props: {
    summary: Array,
    features: Array,
    requirements: Array 
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.product-details {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  &--title {
    font-weight: bold;
    padding: 0.5em 0;
  }
  &--text {
    padding-bottom: 1em;
  }
}
.half {
  width: 100%;
  @media #{$desktop--medium} {
    width: 50%;
  }
}
</style>
