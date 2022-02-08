import axios from "axios";
// Super administrators duties
// able to see all users and CRUD

// Get the token from the database
// store it in the localStorage

// get the logged in user in the system
// set the values

// get the default settings
export const getDefaultData = ({ commit }) => {
	return axios
		.get("http://127.0.0.1:8000/api/default_settings")
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
		.get("http://127.0.0.1:8000/api/bond_settings")
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
		.get("http://127.0.0.1:8000/api/purchase_settings")
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
	commit("TOTAL_PURCHASE", total);
};

// get Vat amount
export const getVatCharge = ({ commit }, total) => {
	commit("VAT_CHARGE", total);
};

// get transfer Cost
export const getTransferCost = ({ commit }, total) => {
	commit("TRANSFER_COST", total);
};
