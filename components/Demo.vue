<template lang="pug">
.video.responsive-font
  .pair.flex.reverse
    Youtube(:source="video" :width="720" :height="405")
    .copy
      h1.title {{ title }}
      .summary(v-for="dotPoint in summary") ⯈ {{ dotPoint }}
      .flex.horizontal-align.audio-sample
        img(src="volume.svg" width="50px") 
        .audio-caption Listen to IDC
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
  padding: 2em;
  width: 100%;
}
.title {
  text-align: left;
  font-weight: normal;
  font-size: 1.7em;
}
.reverse {
  flex-flow: row-reverse wrap;
}
.copy {
  width: 100%;
  padding: 0 1em;
  font-size: 0.9em;
  max-width: 700px;
  @media #{$desktop--large} {
    max-width: 600px;
  }
  @media #{$desktop--huge} {
    max-width: 650px;
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
