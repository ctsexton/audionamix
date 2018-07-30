<template lang="pug">
ul.dotpoint--frame
  li.dotpoint--text(style="backgroundImage: url('arrow.svg')") {{ text }}
</template>
<script>
export default {
  props: {
    text: String,
    image: String
  },
  computed: {
    bullet () {
      return ''
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.dotpoint--frame {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.dotpoint--text {
  display: inline-block;
  content: '';
  background-size: 0.85em;
  background-position: left top 3px;
  background-repeat: no-repeat;
  padding: 0 2em;
  font-size: 1em;
}
</style>
