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
