<template>
	<div>
		<img :src="shareList[0].img" alt="" v-if="shareList.length>0">
	</div>
</template>



<style>
	
</style>



<script>
	export default {
		data(){
			return {
				shareList: []
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/home-products.json')
				.then(function(res){
					this.shareList = res.body.Data[3].Data[0].Data;
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>