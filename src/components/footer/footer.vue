<template>
	<div id="footer">
		<ul>
			<li>
				<router-link to="/home">
					<div class="ft-icon"></div>
					<p class="ft-text">首页</p>
				</router-link>	
			</li>
			<li>
				<router-link to="/cate">
					<div class="ft-icon"></div>
					<p class="ft-text">分类</p>
				</router-link>				
			</li>
			<li>
				<router-link to="/cart">
					<div class="ft-icon"></div>
					<p class="ft-text">购物车</p>
				</router-link>		
			</li>
			<li>
				<router-link to="/mine">
					<div class="ft-icon"></div>
					<p class="ft-text">我的</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>


<style>
	#footer{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fafafa;
	}
	#footer ul{
		display: flex;
	}
	#footer ul li{
		width: 25%;
		height: 1.2rem;
	}
	#footer ul li a{
		height: 1.2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.ft-icon{
		width: 0.906667rem;
		height: 0.64rem;
		position: relative;
	}
	.ft-text{
		font-size: 0.32rem;
		color: #6d7070;
		text-align: center;
	}
	.router-link-active .ft-text{
		color: #ff3d00;
	}
	#footer ul li:nth-child(1) .ft-icon{
		background: url(../../assets/fonts/home.png) no-repeat;
		background-size: 100%;
	}
	#footer ul li:nth-child(2) .ft-icon{
		background: url(../../assets/fonts/cate.png) no-repeat;
		background-size: 100%;
	}
	#footer ul li:nth-child(3) .ft-icon{
		background: url(../../assets/fonts/cart.png) no-repeat;
		background-size: 100%;
	}
	#footer ul li:nth-child(4) .ft-icon{
		background: url(../../assets/fonts/mine.png) no-repeat;
		background-size: 100%;
	}
	#footer ul li:nth-child(1) .router-link-active .ft-icon{
		background: url(../../assets/fonts/home.png) no-repeat;
		background-size: 100%;
		background-position-y: -0.64rem;
	}
	#footer ul li:nth-child(2) .router-link-active .ft-icon{
		background: url(../../assets/fonts/cate.png) no-repeat;
		background-size: 100%;
		background-position-y: -0.64rem;
	}
	#footer ul li:nth-child(3) .router-link-active .ft-icon{
		background: url(../../assets/fonts/cart.png) no-repeat;
		background-size: 100%;
		background-position-y: -0.64rem;
	}
	#footer ul li:nth-child(4) .router-link-active .ft-icon{
		background: url(../../assets/fonts/mine.png) no-repeat;
		background-size: 100%;
		background-position-y: -0.64rem;
	}

	#footer ul li .router-link-active .ft-icon{
		transition: .5s;
	}
	
</style>


<script>
	
</script>