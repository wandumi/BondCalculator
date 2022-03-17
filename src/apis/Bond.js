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
	async bondEdit(bonds) {
		Csrf.getCookie();
		return Api.get(`/api/bond_settings/${bonds}`);
	},
	async bondUpdate(bonds) {
		Csrf.getCookie();
		return Api.post(`/api/bond_settings/${bonds.id}`, bonds);
	},
	async bondDelete(bonds) {
		Csrf.getCookie();
		return Api.delete(`/api/bond_settings/${bonds.id}`);
	},
};
