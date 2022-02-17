import localforage from "localforage";
import { isEmpty } from "lodash";

// get a token for the logged in user from the storage
export const setUser = (state, payload) => {
	state.user = payload;
};

export const setLoggedIn = (state, payload) => {
	state.isLoggedIn = payload;
};

// set the token
export const setToken = (state, token) => {
	// check empty and remove it
	if (isEmpty(token)) {
		localforage.removeItem("authtoken", token);
		return;
	}
	localforage.setItem("authtoken", token);
};

// set the default settings
export const setDefaultData = (state, products) => {
	state.defaultData = products;
};

// get the bond settings
export const setBondData = (state, bonds) => {
	state.bondData = bonds;
};

// set the transaciton settings
export const setPurchaseData = (state, purchase) => {
	state.purchaseData = purchase;
};

/**Set the Purchase */

//Total for the transfer Cost
export const TOTAL_TRANSFER_COST = (state, totalCost) => {
	state.totalPurchase = totalCost;
};

// transfer duty
export const TRANSFER_DUTY = (state, transferDuty) => {
	state.transferDuty = transferDuty;
};

// total vat purchase
export const VAT_CHARGE = (state, vatCharge) => {
	state.vatCharge = vatCharge;
};

// get the tatal bond Cost
export const TOTAL_BOND_COST = (state, totalBond) => {
	state.totalBond = totalBond;
};

// get the vat on bond
export const VAT_BOND = (state, vatBond) => {
	state.vatBond = vatBond;
};
