<template>
	<div id="theme-list">
		<backhd></backhd>
		<themeitem></themeitem>
	</div>
</template>



<style>
	#theme-list{
		position: absolute;
		top: 0;
		bottom: -1.2rem;
		left: 0;
		right: 0;
		background: #fff;
		overflow:auto;
		z-index: 200;
	}
</style>



<script>
import backhd from '../rankList/backHd.vue';
import themeitem from './listitem.vue';
	export default {
		components: {
			backhd,themeitem
		}

	}
</script>