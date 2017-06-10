<template>
	<div id="theme-item">
		<div class="theme-wrap" v-if="themeData[44]">
			<div class="theme-banner" v-if="themeData[getThemeId].Data.F1.length>0">
				<img :src="themeData[getThemeId].Data.F1[0].img_url" alt="">
			</div>
			<div class="line"></div>
			<div class="theme-nav">
				<ul>
					<li v-for="i in themeData[getThemeId].Data.F3" :key="i.img_url">
						<img :src="i.img_url" alt="">
					</li>
				</ul>
			</div>
			<div class="line"></div>
			<div class="theme-menu">
				<ul>
					<li>综合</li>
					<li>销量</li>
					<li>价格</li>
					<li>筛选</li>
				</ul>
			</div>
			<div class="line"></div>
			<div class="theme-items">
				<ul>
					<li v-for="i in themeData[getThemeId].Data.F4" :key="i.img_url">
						<a href="">
							<img :src="i.img_url" alt="">
							<p class="ranklist-name">
								{{i.good_name}}
							</p>
							<p class="market-price">
								市场价:￥{{i.market_price}}
							</p>
							<p class="cost-prcie">
								￥{{i.sell_price}}
							</p>
							<div class="hotsell-buy">立即购买</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>



<style>
	#theme-item{
		width: 100%;
		position: absolute;
		top: 1.066667rem;
		bottom: 0;
		overflow: auto;
		overflow-x: hidden; 
	}
	.theme-banner img{
		width: 100%;
		height: 100%;
	}
	.theme-nav ul{
		display: flex;
		flex-wrap: wrap;
	}
	.theme-nav ul li{
		width: 25%;
		padding: 2% 4%;
		box-sizing: border-box;
		border: 1px solid #f0f0f0;
	}
	.theme-nav ul li img{
		width: 90%;
	}
	.theme-menu ul{
		display: flex;
	}
	.theme-menu ul li{
		width: 25%;
		height: 1.066667rem;
		line-height: 1.013333rem;
		text-align: center;
		font-size: 0.373333rem;
		color: #555;
	}
	.theme-items ul{
		display: flex;
		flex-wrap: wrap;
	}
	.theme-items ul li{
		width: 50%;
		border-bottom: 0.106667rem solid #f0f0f0;
		box-sizing: border-box;
		padding: 0.133333rem;
	}
	.theme-items ul li:nth-of-type(odd){
		border-right: 0.106667rem solid #f0f0f0;
	}
	.theme-items ul li a{
		width: 100%;
		display: block;
		height: 100%;
		position: relative;
	}
	.theme-items img{
		width: 4.266667rem;
		height: 4.266667rem;
		margin: 5%;
	}
	.ranklist-name{
		color: #555;
		font-size: 0.373333rem;
		height: 0.853333rem;
		line-height: 0.426667rem;
		position: relative;
	    overflow: hidden;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	    word-break: break-all;
	}
	.market-price{
		margin-top: 0.266667rem;
		font-size: 0.32rem;
		color: #999;
		text-decoration: line-through;
	}
	.cost-prcie{
		color: #ff3d00;
		font-size: 0.373333rem;
		margin-bottom: 0;
	}
	.hotsell-buy{
		width: 1.6rem;
		height: 0.64rem;
		line-height: 0.586667rem;
		color: #fff;
		text-align: center;
		border-radius: 0.106667rem; 
		position: absolute;
		right: 0.266667rem;
		bottom: 0.133333rem;
		background: #ff3d00;
	}
</style>



<script>
	export default{
		data(){
			return {
				themeData: []
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/themeList.json')
				.then(function(res){
					this.themeData = res.body;
					console.log(this.themeData);
				})
			}
			
		},
		computed: {
			getThemeId(){
				console.log(this.$store.state.themeId)
				return this.$store.state.themeId;
			}
		},
		mounted(){
			this.request();
		}
	}
</script>