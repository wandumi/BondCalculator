import axios from "axios";
import Bond from "../../apis/Bond";

export const state = {
	// Bond State
	bondData: [],
	// Transfer State
	purchaseData: [],
	// Default State
	defaultData: [],
	// transerDuty
	transferData: [],

	/**Transfer Cost */
	transferDuty: "",
	vatCharge: "",
	totalPurchase: "",

	/**Bond Cost */
	totalBond: "",
	vatBond: "",
};

export const mutations = {
	// set the default settings
	setDefaultData(state, products) {
		state.defaultData = products;
	},

	// get the bond settings
	setBondData(state, bonds) {
		state.bondData = bonds;
	},

	// set the transaciton settings
	setPurchaseData(state, purchase) {
		state.purchaseData = purchase;
	},

	// set transferData
	setTransferData(state, transfer) {
		state.transferData = transfer;
	},

	/**Set the Purchase */

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
};

export const actions = {
	/** get the default settings */
	getDefaultData({ commit }) {
		return Bond.defaultData()
			.then((response) => {
				commit("setDefaultData", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},

	/** get bond settings */
	getBondData({ commit }) {
		return Bond.bondData()
			.then((response) => {
				// debugger;
				commit("setBondData", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},

	/** get the transaciton settings */
	getPurchaseData({ commit }) {
		return Bond.purchaseData()
			.then((response) => {
				commit("setPurchaseData", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},

	// transferDuty
	getTransferData({ commit }) {
		return Bond.transferData()
			.then((response) => {
				commit("setTransferData", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},

	/** get Total Purchase */
	getTotalPurchase({ commit }, total) {
		commit("TOTAL_TRANSFER_COST", total);
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
};

export const getters = {
	// get the defaults data
	getDefaults(state) {
		return state.defaultData;
	},

	// get the bonds data
	getBonds(state) {
		return state.bondData;
	},

	// get the purchase data
	getPurchase(state) {
		return state.purchaseData;
	},

	// transferdata
	getTransfer(state) {
		return state.transferData;
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
