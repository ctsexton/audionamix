<template lang="pug">
.nav
  .bar
    .logo
      img.logo--svg(:src="logo_path")
    .list
      .link(v-for="link in links") {{ link.text }}
</template>
<script>
export default {
  props: {
    links: Array,
    logo_path: String
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
.nav {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  overflow: hidden;
}
.bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: #222;
}

.logo {
  overflow: hidden;
  min-width: 200px;
  width: 16vw;
  max-width: 300px;
  padding: 10px 20px;
}

.logo--svg {
  width: 100%;
}

.list {
  justify-content: space-evenly;
  align-items: center;
  display: none;
  @media #{$desktop--medium} {
    display: flex;
    width: 65%;
    max-width: 700px;
    min-width: 500px;
  }
}

.link {
  color: #fff;
  font-size: 1.25em;
}
</style>

