/**Set the values to Arrays */
// get the defaults data
export const getDefaults = (state) => {
	return state.defaultData;
};

// get the bonds data
export const getBonds = (state) => {
	return state.bondData;
};

// get the purchase data
export const getPurchase = (state) => {
	return state.purchaseData;
};

// get the totalCost
export const getTotalPurchase = (state) => {
	return state.totalPurchase;
};

// get the vat charge
export const getVatCharge = (state) => {
	return state.vatCharge;
};

// get the transferDuty
export const getTransferDuty = (state) => {
	return state.transferDuty;
};
