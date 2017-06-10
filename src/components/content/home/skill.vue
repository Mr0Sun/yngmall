<template>
	<div class="skill">
		<div class="more">
			<a href=""></a>
			<p class="time">
				<span class="hour">
					{{hour}}
				</span>时
				<span class="minute">
					{{minute}}
				</span>分
				<span class="second">
					{{second}}
				</span>秒
			</p>
		</div>
		<div class="prolist">
			<ul v-if="skillList.length>0">
				<li v-for="i in skillList[0].Data[0].Data" :key='i.img'>
					<div class="pro-img">
						<img :src="i.img" alt="">
					</div>
					<p class="now-price">
						￥{{i.goods_price}}
					</p>
					<p class="old-price">
						￥{{i.market_price}}
					</p>
				</li>
			</ul>
		</div>
		<div class="new-products">
			<ul v-if="skillList.length>0">
				<li v-for="(i,index) in skillList[0].Data[1].Data" :key="i.head_img">
					<a @click='link(i.hotsellId)'>
						{{index}}
						<img :src="i.head_img" alt="">
						<img :src="i.img" alt="">
					</a>											
				</li>
			</ul>
		</div>
	</div>
</template>


<style>
	.more{
		border-bottom: 1px solid #f0f0f0;
		position: relative;
	}
	.more a{
		width: 100%;
		height: 0.8rem;
		display: inline-block;
		background: url(../../../assets/fonts/ms.png) no-repeat;
		background-size: contain;
	}
	.time{
		position: absolute;
		top: 0.16rem;
		left: 2.666667rem;
		font-size: 0.373333rem;
	}
	.time span{
		display: inline-block;
		width: 0.533333rem;
		height: 0.533333rem;
		background: #000;
		color: #fff;
		text-align: center;
		line-height: 0.533333rem;
	}
	.prolist ul{
		display: flex;
		overflow: auto;
		white-space: nowrap;
		border-bottom: 1px solid #f0f0f0;
	}
	.prolist ul li{
		padding: 0.266667rem;
		text-align: center;
	}
	.pro-img img{
		width: 2.133333rem;
	}
	.now-price{
		color: #ff3d00;
		font-size: 0.426667rem;
	}
	.old-price{
		color: #9c9a9a;
		text-decoration: line-through;
	}
	.new-products ul:after{
		content: '';
		display: block;
		clear: both;
	}
	.new-products ul li{
		float: left;
		width: 25%;
		height: 3.333333rem;
		border: 1px solid #f0f0f0;
		box-sizing: border-box;
	}
	.new-products ul li:nth-of-type(1){
		width: 50%;
		height: 6.666667rem;
	}
	.new-products ul li a{
		width: 100%;
		display: inline-block;
		position: relative;
	}
	.new-products ul li img{
		width: 100%;
	}
	.new-products ul li img:nth-of-type(even){
		width: 80%;
		position: absolute;
		top: 0.8rem;
		left: 10%;
	}
	.new-products ul li:nth-child(1) img:nth-of-type(2){
		position: absolute;
		top: 2.133333rem;
	}
</style>



<script>
var time = new Date();
var count = 0;
	export default{
		data(){
			return {
				skillList: [],
				hotsellID: [82,83,84,85,82],
				hour: time.getHours(),
				minute: time.getMinutes(),
				second: time.getSeconds(),
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/home-products.json')
				.then(function(res){
					var arr = res.body.Data[0].Data[1].Data;
					for (var i = 0; i < arr.length; i++) {
						arr[i].hotsellId = this.hotsellID[i];
					}
					this.skillList = res.body.Data;
					console.log(this.skillList[0].Data[1].Data);
				})
			},
			add(){
				var that = this;
				setInterval(function(){
					that.second--;
					if (that.second<10) {
						that.second = '0'+that.second;
						if (that.second<=0) {
							that.second = 59;
							that.minute -= 1;
							if (that.minute<10) {
								that.minute = '0'+that.minute;
								if (that.minute<=0) {
									that.minute = 59;
									that.hour -= 1;
									if (that.hour<10) {
										that.hour = '0'+that.hour;
										if (that.hour<=0) {
											that.hour = 23;
										}
									}
									
								}
							}
							
						}
						
						
					}
				},1000)
			},
			link(index){
				this.$router.push({path:'/home/hotsell'});
				this.$http({
					url:"http://www.yngmall.com/json/SpecialService.ashx",
					method: 'post',
					params: {
						ActionType: 'GetList',
						Sid:index
					}
				}).then(function(res){
					this.$store.commit('changeHotsellData',{
						id: index,
						data: res.body
					});
				})
			}
		},
		mounted(){
			this.request();
			this.add();
		}
	}
</script>