import Vue from "vue";
import Vuex from "vuex";
import * as bondCalc from "./modules/bondCalc.js";
import * as user from "./modules/user.js";
import * as purchases from "./modules/purchaseprice.js";
import * as transfers from "./modules/transferduty.js";
import * as defaults from "./modules/defaultsettings.js";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		bondCalc,
		purchases,
		transfers,
		defaults,
		user,
	},
});
