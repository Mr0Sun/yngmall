<template>
	<div class="menu">
		<ul>
			<li v-for="i in menuList"><img :src="i.img_url" alt=""></li>
		</ul>
	</div>
</template>


<style>
	.menu ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.menu ul li{
		width: 20%;
	}
	.menu ul li img{
		width: 100%;
	}
</style>


<script>
	export default{
		data(){
			return {
				menuList: []
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/banner.json')
				.then(function(res){
					this.menuList = res.body.entrance;
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>