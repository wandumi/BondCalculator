import Vue from "vue";
import Vuex from "vuex";
import * as bondCalc from "./modules/bondCalc.js";
import * as user from "./modules/user.js";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		bondCalc,
		user,
	},
});
