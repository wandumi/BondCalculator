import Bond from "../../apis/Bond";

export const state = {
	// Bond State
	bondData: [],

	totalPurchase: "",

	/**Transfer Cost */
	transferDuty: "",
	vatCharge: "",

	/**Bond Cost */
	totalBond: "",
	vatBond: "",
};

export const mutations = {
	// get the bond settings
	getBondData(state, bonds) {
		state.bondData = bonds;
	},

	// set transferData
	SET_BONDS_DATA(state, bonds) {
		state.bondData.unshift(bonds);
	},

	//edit bond data
	EDIT_BOND_DATA(state, bonds) {
		state.bondData.forEach((b) => {
			if (b.id == bonds.id) {
				b = bonds;
			}
		});
	},

	// remove bond data
	DELETE_BOND_DATA(state, bonds) {
		let index = state.bondData.findIndex((t) => t.id == bonds.id);
		state.bondData.splice(index, 1);
	},

	//Total for the transfer Cost
	TOTAL_TRANSFER_COST(state, totalCost) {
		state.totalPurchase = totalCost;
	},

	// transfer duty
	TRANSFER_DUTY(state, transferDuty) {
		state.transferDuty = transferDuty;
	},

	// total vat purchase
	VAT_CHARGE(state, vatCharge) {
		state.vatCharge = vatCharge;
	},

	// get the tatal bond Cost
	TOTAL_BOND_COST(state, totalBond) {
		state.totalBond = totalBond;
	},

	// get the vat on bond
	VAT_BOND(state, vatBond) {
		state.vatBond = vatBond;
	},
	CLEAR_TOTALS(state) {
		Object.assign(state, this.transferDuty);
	},
};

export const actions = {
	/** get bond settings */
	getBondData({ commit }) {
		return Bond.bondData()
			.then((response) => {
				// debugger;
				commit("getBondData", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},

	/** post the transfer Data */
	setBondsData({ commit }, { payload, context }) {
		return Bond.bondPost(payload)
			.then((response) => {
				commit("SET_BONDS_DATA", payload);
				return Promise.resolve();
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
			});
	},

	//edit the bond
	editBondData({ commit }, { payload, context }) {
		return Bond.bondUpdate(payload)
			.then((response) => {
				commit("EDIT_BOND_DATA", payload);
				return Promise.resolve();
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
			});
	},

	// remove the bond data
	deleteBond({ commit }, bonds) {
		return Bond.bondDelete(bonds).then((response) => {
			if (response.status == 200 || response.status == 204) {
				commit("DELETE_BOND_DATA", bonds.id);
			}
		});
	},

	clearTotals({ commit }, payload) {
		commit("CLEAR_TOTALS", payload);
	},

	// get Vat amount
	getVatCharge({ commit }, total) {
		commit("VAT_CHARGE", total);
	},

	/** get transfer Cost */
	getTransferDuty({ commit }, total) {
		commit("TRANSFER_DUTY", total);
	},

	/**  get bond vat */
	getBondTotal({ commit }, total) {
		commit("TOTAL_BOND_COST", total);
	},

	/** get bond vat */
	getVatBond({ commit }, total) {
		commit("VAT_BOND", total);
	},

	/** get Total Purchase */
	getTotalPurchase({ commit }, total) {
		commit("TOTAL_TRANSFER_COST", total);
	},
};

export const getters = {
	// get the bonds data
	getBonds(state) {
		return state.bondData;
	},

	// get the totalCost
	getTotalPurchase(state) {
		return state.totalPurchase;
	},

	// get the vat charge
	getVatCharge(state) {
		return state.vatCharge;
	},

	// get the transferDuty
	getTransferDuty(state) {
		return state.transferDuty;
	},

	// get the bond total
	getBondTotal(state) {
		return state.totalBond;
	},

	// get the vat bond
	getVatBond(state) {
		return state.vatBond;
	},
};
