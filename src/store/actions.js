import axios from "axios";
import User from "../apis/User";

import router from "../router";

/** login the user */
export const loginUser = ({ commit, dispatch }, { payload, context }) => {
	return User.login(payload)
		.then((response) => {
			commit("setUserToken", response.data.jwt);
			commit("setLoggedIn", true);
			localStorage.setItem("isLoggedIn", true);

			dispatch("getUser");

			router.replace("/auth/dashboard");
		})
		.catch((error) => {
			context.errors = error.response.data.errors;
		});
};

/** get the register user in the system */
export const registerUser = ({ commit }, { payload, context }) => {
	return User.register(payload)
		.then((response) => {
			console.log("Submitted", response.data);
		})
		.catch((error) => {
			context.errors = error.response.data.errors;
		});
};

/** get the logged in user data */
export const getUser = ({ commit, dispatch }) => {
	return axios
		.get("/api/user")
		.then((response) => {
			commit("setUserData", response.data);
		})
		.catch((errors) => {
			dispatch("getLogout");
			console.log("There was and error" + errors);
		});
};

export const getLogout = ({ commit }) => {
	commit("setLogout", {});
	localStorage.setItem("isLoggedIn", false);
	router.replace("/");
};

/** get the default settings */
export const getDefaultData = ({ commit }) => {
	return axios
		.get("/api/default_settings")
		.then((response) => {
			commit("setDefaultData", response.data.data);
			// return Promise.resolve();
		})
		.catch((errors) => {
			console.log("There was and error" + errors);
		});
};

/** get bond settings */
export const getBondData = ({ commit }) => {
	return axios
		.get("/api/bond_settings")
		.then((response) => {
			commit("setBondData", response.data.data);
			return Promise.resolve();
		})
		.catch((errors) => {
			console.log("There was and error" + errors);
		});
};

/** get the transaciton settings */
export const getPurchaseData = ({ commit }) => {
	return axios
		.get("/api/purchase_settings")
		.then((response) => {
			commit("setPurchaseData", response.data.data);
			return Promise.resolve();
		})
		.catch((errors) => {
			console.log("There was and error" + errors);
		});
};

/** get Total Purchase */
export const getTotalPurchase = ({ commit }, total) => {
	commit("TOTAL_TRANSFER_COST", total);
};

// get Vat amount
export const getVatCharge = ({ commit }, total) => {
	commit("VAT_CHARGE", total);
};

/** get transfer Cost */
export const getTransferDuty = ({ commit }, total) => {
	commit("TRANSFER_DUTY", total);
};

/**  get bond vat */
export const getBondTotal = ({ commit }, total) => {
	commit("TOTAL_BOND_COST", total);
};

/** get bond vat */
export const getVatBond = ({ commit }, total) => {
	commit("VAT_BOND", total);
};
