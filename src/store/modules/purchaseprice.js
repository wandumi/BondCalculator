import purchase from "../../apis/Purchase";

export const namespace = true;

export const state = {
	// Transfer State
	purchaseData: [],
};

export const mutations = {
	/**Set the Purchase */
	GET_PURCHASE_DATA(state, purchase) {
		state.purchaseData = purchase;
	},

	// set transferData
	SET_PURCHASE_DATA(state, purchase) {
		let index = state.purchaseData.findIndex((p) => p.id == purchase.id);
		if (index == -1) {
			state.purchaseData.push(purchase);
		} else {
			Vue.set(state.purchaseData, index, purchase);
		}
		// state.transferData = transfer;
	},

	DELETE_PURCHASE_DATA(state, purchase) {
		let index = state.purchaseData.findIndex((t) => t.id == purchase.id);
		state.purchaseData.splice(index, 1);
	},
};

export const actions = {
	/** get the transaciton settings */
	getPurchaseData({ commit }) {
		return purchase
			.purchaseData()
			.then((response) => {
				commit("GET_PURCHASE_DATA", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},

	/** post the transfer Data */
	setPurchaseData({ commit }, { payload, context }) {
		return purchase
			.purchasePost(payload)
			.then((response) => {
				commit("SET_PURCHASE_DATA", payload);
				return Promise.resolve();
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
			});
	},
};

export const getters = {
	// get the purchase data
	getPurchase(state) {
		return state.purchaseData;
	},
};
