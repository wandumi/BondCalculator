import defaults from "../../apis/Defaults";

export const namespace = true;

export const state = {
	// Default State
	defaultData: [],
};

export const mutations = {
	// set the default settings
	setDefaultData(state, products) {
		state.defaultData = products;
	},
};

export const actions = {
	/** get the default settings */
	getDefaultData({ commit }) {
		return defaults
			.defaultData()
			.then((response) => {
				commit("setDefaultData", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},
};

export const getters = {
	// get the defaults data
	getDefaults(state) {
		return state.defaultData;
	},
};
