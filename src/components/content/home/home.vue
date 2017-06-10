<template>
	<div>
		<homehead></homehead>
		<router-view></router-view>
		<div class="container" v-scroll>
			<appbar></appbar>
			<banner></banner>
			<v-menu></v-menu>
			<div class="line"></div>
			<skill></skill>
			<newuser></newuser>
			<themestreet></themestreet>
			<share></share>
			<happybuy></happybuy>
			<guess></guess>
			<div class="line"></div>
		</div>
	</div>
		
</template>


<style>
	.container{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		overflow: auto;
	}
	.line{
		height: 0.213333rem;
		background: #f0f0f0;
	}
</style>


<script>
	import appbar from './appbar';
	import homehead from './header.vue';
	import banner from './banner';
	import vMenu from './menu';
	import skill from './skill';
	import newuser from './newUser';
	import themestreet from './themestreet';
	import share from './share';
	import happybuy from './happybuy';
	import guess from './guess';
	export default {
		components:{
			appbar,homehead,banner,vMenu,skill,newuser,themestreet,share,happybuy,guess
		}
	}
</script>