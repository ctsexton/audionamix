<template lang="pug">
.banner
  .center-column
    .container.horizontal-align
      img(:src="image")
      .item
        .price
          .terms PRE-LAUNCH SALE ON NOW
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
.price {
  padding: 10px;
  text-align: center;
  font-size: 1.5em;
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
