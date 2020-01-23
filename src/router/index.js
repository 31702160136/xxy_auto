import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/login',
			name: 'login',
			component: ()=>import('@/components/page/login.vue')
		},
    {
    	path: '/',
    	name: 'login',
    	component: ()=>import('@/components/page/login.vue')
    },
		{
			path: '/index',
			name: 'index',
			component: ()=>import('@/components/page/index.vue')
		}
	]
})
