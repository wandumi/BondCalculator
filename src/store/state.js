export default {
	// authentication
	user: {
		authenticated: false,
		token: null,
		data: null,
	},

	// Bond State
	bondData: [],
	// Transfer State
	purchaseData: [],
	// Default State
	defaultData: [],

	/**Transfer Cost */
	transferDuty: "",
	vatCharge: "",
	totalPurchase: "",

	/**Bond Cost */
	totalBond: "",
	vatBond: "",
};
