import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
//import login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/Contact.vue'),
	},
	{
		path: '/venusdetail',
		name: 'Venusdetail',
		component: () => import('../views/Venusdetail.vue'),
	},
	{
		path: '/addservic',
		name: 'Addservic',
		component: () => import('../views/Addservic.vue'),
	},
	{
		path: '/categorydetail',
		name: 'Categorydetail',
		component: () => import('../views/Categorydetail.vue'),
	},
	{
		path: '/user',
		name: 'User',
		component: () => import('../views/User.vue'),
	},
	{
		path: '/resetpass',
		name: 'Resetpass',
		component: () => import('../views/Resetpass.vue'),
	},
	{
		path: '/logemail',
		name: 'Logemail',
		component: () => import('../views/Logemail.vue'),
	},
	{
		path: '/loginadmin',
		name: 'Loginadmin',
		component: () => import('../views/Loginadmin.vue'),
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../views/Dashboard.vue'),
	},
	{
		path: '/updateins',
		name: 'Updateins',
		component: () => import('../views/Updateins.vue'),
	},
	{
		path: '/plan',
		name: 'Plan',
		component: () => import('../views/Plan.vue'),
	},
	{
		path: '/booking',
		name: 'Booking',
		component: () => import('../views/Booking.vue'),
	},
	{
		path: '/verify',
		name: 'Verify',
		component: () => import('../views/Verify.vue'),
	},
	{
		path: '/success',
		name: 'Success',
		component: () => import('../views/Success.vue'),
	},
	{
		path: '/error',
		name: 'Error',
		component: () => import('../views/Error.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
