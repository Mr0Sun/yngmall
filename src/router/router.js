import Vue from 'vue';
import vueRouter from 'vue-router';
import home from '../components/content/home/home.vue';
import cate from '../components/content/cate/cate.vue';
import cart from '../components/content/cart/cart.vue';
import mine from '../components/content/mine/mine.vue';
import hotsell from '../components/content/home/rankList/hotsell.vue';
import theme from '../components/content/home/themeList/themelist.vue';

Vue.use(vueRouter);

export default new vueRouter({
	routes: [
		{
			name: 'home',
			path: '/home',
			component: home,
			children: [
				{
					name: 0,
					path: '/home/hotsell',
					component: hotsell
				},
				{
					path: '/home/theme',
					component: theme
				}
			]
		},
		{
			name: 'cate',
			path: '/cate',
			component: cate
		},
		{
			name: 'cart',
			path: '/cart',
			component: cart
		},
		{
			name: 'mine',
			path: '/mine',
			component: mine
		},
		{
			path: '/',
			redirect: 'home'
		}
	]
})

