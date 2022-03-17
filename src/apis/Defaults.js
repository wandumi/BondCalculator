import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Defaults Data */
	async defaultData() {
		// Csrf.getCookie();
		return Api.get("/api/default_settings");
	},
	async defaultPost(form) {
		Csrf.getCookie();
		return Api.post("/api/default_settings", form);
	},
	async defaultEdit(defaults) {
		Csrf.getCookie();
		return Api.get(`/api/default_settings/${defaults}`);
	},
	async defaultUpdate(defaults) {
		Csrf.getCookie();
		return Api.post(`/api/default_settings/${defaults.id}`, defaults);
	},
	async defaultDelete(defaults) {
		Csrf.getCookie();
		return Api.delete(`/api/default_settings/${defaults.id}`);
	},
};
