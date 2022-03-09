import transfer from "../../apis/Transfers";

export const namespace = true;

export const state = {
	// transerDuty
	transferData: [],
};

export const mutations = {
	// set transferData
	GET_TRANSFER_DATA(state, transfer) {
		state.transferData = transfer;
	},
	// set transferData
	SET_TRANSFER_DATA(state, transfer) {
		state.purchaseData.unshift(transfer);
	},

	DELETE_TRANSFER_DATA(state, transfer) {
		let index = state.transferData.findIndex((t) => t.id == transfer.id);
		state.transferData.splice(index, 1);
	},
};

export const actions = {
	// transferDuty
	getTransferData({ commit }) {
		return transfer
			.transferData()
			.then((response) => {
				commit("GET_TRANSFER_DATA", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},

	/** post the transfer Data */
	setTransferData({ commit }, { payload, context }) {
		return transfer
			.transferPost(payload)
			.then((response) => {
				// console.log(response);
				commit("SET_TRANSFER_DATA", payload);
				return Promise.resolve();
			})
			.catch((error) => {
				console.log(error);
				context.errors = error.response.data.errors;
			});
	},
	deleteTranser({ commit }, transfer) {
		return transfer.transferDelete(transfer).then((response) => {
			if (response.status == 200 || response.status == 204) {
				commit("DELETE_PURCHASE_DATA", transfer.id);
			}
		});
	},
};

export const getters = {
	// transferdata
	getTransfer(state) {
		return state.transferData.concat().sort((t1, t2) => {
			t1.id - t2.id;
		});
	},
};
