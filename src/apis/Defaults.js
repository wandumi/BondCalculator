import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Defaults Data */
	async defaultData() {
		Csrf.getCookie();
		return Api.get("/api/default_settings");
	},
	async defaultPost(form) {
		Csrf.getCookie();
		return Api.post("/api/default_settings", form);
	},
	async defaultUpdate(form) {
		Csrf.getCookie();
		return Api.put("/api/default_settings", form);
	},
	async defaultDelete(id) {
		Csrf.getCookie();
		return Api.delete("/api/default_settings", id);
	},
};
