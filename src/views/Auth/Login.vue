<template>
	<div>
		<div class="py-10 lg:mx-20">
			<p class="mb-5">Login Page</p>
			<a href="" class="bg-gray-600 p-3 mt-3 text-white" @click.prevent="login"
				>Login</a
			>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "Login",
		methods: {
			async login() {
				await axios.get("http://127.0.0.1:8000/sanctum/crsf-cookie");
				await axios.post("http://127.0.0.1:8000/api/login", {
					email: "trace.graham@example.org",
					password: "password",
				});
				await axios.get("/user");
			},
		},
	};
</script>
