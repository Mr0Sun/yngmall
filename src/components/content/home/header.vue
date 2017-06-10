<template>
	<div id="header">
		<input type="search" placeholder="由你购,最想购...">
	</div>
</template>


<style>
	#header{
		position: absolute;
		top: 1.333333rem;
		left: 0;
		right: 0;
		height: 1.013333rem;
		padding: 0.133333rem 10%;
		box-sizing: border-box;
		z-index: 100;
		transition: 0.5s;
	}
	.active{
		transition: 0.5s;
		transform: translate3d(0px, -1.333333rem, 0px);
		background: rgb(240,240,240);
	}
	#header input{
		width: 100%;
		height: 0.746667rem;
		padding-left: 0.8rem;
		font-size: 0.373333rem;
		border: none;
		outline: none;
		border-radius: 0.133333rem;
		background: url(../../../assets/fonts/search.png) #fff no-repeat;
		background-size: 0.533333rem;
		background-position: 0.133333rem 0.106667rem;
	}
</style>


<script>
	
</script>