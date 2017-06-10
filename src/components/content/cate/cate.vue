<template>
	<div>
		<catehead></catehead>
		<div id="container">
			<catemenu></catemenu>
			<catelist></catelist>
		</div>
	</div>
</template>


<style>
	#container{
		position: absolute;
		left: 0;
		right: 0;
		top: 1.093333rem;
		bottom: 0;
		overflow: auto;
	}
</style>


<script>
import catehead from './catehead';
import catemenu from './catemenu';
import catelist from './catelist';
	export default {
		components: {
			catehead,catemenu,catelist
		}
	}
</script>