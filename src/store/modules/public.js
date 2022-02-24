import axios from "axios";
import Bond from "../../apis/Public";

export const state = {
	// Bond State
	bondPublic: [],
	// Transfer State
	purchasePublic: [],
	// Default State
	defaultPublic: [],
	// transerDuty
	transferPublic: [],

	/**Transfer Cost */
	transferDutyPublic: "",
	vatChargePublic: "",
	totalPurchasePublic: "",

	/**Bond Cost */
	totalBondPublic: "",
	vatBondPublic: "",
};

export const mutations = {
	// set the default settings
	PUBLIC_DEFAULT_DATA(state, products) {
		state.defaultData = products;
	},

	// get the bond settings
	PUBLIC_BOND_DATA(state, bonds) {
		state.bondData = bonds;
	},

	// set the transaciton settings
	PUBLIC_PURCHASE_DATA(state, purchase) {
		state.purchaseData = purchase;
	},

	// set transferData
	PUBLIC_PURCHASE_DATA(state, transfer) {
		state.transferData = transfer;
	},

	/**Set the Purchase */

	//Total for the transfer Cost
	PUBLIC_TOTAL_TRANSFER_COST(state, totalCost) {
		state.totalPurchase = totalCost;
	},

	// transfer duty
	PUBLIC_TRANSFER_DUTY(state, transferDuty) {
		state.transferDuty = transferDuty;
	},

	// total vat purchase
	PUBLIC_VAT_CHARGE(state, vatCharge) {
		state.vatCharge = vatCharge;
	},

	// get the tatal bond Cost
	PUBLIC_TOTAL_BOND_COST(state, totalBond) {
		state.totalBond = totalBond;
	},

	// get the vat on bond
	PUBLIC_VAT_BOND(state, vatBond) {
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
	getBondData(state) {
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
