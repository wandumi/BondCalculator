import axios from "axios";
import User from "../apis/User";
import { setHttpToken } from "../helpers";
/**login the user */
export const loginUser = ({ commit, dispatch }, { payload, context }) => {
	return User.login(payload)
		.then((response) => {
			console.log("submitting");
		})
		.catch((error) => {
			context.errors = error.response.data.errors;
			console.log("actions working");
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
			console.log("actions working");
		});
};

/** set token to the state */
export const setToken = ({ commit }, token) => {
	commit("setToken", token);
	setHttpToken(token);
};

// get the user
export const getUser = ({ commit, dispatch }) => {
	return axios
		.get("/api/user")
		.then((response) => {
			commit("setUser", response.data.data);
			commit("isLoggedIn", true);
			// return Promise.resolve();
		})
		.catch((errors) => {
			dispatch("getLogout");
			console.log("There was and error" + errors);
		});
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

// bondSettings
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

// get the transaciton settings
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

// get Total Purchase
export const getTotalPurchase = ({ commit }, total) => {
	commit("TOTAL_TRANSFER_COST", total);
};

// get Vat amount
export const getVatCharge = ({ commit }, total) => {
	commit("VAT_CHARGE", total);
};

// get transfer Cost
export const getTransferDuty = ({ commit }, total) => {
	commit("TRANSFER_DUTY", total);
};

// get bond vat
export const getBondTotal = ({ commit }, total) => {
	commit("TOTAL_BOND_COST", total);
};

// get bond vat
export const getVatBond = ({ commit }, total) => {
	commit("VAT_BOND", total);
};
