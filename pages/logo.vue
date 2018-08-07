<template lang="pug">
.page
	.top Vector graphics logo demo - same file retains sharpness at multiple sizes, reducing need to produce multiple graphic assets for different mediums.
	.logo
		h2 Small:
		img(:src="'logo_display.svg'" width="150px")
	.logo
		h2 Medium:
		img(:src="'logo_display.svg'" width="300px")
	.logo
		h2 Large:
		img(:src="contents.navigation.logo" width="450px")
	.logo
		h2 Huge:
		img(:src="contents.navigation.logo" width="600px")
	.logo
		h2 Massive:
		img(:src="contents.navigation.logo" width="900px")
</template>
<script>
import content from '~/static/content/index.md';
export default {
	data () {
	    return {
	        contents: content.attributes
	    }
	}
}
</script>
<style scoped>
h2 {
	font-weight: 200;
	margin: 10px 0;
}
.logo {
	margin: 20px
}
.top {
	margin: 20px;
}
.page {
	font-family: 'Raleway', sans-serif;
	font-size: 20px;
}
</style>
