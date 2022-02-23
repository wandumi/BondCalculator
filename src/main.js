import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import Vuelidate from "vuelidate";
import "nprogress/nprogress";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

Vue.use(Vuelidate);

// format currencies
Vue.filter("moneyCurrency", function (value) {
	const formatter = new Intl.NumberFormat("en", {
		style: "currency",
		currency: "ZAR",
		currencyDisplay: "narrowSymbol",
	});
	return formatter.format(value);
});

Vue.filter("money", function (value) {
	const formatter = new Intl.NumberFormat("en", {
		// style: "currency",
		// currency: "ZAR",
	});
	return formatter.format(value);
});

// router.beforeEach((to, from, next) => {
// 	if (to.matched.some((record) => record.meta.requiresAuth)) {
// 		if (!store.getters.getUser.authenticated) {
// 			// next({
// 			// 	name: "Login",
// 			// });
// 			return { name: "Login" };
// 		} else {
// 			next();
// 		}
// 	} else if (to.matched.some((record) => record.meta.requiresVisitor)) {
// 		if (store.getters.getUser.authenticated) {
// 			// next({
// 			// 	name: "Dashboard",
// 			// });
// 			return { name: "Dashboard" };
// 		} else {
// 			next();
// 		}
// 	} else {
// 		next();
// 	}
// });

store.dispatch("getUserData").then(() => {
	new Vue({
		router,
		store,
		render: (h) => h(App),
	}).$mount("#app");
});
