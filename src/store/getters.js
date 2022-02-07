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

/**Calculations */

export const purchaseDuty = (state) => {
	// console.log(state.purchaseData.vat_amount);

	// const =((A6-1250000)*0,06)+10500
	// return (
	// 	parseFloat((1370000 - 1250000) * state.purchaseData.vat_amount) + 10500
	// );
	return state.purchaseData.length;
};
