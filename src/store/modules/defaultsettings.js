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

	// save default Data
	SET_DEFAULT_DATA(state, defaults) {
		state.defaultData.unshift(defaults);
	},

	//edit default data
	EDIT_DEFAULT_DATA(state, defaults) {
		state.defaultData.forEach((d) => {
			if (d.id == defaults.id) {
				d = defaults;
			}
		});
	},

	// Remove default data
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
		return defaults
			.defaultPost(payload)
			.then((response) => {
				commit("SET_DEFAULT_DATA", payload);
				return Promise.resolve();
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
			});
	},

	//edit the default
	editDefaults({ commit }, { payload, context }) {
		return defaults
			.defaultUpdate(payload)
			.then((response) => {
				commit("EDIT_DEFAULT_DATA", payload);
				return Promise.resolve();
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
			});
	},

	// remove the delete
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
