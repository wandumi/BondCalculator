import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Default Data */
	async defaultData() {
		await Csrf.getCookie();
		return Api.get("/api/default_settings");
	},
	async defaultPost() {},
	async defaultUpdate() {},
	async defaultDelete() {},

	/** Bond Data */
	async bondData() {
		Csrf.getCookie();
		return Api.get("/api/bond_settings");
	},
	async bondPost() {},
	async bondUpdate() {},
	async bondDelete() {},

	/**Purchase Data */
	async purchaseData() {
		Csrf.getCookie();
		return Api.get("/api/purchase_settings");
	},
	async purchasePost() {},
	async purchaseUpdate() {},
	async purchaseDelete() {},

	/** Transfer Data */
	async transferData() {
		Csrf.getCookie();
		return Api.get("/api/transfer_duty");
	},
	async transferPost() {},
	async transferUpdate() {},
	async transferDelete() {},
};
