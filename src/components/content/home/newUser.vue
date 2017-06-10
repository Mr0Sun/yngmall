<template>
	<div class="newuser"><img :src="userList[0].img" alt="" v-if="userList.length>0"></div>
</template>


<style>
	.newuser{
		height: 2.506667rem;
	}
	.newuser img{
		width: 100%;
	}
</style>



<script>
	export default {
		data(){
			return {
				userList: []
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/home-products.json')
				.then(function(res){
					this.userList = res.body.Data[1].Data[0].Data;
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>