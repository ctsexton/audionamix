<template lang="pug">
.video.responsive-font
  .pair.reverse
    Youtube(:source="video" :width="720" :height="405")
    .copy
      .title {{ title }}
      .summary(v-for="dotPoint in summary")
        DotPoint(:image="'arrow.svg'" :text="dotPoint")
      .flex.horizontal-align.audio-sample
        img.clickable(src="volume.svg" width="50px") 
        .audio-caption IDC: Speech Enhancement Comparison
</template>
<script>
import Youtube from '~/components/Youtube';
import DotPoint from '~/components/DotPoint';
export default {
  components: {
    Youtube,
    DotPoint
  },
  props: {
    title: String,
    summary: Array,
    video: String
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.video {
  padding: 1em;
  width: 100%;
  @media #{$desktop--large} {
    padding: 2em;
  }
}
.title {
  text-align: left;
  font-weight: normal;
  font-size: 1.7em;
}
.reverse {
  flex-flow: row-reverse wrap;
  align-items: top;
}
.copy {
  width: 100%;
  padding: 1em 0.5em 0;
  font-size: 0.9em;
  max-width: 450px;
  @media #{$desktop--large} {
    max-width: 450px;
  }
  @media #{$desktop--huge} {
    max-width: 570px;
    padding: 1em 0.5em 0;
  }
}
.audio-sample {
  padding-top: 1em;
}
.audio-caption {
  padding-left: 0.5em;
}
.summary {
  padding: 0.5em 0;
}
</style>
