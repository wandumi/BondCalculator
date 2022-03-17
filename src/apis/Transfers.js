import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Transfer Data */
	async transferData() {
		// Csrf.getCookie();
		return Api.get("/api/transfer_duty");
	},
	async transferPost(transfer) {
		Csrf.getCookie();
		return Api.post("/api/transfer_duty", transfer);
	},
	async transferEdit(transfer) {
		Csrf.getCookie();
		return Api.get(`/api/transfer_duty/${transfer}`);
	},
	async transferUpdate(transfer) {
		Csrf.getCookie();
		return Api.post(`/api/transfer_duty/${transfer.id}`, transfer);
	},
	async transferDelete(transfers) {
		Csrf.getCookie();
		return Api.delete(`/api/transfer_duty/${transfers.id}`);
	},
};
