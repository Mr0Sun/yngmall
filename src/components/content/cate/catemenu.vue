<template>
	<div class="cate-menu">
		<ul>
			<li v-for="(i,index) in menuList" @click="changeId(index)" :class="index==backId?'li-active':''">
				{{i.name}}
			</li>
		</ul>
	</div>
</template>



<style>
	.cate-menu{
		width: 25%;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		background: #efefef;
	}
	.cate-menu ul li{
		height: 1rem;
		line-height: 1rem;
		color: #555;
		text-align: center;
		font-size: 0.373333rem;
	}
	.li-active{
		background: #fff;
		transition: 0.5s;
	}
</style>



<script>
	export default{
		data(){
			return {
				menuList: []
			}
		},
		methods: {
			request(){
				this.$http.get('/static/json/category-menu.json')
				.then(function(res){
					this.menuList = res.body.Data;
				})			
			},
			changeId(id){
				this.$store.commit('changeData',id);
			}

		},
		computed: {
			backId(){
				return this.$store.state.id;
			}
		},
		mounted(){
			this.request();
		}
	}
</script>