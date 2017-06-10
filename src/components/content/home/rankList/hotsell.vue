<template>
	<div id="hotsell">
		<backhd></backhd>
		<div class="hotsell-menu">
			<ul>
				<li @click="request(82)" :class="82==backId?'hotsell-active':''">排行榜</li>
				<li @click="request(83)" :class="83==backId?'hotsell-active':''">爱美控</li>
				<li @click="request(84)" :class="84==backId?'hotsell-active':''">自拍狂</li>
				<li @click="request(85)" :class="85==backId?'hotsell-active':''">时尚咖</li>
			</ul>
		</div>
		<ranklist></ranklist>
	</div>
</template>


<style>
	#hotsell{
		position: absolute;
		top: 0;
		bottom: -1.2rem;
		left: 0;
		right: 0;
		background: #fff;
		overflow:auto;
		z-index: 200;
	}
	.hotsell-menu{
		width: 100%;
		position: absolute;
		top: 1.093333rem;
	}
	.hotsell-menu ul{
		display: flex;
	}
	.hotsell-menu ul li{
		width: 25%;
		height: 1.066667rem;
		line-height: 1.066667rem;
		text-align: center;
		font-size: 0.426667rem;
		position: relative;
	}
	.hotsell-active:after{
		content: "";
	    position: absolute;
	    bottom: 0;
	    height: 0.053333rem;
	    width: 100%;
	    left: 0;
	    transition: all 2s;
	    background: #ff3d00;
	    z-index: 100;
	}
</style>


<script>
import backhd from './backHd';
import ranklist from './ranklist';
	export default{
		components: {
			backhd,ranklist
		},
		methods: {
			request(id){
				this.$http({
					url:"http://www.yngmall.com/json/SpecialService.ashx",
					method: 'post',
					params: {
						ActionType: 'GetList',
						Sid:id
					}
				}).then(function(res){
					this.$store.commit('changeHotsellData',{
						id: id,
						data: res.body
					});
				})
			}
		},
		computed:{
			backId(){
				return this.$store.state.hotsellData.id;
			}
		},
		mounted(){
			// this.request(82);
		}
	}
</script>