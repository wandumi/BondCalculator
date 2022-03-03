import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Purchase Data */
	async purchaseData() {
		Csrf.getCookie();
		return Api.get("/api/purchase_settings");
	},
	async purchasePost() {
		Csrf.getCookie();
		return Api.post("/api/purchase_settings");
	},
	async purchaseUpdate() {
		Csrf.getCookie();
		return Api.put("/api/purchase_settings");
	},
	async purchaseDelete() {
		Csrf.getCookie();
		return Api.delete("/api/purchase_settings");
	},
};
