<template>
	<div id="guess">
		<div class="guess-title"  v-if="guessList.TITLE">
			<img :src="guessList.TITLE[0].img_url" alt="">
		</div>
		<div class="guess-list">
			<ul>
				<li v-for="i in guessList.DATA">
					<a href="">
						<img :src="i.img" alt="">
						<p class="guess-name">
							{{i.name}}
						</p>
						<p class="guess-price">
							￥{{i.cost_price}}
						</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>



<style>
	.guess-list ul{
		display: flex;
		flex-wrap: wrap;
	}
	.guess-list ul li{
		width: 50%;
		border: 2px solid #f0f0f0;
		box-sizing: border-box;
		padding: 0.133333rem;
	}
	.guess-list ul li a{
		display: block;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.guess-list ul li img{
		width: 90%;
		margin: 5%;
	}
	.guess-price{
		color: #ff3d00;
		font-size: 0.373333rem;
	}
	.guess-name{
		font-size: 0.373333rem;
		overflow: hidden;
	   /* display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;*/
	    /*word-break: break-all;*/
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #555;
	    margin-bottom: 0.133333rem;
	}
</style>



<script>
	export default {
		data(){
			return {
				guessList: []
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/home-cai.json')
				.then(function(res){
					this.guessList = res.body;
				})
			}
		},
		mounted(){
			this.request();
		}
	}
</script>