<template>
	<div class="happyBuy" v-if="happybuyList.length>0">
		<div class="happy-title">
			<img :src="happybuyList[4].title_img" alt="">
		</div>
		<div class="happy-list">
			<a href="" class="list-title">
				<img :src="happybuyList[4].Data[0].title_img" alt="">
			</a>
			<ul>
				<li v-for="i in happybuyList[4].Data[0].Data">
					<a href="">
						<div>
							<img :src="i.img" alt="">
						</div>
						<p class="group-price">
							拼团价:{{i.goods_price}}
						</p>
						<p class="alone-price">
							单独购:{{i.market_price}}
						</p>		
					</a>
				</li>
			</ul>
			<div class="img">
				<img :src="happybuyList[5].Data[0].Data[0].img" alt="">
			</div>
		</div>
	</div>
</template>



<style>
	.happy-list ul{
		overflow: auto;
		white-space: nowrap;
		display: flex;
		padding-bottom: 0.533333rem; 
	}
	.happy-list ul li{
		width: 20%;
		padding: 0.266667rem;
		text-align: center;
	}
	.happy-list ul li a{
		display: block;
		width: 100%;
	}
	.happy-list ul li img{
		width: 2.0rem;
		height: 2.0rem;
	}
	.group-price{
		font-size: 0.4rem;
		color: #ff3d00;
	}
	.alone-price{
		color: #9c9a9a;
		font-size: 0.32rem;
	}

</style>




<script>
	export default {
		data(){
			return {
				happybuyList: []
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/home-products.json')
				.then(function(res){
					this.happybuyList = res.body.Data;
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>