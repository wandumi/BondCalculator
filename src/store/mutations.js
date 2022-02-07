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
