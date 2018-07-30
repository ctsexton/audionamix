<template lang="pug">
.responsive-font
  .quote-container
    .quote-frame
      .quote "{{ text }}"
      .credit {{ author }}
</template>
<script>
export default {
  props: {
    text: String,
    author: String
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.quote-container {
  padding: 0 1em;
}
.quote-frame {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2em;
  padding: 2em 2em;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  text-align: center;
}
.quote {
  font-size: 1.25em;
}
.credit {
  font-size: 1.1em;
  font-weight: bold;
  padding-top: 1em;
}
</style>
