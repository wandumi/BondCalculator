import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/**Transfer Data */
	async transferData() {
		// Csrf.getCookie();
		return Api.get("/api/transfer_duty");
	},
	async transferPost(form) {
		Csrf.getCookie();
		return Api.post("/api/transfer_duty", form);
	},
	async transferUpdate(form) {
		Csrf.getCookie();
		return Api.put("/api/transfer_duty", form);
	},
	async transferDelete(id) {
		Csrf.getCookie();
		return Api.delete("/api/transfer_duty", id);
	},
};
