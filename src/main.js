import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import Vuelidate from "vuelidate";
import "nprogress/nprogress";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

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

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
