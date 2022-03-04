import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Purchase Data */
	async purchaseData() {
		Csrf.getCookie();
		return Api.get("/api/purchase_settings");
	},
	async purchasePost(form) {
		Csrf.getCookie();
		return Api.post("/api/purchase_settings", form);
	},
	async purchaseUpdate(form) {
		Csrf.getCookie();
		return Api.put("/api/purchase_settings", form);
	},
	async purchaseDelete(id) {
		Csrf.getCookie();
		return Api.delete("/api/purchase_settings", id);
	},
};
