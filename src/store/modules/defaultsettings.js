import defaults from "../../apis/Defaults";

export const namespace = true;

export const state = {
	// Default State
	defaultData: [],
};

export const mutations = {
	// set the default settings
	GET_DEFAULT_DATA(state, products) {
		state.defaultData = products;
	},

	// set transferData
	SET_DEFAULT_DATA(state, defaults) {
		let index = state.defaultData.findIndex((p) => p.id == defaults.id);
		if (index == -1) {
			state.defaultData.push(defaults);
		} else {
			Vue.set(state.defaultData, index, defaults);
		}
		// state.transferData = transfer;
	},

	DELETE_DEFAULT_DATA(state, defaults) {
		let index = state.defaultData.findIndex((t) => t.id == defaults.id);
		state.defaultData.splice(index, 1);
	},
};

export const actions = {
	/** get the default settings */
	getDefaultData({ commit }) {
		return defaults
			.defaultData()
			.then((response) => {
				commit("GET_DEFAULT_DATA", response.data.data);
				return Promise.resolve();
			})
			.catch((errors) => {
				console.log("There was and error" + errors);
			});
	},
	/** post the transfer Data */
	setDefaultData({ commit }, { payload, context }) {
		console.log(payload);
		return defaults
			.defaultPost(payload)
			.then((response) => {
				commit("SET_PURCHASE_DATA", payload);
				return Promise.resolve();
			})
			.catch((error) => {
				console.log(error);
				context.errors = error.response.data.errors;
			});
	},
};

export const getters = {
	// get the defaults data
	getDefaults(state) {
		return state.defaultData;
	},
};
