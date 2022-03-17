import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Purchase Data */
	async purchaseData() {
		// Csrf.getCookie();
		return Api.get("/api/purchase_settings");
	},
	async purchasePost(form) {
		Csrf.getCookie();
		return Api.post("/api/purchase_settings", form);
	},
	async purchaseEdit(purchase) {
		Csrf.getCookie();
		return Api.get(`/api/purchase_settings/${purchase}`);
	},
	async purchaseUpdate(purchase) {
		Csrf.getCookie();
		return Api.post(`/api/purchase_settings/${purchase.id}`, purchase);
	},
	async purchaseDelete(purchase) {
		Csrf.getCookie();
		return Api.delete(`/api/purchase_settings/${purchase.id}`);
	},
};
