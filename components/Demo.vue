<template lang="pug">
.video.responsive-font
  h1.title {{ title }}
  .pair.horizontal-align.flex.reverse
    Youtube(:source="video" :width="720" :height="405")
    .summary {{ summary }}
</template>
<script>
import Youtube from '~/components/Youtube';
export default {
  components: {
    Youtube
  },
  props: {
    title: String,
    summary: String,
    video: String
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.video {
  padding: 1em;
  width: 100%;
}
.title {
  text-align: center;
  font-weight: normal;
  font-size: 1.5em;
}
.reverse {
  flex-flow: row-reverse wrap;
}
.summary {
  width: 100%;
  padding: 1em;
  font-size: 1em;
  max-width: 700px;
}
</style>
