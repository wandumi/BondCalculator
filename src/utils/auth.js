export function isLoggedIn() {
	return localStorage.getItem("isLoggedIn") == true;
}

export function LogIn() {
	localStorage.setItem("isLoggedIn", true);
}

export function LogOut() {
	localStorage.setItem("isLoggedIn", false);
}
