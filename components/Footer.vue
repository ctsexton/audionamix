<template lang="pug">
.foot
  .social-title Connect With Us:
  .socials
    font-awesome-icon.icon(:icon="['fab', 'facebook']")
    font-awesome-icon.icon(:icon="['fab', 'instagram']")
    font-awesome-icon.icon(:icon="['fab', 'twitter']")
    font-awesome-icon.icon(:icon="['fab', 'soundcloud']")
    font-awesome-icon.icon(:icon="['fab', 'youtube']")
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.foot {
  background: #222;
  text-align: center;
}
.icon {
  width: 50px;
  height: 50px;
  color: white;
  margin: 0 1em;
}
.social-title {
  font-size: 2em;
  color: white;
  padding: 1em 0 0;
}
.socials {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2em 0;
}
</style>
