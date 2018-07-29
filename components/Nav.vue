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
<style scoped>
.nav {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
}

.logo {
  overflow: hidden;
  width: 15vw;
  padding: 10px 20px;
}

.logo--svg {
  width: 100%;
}

.list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
}

.link {
  color: #fff;
  font-size: 1.25em;
}
</style>

