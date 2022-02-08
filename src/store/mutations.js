// get a token for the logged in user from the storage

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
// set the Total purchase
export const TOTAL_PURCHASE = (state, total) => {
	state.totalPurchase = total;
};

// set the Vat Charge
export const VAT_CHARGE = (state, total) => {
	state.vatCharge = total;
};

// set the transferDuty
export const TRANSFER_COST = (state, total) => {
	state.transferDuty = total;
};
