<template lang="pug">
div
  Nav(:links="contents.navigation.links" :logo_path="contents.navigation.logo")
  Banner(:image="contents.product.source")
  .video
    h1.subtitle Intelligent Speech & Melody Extraction
    .pair.horizontal-align
      .summary {{ contents.video.caption }}
      Youtube(:source="contents.video.source" :width="720" :height="405")
  .quote-frame
    .quote "{{ contents.quote.text }}"
    .credit {{ contents.quote.author }}
  .grey-banner
    .product-details 
      h2.product-details--title Product Details
      | {{ contents.product.description }}
      .pair
        .half
          h2.product-details--title Features
          ul
            li(v-for="feature in contents.product.features") {{ feature }}
        .half
          h2.product-details--title Requirements
          ul
            li(v-for="req in contents.product.requirements") {{ req }}
  Footer
</template>

<script>
import content from '~/static/content/index.md';
import Nav from '~/components/Nav';
import Youtube from '~/components/Youtube';
import Banner from '~/components/Banner';
import Footer from '~/components/Footer';
export default {
  components: {
    Nav,
    Youtube,
    Banner,
    Footer
  },
  data () {
    return {
      contents: content.attributes
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  //background: #5bc5f5;
  //background: #def;
  //background: #151520;
  background: linear-gradient(rgb(25,25,40), rgb(15,15,20));
  color: white;
  padding: 2em;
}
.subtitle {
  //text-transform: uppercase;
  text-align: center;
  font-weight: normal;
}
.quote-frame {
  max-width: 75%;
  margin: 1em auto 2em;
  padding: 2em 2em;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  text-align: center;
}
.quote {
  font-size: 1.75em;
}
.credit {
  font-size: 1.5em;
  font-weight: bold;
  padding-top: 1em;
}
.video {
  padding: 2em;
  width: 100%;
}
.pair {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.summary {
  width: 500px;
  padding: 1em;
  font-size: 1.25em;
}
.grey-banner {
  background: #aaa;
  padding: 2em;
}
.product-details {
  width: 50%;
  font-size: 1.25rem;
  margin: 0 auto;
  &--title {
    font-weight: bold;
    padding: 0.5em 0;
  }
}
.half {
  width: 50%;
}
</style>

