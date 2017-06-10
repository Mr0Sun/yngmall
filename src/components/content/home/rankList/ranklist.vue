<template>
	<div id="rank-list">
	<!-- <div @click="receive"></div> -->
		<div v-if="rankList.F3">
			<div class="list-title" v-for="i in rankList.F2">
				<img :src="i.img_url" alt="">
			</div>
			<div class="hotsell-items">
				<ul>
					<li v-for="i in rankList.F3[0].Data">
						<a href="">
							<img :src="i.img" alt="">
							<p class="ranklist-name">
								{{i.name}}
							</p>
							<p class="market-price">
								市场价:￥{{i.market_price}}
							</p>
							<p class="cost-prcie">
								品类日价:￥{{i.cost_price}}
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
	#rank-list{
		width: 100%;
		position: absolute;
		top: 2.133333rem;
		bottom: 0;
		overflow: auto;
	}
	.list-title img{
		width: 100%;
	}
	.hotsell-items ul{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}
	.hotsell-items ul li{
		width: 50%;
		border-bottom: 0.106667rem solid #f0f0f0;
		box-sizing: border-box;
		padding: 0.133333rem;
	}
	.hotsell-items ul li:nth-of-type(odd){
		border-right: 0.106667rem solid #f0f0f0;
	}
	.hotsell-items ul li a{
		width: 100%;
		display: block;
		height: 100%;
		position: relative;
	}
	.hotsell-items img{
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
		font-size: 0.32rem;
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
				receive: []
			}
		},
		computed: {
			rankList(){
				// console.log(this.$store.state.hotsellData.data);
				return this.$store.state.hotsellData.data;
				// return this.rankList;
			}
		}
	}
</script>