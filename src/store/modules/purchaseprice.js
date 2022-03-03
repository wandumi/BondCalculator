import purchase from "../../apis/Purchase";

export const namespace = true;

export const state = {
	// Transfer State
	purchaseData: [],
};

export const mutations = {
	/**Set the Purchase */
	setPurchaseData(state, purchase) {
		state.purchaseData = purchase;
	},
};

export const actions = {
	/** get the transaciton settings */
	getPurchaseData({ commit }) {
		return purchase
			.purchaseData()
			.then((response) => {
				commit("setPurchaseData", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},
};

export const getters = {
	// get the purchase data
	getPurchase(state) {
		return state.purchaseData;
	},
};
