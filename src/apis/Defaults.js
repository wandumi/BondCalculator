import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Defaults Data */
	async defaultData() {
		Csrf.getCookie();
		return Api.get("/api/default_settings");
	},
	async defaultPost() {
		Csrf.getCookie();
		return Api.post("/api/default_settings");
	},
	async defaultUpdate() {
		Csrf.getCookie();
		return Api.put("/api/default_settings");
	},
	async defaultDelete() {
		Csrf.getCookie();
		return Api.delete("/api/default_settings");
	},
};
