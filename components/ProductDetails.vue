<template lang="pug">
.product-details.responsive-font
  h2.product-details--title Product Details
  .product-details--text(v-for="paragraph in summary") {{ paragraph }}
  .pair
    .half
      h2.product-details--title Features
      .summary(v-for="feature in features")
        DotPoint(:image="'arrow.svg'" :text="feature")
    .half
      h2.product-details--title Requirements
      .summary(v-for="req in requirements")
        DotPoint(:image="'arrow.svg'" :text="req")
</template>
<script>
import DotPoint from '~/components/DotPoint';
export default {
  components: {
    DotPoint
  },
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
.summary {
  padding: 0.25em 0;
}
</style>
