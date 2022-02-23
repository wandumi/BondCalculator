import User from "../../apis/User";
import axios from "axios";
import router from "../../router";
import { reject } from "lodash";

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
	setUserToken(state, token) {
		state.user.token = token;
	},

	/**set the log in token */
	setAuth(rootState, payload) {
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
};

export const actions = {
	/** login the user */
	loginUser({ commit, dispatch }, { payload, context }) {
		return User.login(payload)
			.then((response) => {
				const token = response.data.jwt;

				localStorage.setItem("token", token);
				commit("setUserToken", token);
				dispatch("getUserData");

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
				router.push({ name: "Login" });
			})
			.catch((error) => {
				context.errors = error.response.data.errors;
			});
	},

	/** get the logged in user data */
	getUserData({ commit, dispatch }) {
		return axios
			.get("/api/user")
			.then((response) => {
				commit("setUserData", response.data);
				commit("setAuth", true);
			})
			.catch(() => {
				dispatch("getLogout");
			});
	},

	getLogout({ commit }) {
		return axios.post("/api/logout").then(() => {
			commit("setUserToken", "");
			commit("setAuth", false);
			commit("setUserData", {});

			localStorage.removeItem("token");
			router.replace({ name: "Login" });
		});
	},
};

export const getters = {
	/**get the user */
	getUser(rootState) {
		return rootState.user;
	},

	getLoggedIn(rootState) {
		return rootState.authenticated;
	},
};
