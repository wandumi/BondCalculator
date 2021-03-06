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
		state.purchaseData.unshift(purchase);
	},

	//editing the purchase
	EDIT_PURCHASE_DATA(state, purchase) {
		state.purchaseData.forEach((p) => {
			if (p.id == purchase.id) {
				p = purchase;
			}
		});
	},

	// removing purchase
	DELETE_PURCHASE_DATA(state, purchaseID) {
		let purchase = state.purchaseData.filter((p) => p.id != purchaseID);
		state.purchaseData = purchase;
	},
};

export const actions = {
	//get the purchase settings
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

	//post the purchase Data
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

	//edit the purchase
	editPurchase({ commit }, { payload, context }) {
		return purchase
			.purchaseUpdate(payload)
			.then((response) => {
				commit("EDIT_PURCHASE_DATA", payload);
				return Promise.resolve();
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
			});
	},

	// remove the purchase
	deletePurchase({ commit }, purchaseID) {
		return purchase.purchaseDelete(purchaseID).then((response) => {
			if (response.status == 200 || response.status == 204) {
				commit("DELETE_PURCHASE_DATA", purchaseID.id);
			}
		});
	},
};

export const getters = {
	// get the purchase data
	getPurchase(state) {
		return state.purchaseData;
	},
};
