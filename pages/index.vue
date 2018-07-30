<template lang="pug">
.main
  Nav(:links="contents.navigation.links" :logo_path="contents.navigation.logo")
  Banner(:image="contents.product.source")
  Demo(:title="contents.video.title" :summary="contents.video.caption" :video="contents.video.source")
  Quote(:author="contents.quote.author" :text="contents.quote.text")
  .grey-banner
    ProductDetails(:summary="contents.product.description" :features="contents.product.features" :requirements="contents.product.requirements")
  //Footer
</template>

<script>
import content from '~/static/content/index.md';
import Nav from '~/components/Nav';
import Demo from '~/components/Demo';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
import Quote from '~/components/Quote';
import ProductDetails from '~/components/ProductDetails';
export default {
  components: {
    Nav,
    Demo,
    Banner,
    Footer,
    Quote,
    ProductDetails
  },
  data () {
    return {
      contents: content.attributes
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin: 0;
  padding: 0;
}
.grey-banner {
  background: #eeeeee;
  padding: 1em;
}
</style>

