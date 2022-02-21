import User from "../../apis/User";
import axios from "axios";
import router from "../../router";

export const namespace = true;

export const state = {
	// authentication
	user: {
		authenticated: false,
		token: null,
		data: null,
	},
};

export const mutations = {
	// get a token for the logged in user from the storage
	setUserToken(rootState, payload) {
		rootState.user.token = payload;
		axios.defaults.headers.common["Authorization"] = `Bearer ${payload}`;
	},

	/**set the log in token */
	setLoggedIn(rootState, payload) {
		rootState.user.authenticated = payload;
	},

	setUserData(rootState, payload) {
		rootState.user.data = payload;
	},

	/**set the logout empty */
	setLogout(rootState, payload) {
		rootState.user = payload;
	},

	/**Set the user */
	setUser(rootState, payload) {
		rootState.userData = payload;
	},

	/** set the logged in user data */
	setUserData(rootState, data) {
		rootState.user.data = data;
		// localStorage.setItem("user", JSON.stringify(data.name));
	},
};

export const actions = {
	/** login the user */
	loginUser({ commit, dispatch }, { payload, context }) {
		return User.login(payload)
			.then((response) => {
				commit("setUserToken", response.data.jwt);
				commit("setLoggedIn", true);

				dispatch("getUser");

				router.push({ name: "Dashboard" });
			})
			.catch((error) => {
				console.log(error);
				context.errors = error.response.data.errors;
			});
	},

	/** get the register user in the system */
	registerUser({ commit }, { payload, context }) {
		return User.register(payload)
			.then((response) => {
				console.log("Submitted", response.data);
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
			});
	},

	/** get the logged in user data */
	getUser({ commit, dispatch }) {
		return axios
			.get("/api/user")
			.then((response) => {
				commit("setUserData", response.data);
			})
			.catch((errors) => {
				dispatch("getLogout");
				console.log("There was and error" + errors);
			});
	},

	getLogout({ commit }) {
		commit("setUserToken", "");
		commit("setLoggedIn", false);
		commit("setUserData", {});

		localStorage.setItem("isLoggedIn", false);
		router.push("/");
	},
};

export const getters = {
	/**get the user */
	getUser(rootState) {
		return rootState.user;
	},
};
