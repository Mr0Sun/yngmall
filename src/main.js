// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import flexible from './assets/js/flexible.js';
import css from './assets/css/reset.css';
import Vue from 'vue';
import App from './App';
import router from './router/router.js';
import resource from 'vue-resource';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(resource);
Vue.config.productionTip = false;

Vue.directive('scroll',{
	bind(el,binding){
		var head,appbar;
		el.addEventListener('scroll',function(e){
			head = el.parentNode.querySelector('#header');
			appbar = el.querySelector('#app-bar');
			if (el.scrollTop>=appbar.offsetHeight) {
				head.className = 'active';
			} else {
				head.className = '';
			}
	    })
	}
});


const store = new Vuex.Store({
	//state  存储的状态
	state: {
		id: 0,
		hotsellData: {
			id:82,
			data: []
		},
		themeId:44
	},
	//行为，对状态进行改变，是静态行为
	mutations: {
		changeData(state,id){
			state.id = id;
		},
		changeHotsellData(state,opt){
			state.hotsellData = opt;
			// console.log(state.hotsellData);
		},
		changeThemeId(state,id){
			state.themeId = id;
		}
	},
	//行为，对状态进行改变，异步行为
	actions: {

	}
})


/* eslint-disable no-new */
new Vue({
  	el: '#app',
 	render: function(h){
		return h(App);
	},
	router,
	resource,
	store
})
