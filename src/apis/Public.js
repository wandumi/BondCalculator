import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Default Data */
	async publicDefaultData() {
		await Csrf.getCookie();
		return Api.get("/api/public_default_settings");
	},

	/** Bond Data */
	async publicBondData() {
		Csrf.getCookie();
		return Api.get("/api/public_bond_settings");
	},

	/**Purchase Data */
	async publicPurchaseData() {
		Csrf.getCookie();
		return Api.get("/api/public_purchase_settings");
	},

	/** Transfer Data */
	async publicTransferData() {
		Csrf.getCookie();
		return Api.get("/api/public_transfer_duty");
	},
};
t;
