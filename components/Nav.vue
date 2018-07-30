<template lang="pug">
.nav
  .bar
    .logo
      img.logo--svg(:src="logo_path")
    .list.responsive-font
      .link(v-for="link in links") {{ link.text }}
    .menu-button(@click="open = !open") ≡
  .mobile-menu.responsive-font
    .mobile-menu--subcontainer(:style="{ height: menuHeight }" :class="{linePadding: open}")
      .link.mobile-menu--link(v-for="link in links") {{ link.text }}
</template>
<script>
export default {
  data() {
    return {
      open: false
    }
  },
  props: {
    links: Array,
    logo_path: String
  },
  computed: {
    menuHeight: function () {
      let height = this.links.length * 2.5 + 2;
      console.log(height);
      return this.open ? height + 'em' : '0';
    }
  }
}
</script>
<style scoped lang="scss">
@import '~/assets/styles/_variables.scss';
$bar-background: #222;
.nav {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}
.bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background: $bar-background;
  padding: 0 10px;
  position: relative;
}

.logo {
  overflow: hidden;
  min-width: 200px;
  width: 12vw;
  max-width: 250px;
  padding: 10px 0;
}

.logo--svg {
  width: 100%;
}

.list {
  justify-content: space-evenly;
  align-items: center;
  display: none;
  @media #{$desktop--medium} {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    width: 65%;
    max-width: 700px;
    min-width: 500px;
  }
}
.link {
  color: #fff;
  font-size: 1em;
  cursor: pointer;
}

.menu-button {
  color: white;
  font-size: 3.5rem;
  @media #{$desktop--medium} {
    display: none;
  }
}
.mobile-menu {
  position: relative;
  height: 0;
  width: 100%;
}
.mobile-menu--subcontainer {
  position: absolute;
  top: 0;
  left: 0;
  background: #333;
  width: 100%;
  color: white;
  line-height: 2.5em;
  padding: 0 0;
  transition: height 500ms, padding 500ms;
  overflow: hidden;
}
.mobile-menu--link {
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-size: 1.25em;
}
.linePadding {
  padding: 1em 0;
}
</style>

