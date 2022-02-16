import Api from "./Api";

export default {
	getCookie() {
		Api.get("/sanctum/csrf-cookie");
	},
};
