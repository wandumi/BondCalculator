import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/Home.vue";
import Login from "../views/Auth/Login.vue";
import Register from "../views/Auth/Register.vue";
import Profile from "../views/Auth/Profile.vue";
import Settings from "../views/Auth/Settings/Settings.vue";
import Dashboard from "../views/Auth/Dashboard.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/pages/About.vue"),
	},
	{
		path: "/auth/login",
		name: "Login",
		component: Login,
	},
	{
		path: "/auth/register",
		name: "Register",
		component: Register,
	},
	{
		path: "/auth/dashboard",
		name: "Dashboard",
		component: Dashboard,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/profile",
		name: "Profile",
		component: Profile,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/settings",
		name: "Settings",
		component: Settings,
		meta: {
			requiresAuth: true,
		},
	},

	{
		path: "/bonds",
		name: "Bonds",
		component: () => import("../views/Auth/Settings/Bonds.vue"),
	},
	{
		path: "/purchases",
		name: "Purchases",
		component: () => import("../views/Auth/Settings/Purchases.vue"),
	},
	{
		path: "/defaults",
		name: "Defaults",
		component: () => import("../views/Auth/Settings/Defaults.vue"),
	},
	{
		path: "/transfers",
		name: "Transfers",
		component: () => import("../views/Auth/Settings/Transfers.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
