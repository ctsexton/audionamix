<template lang="pug">
.banner
  .center-column
    .container.horizontal-align
      .max-image
        img.img-contain(:src="image")
      .item.responsive-font
        .price
          .terms PRE-LAUNCH SALE 
            br 
            | ON NOW
          .strikeout $199
          .new-price $139
          .order-button Order Now
</template>
<script>
export default {
  props: {
    image: String,
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';
.banner {
  background: linear-gradient(rgb(25,25,40), rgb(15,15,20));
  color: white;
  padding: 2em;
  overflow: hidden;
}
.max-image {
  max-width: 400px;
  @media #{$desktop--large} {
    max-width: 600px;
  }
}
.img-contain {
  max-width: 100%;
}
.price {
  padding: 1em 0;
  overflow: hidden;
  text-align: center;
  font-size: 1em;
  line-height: 1.5em;
  width: 350px;
}

.regular-price {
  font-size: 0.75em;
}

.strikeout {
  font-size: 1.25em;
  padding: 0.5em 0;
  color: red;
  text-decoration: line-through;
}

.call-to-action {
  text-decoration: underline;
  font-weight: bold;
}

.new-price {
  font-size: 2em;
}

.terms {
  font-style: italic;
  font-size: 1.5em;
}
.order-button {
  padding: 0.25em;
  border: 2px solid white;
  background: transparent;
  font-size: 1.25em;
  text-align: center;
  width: 60%;
  margin: 1em auto 0;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
  }
}
</style>
