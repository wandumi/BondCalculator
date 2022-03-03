import Api from "./Api";
import Csrf from "./Csrf";

export default {
	/** Bond Data */
	async bondData() {
		Csrf.getCookie();
		return Api.get("/api/bond_settings");
	},
	async bondPost() {
		Csrf.getCookie();
		return Api.post("/api/bond_settings");
	},
	async bondUpdate() {
		Csrf.getCookie();
		return Api.put("/api/bond_settings");
	},
	async bondDelete() {
		Csrf.getCookie();
		return Api.delete("/api/bond_settings");
	},
};
