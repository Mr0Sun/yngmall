<template>
	<div class="cate-list">
		<ul v-if="cateList.length>0">
			<li v-for="i in cateList[getId].Data">
				<a href="#">
					<img :src="i.logo" alt="">
					<p class="catelist-name">
						{{i.name}}
					</p>
				</a>
			</li>
		</ul>
	</div>
</template>



<style>
	.cate-list{
		width: 75%;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		overflow: auto; 
	}
	.cate-list ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.cate-list ul li{
		width: 33.33%;
		text-align: center;
		padding: 0.133333rem;
		box-sizing: border-box;
	}
	.cate-list ul li a{
		display: block;
		width: 100%;
		height: 100%;
	}
	.cate-list img{
		width: 90%;
		margin: 5%;
	}
	.catelist-name{
		color: #555;
		font-size: 0.373333rem;
	}
</style>



<script>
	export default{
		data(){
			return {
				cateList: []
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/category-list.json')
				.then(function(res){
					this.cateList = res.body.Data;
				})
			}
		},
		computed: {
			getId(){
				return this.$store.state.id;
			}		
		},
		mounted(){
			this.request();
		}
	}
</script>