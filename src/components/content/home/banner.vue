<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide v-for="i in bannerList" :key="i.img_url">
			<img :src="i.img_url" alt="">
		</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</template>


<style>
	.swiper-pagination-bullet{
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 50%;
		background: #000;
		opacity: 0.3;
	}
	.swiper-pagination-bullet-active{
		width: 0.4rem;
		height: 0.2rem;
		border-radius: 0.1rem;
		background: #ff3d00;
		opacity: 1;
		transition: .5s;
	}
	.swiper-slide img{
		width: 100%;
	}
</style>


<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
	export default {
		name: 'carrousel',
	    data() {
	      return {
	        swiperOption: {
	          notNextTick: true,
	          // swiper configs 所有的配置同swiper官方api配置
	          autoplay: 2000,
	          autoHeight: true,
	          loop:true,
	          pagination : '.swiper-pagination',
	          paginationClickable :true,
	          autoplayDisableOnInteraction:false,
	          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
	          debugger: true
	        },
	        bannerList: []
	      }
	    },
		components: {
		    swiper,
		    swiperSlide
		},
		methods: {
			request(){
				this.$http.get('/static/json/banner.json')
				.then(function(res){
					this.bannerList = res.body.banner1;
				})
			}
		},
		computed: {
	      	swiper() {
	        	return this.$refs.mySwiper.swiper
	      	}
	    },
		mounted(){
			this.request();
		}
	}
</script>