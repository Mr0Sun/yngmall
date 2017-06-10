<template>
	<div class="theme-street">
		<div class="theme">
			<img :src="themeList[2].title_img" alt="" v-if="themeList.length>0">
		</div>
		<div class="theme-products">
			<ul v-if="themeList.length>0">
				<li v-for="(i,index) in themeList[2].Data">
					<div class="theme-list">
						<a @click="link(j.goods_id)" class="list-img" v-for="j in i.Data">
							<img :src="j.img" alt="">
						</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>



<style>
	.theme{
		background: #f0f0f0;
	}
	.theme-list{
		width: 100%;
		display: flex;
	}
	.list-img{
		width: 33.33%;
		height: 4.0rem;
		display: block;
		border: 1px solid #f0f0f0;
		box-sizing: border-box;
	}
	.theme-products ul li:nth-child(3) .list-img{
		/*border: none;*/
	}
	.theme-products ul li:nth-child(1) .list-img:nth-of-type(1),.theme-products ul li:nth-child(4) .list-img:nth-of-type(1){
		width: 66.66%;
	}
	.theme-products ul li:nth-child(1) .list-img:nth-of-type(2),.theme-products ul li:nth-child(4) .list-img:nth-of-type(2){
		width: 33.33%;
	}
	.list-img img{
		width: 100%;
	}

</style>



<script>
	export default {
		data(){
			return {
				themeList: []
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/home-products.json')
				.then(function(res){
					this.themeList = res.body.Data;
					// console.log(this.skillList[0].Data[0].Data);
				})
			},
			link(index){
				this.$router.push({path:'/home/theme'});
				this.$store.commit('changeThemeId',parseInt(index))
				console.log(parseInt(index));
			}
		},
		mounted(index){
			this.request();
		}
	}
</script>