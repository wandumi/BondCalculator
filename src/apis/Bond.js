import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/** Bond Data */
	async bondData() {
		// Csrf.getCookie();
		return Api.get("/api/bond_settings");
	},
	async bondPost(form) {
		Csrf.getCookie();
		return Api.post("/api/bond_settings", form);
	},
	async bondUpdate(form) {
		Csrf.getCookie();
		return Api.put("/api/bond_settings", form);
	},
	async bondDelete(bond) {
		Csrf.getCookie();
		return Api.delete(`/api/bond_settings/${bond.id}`);
	},
};
