<template lang="pug">
.media-container
  .video-wrapper
    .video-ratio
      iframe(:width="width" :height="height" :src="source" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen)
</template>
<script>
export default {
  props: {
    source: String,
    width: Number,
    height: Number
  }
}
</script>
<style scoped lang="scss">
.media-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 720px;
	margin: 0;
	@media screen and (min-width: 751px) {
		width: 720px;
	}
}
.media-container iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.video-wrapper {
	display: block;
	width: 100%;
	margin: 5px auto;
	@media screen and (min-width: 751px) {
		margin: 10px;
		height: 395px;
		width: 700px;
	}
}
.video-ratio {
	display: block;
	position: relative;
	padding-bottom: 56.25%; // Resizable at 16:9 aspect ratio
	height: 0;
	width: 100%;
	overflow: hidden;
}
</style>
