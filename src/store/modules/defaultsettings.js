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
		state.defaultData.unshift(defaults);
	},
	DELETE_DEFAULT_DATA(state, common) {
		let defaults = state.defaultData.filter((d) => d.id != common);
		state.defaultData = defaults;
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
				context.errors = error.response.data.errors;
			});
	},
	deleteDefaults({ commit }, value) {
		return defaults.defaultDelete(value).then((response) => {
			if (response.status == 200 || response.status == 204) {
				commit("DELETE_DEFAULT_DATA", value.id);
			}
		});
	},
};

export const getters = {
	// get the defaults data
	getDefaults(state) {
		return state.defaultData;
	},
};
