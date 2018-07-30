<template lang="pug">
.video.responsive-font
  .pair.flex.reverse
    Youtube(:source="video" :width="720" :height="405")
    .copy
      h1.title {{ title }}
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
  text-align: left;
  font-weight: normal;
  font-size: 1.5em;
}
.reverse {
  flex-flow: row-reverse wrap;
}
.copy {
  width: 100%;
  padding: 1.5em;
  font-size: 1em;
  max-width: 700px;
  @media #{$desktop--large} {
    max-width: 600px;
  }
  @media #{$desktop--huge} {
    max-width: 650px;
  }
}
</style>
