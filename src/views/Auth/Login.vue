<template>
	<div class="flex items-center justify-center h-screen">
		<div class="px-8 py-6 text-left bg-white shadow-lg">
			<h3 class="text-2xl font-bold text-center">Login to your account</h3>
			<form @submit.prevent="login">
				<div class="mt-4">
					<div>
						<label class="block" for="email">Email</label>
						<input
							type="text"
							placeholder="Email"
							class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							v-model="form.email"
						/>
						<span class="w-full text-red-600" v-if="errors.email">
							{{ errors.email[0] }}
						</span>
					</div>
					<div class="mt-4">
						<label class="block">Password</label>
						<input
							type="password"
							placeholder="Password"
							class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							v-model="form.password"
						/>
						<span class="text-red-600" v-if="errors.password">
							{{ errors.password[0] }}
						</span>
					</div>
					<div class="flex items-baseline justify-between">
						<button
							class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
						>
							Login
						</button>
						<a href="#" class="text-sm text-blue-600 hover:underline"
							>Forgot password?</a
						>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import User from "../../apis/User";
	export default {
		name: "Login",
		data() {
			return {
				form: {
					email: "",
					password: "",
				},
				errors: [],
			};
		},
		methods: {
			login() {
				User.login(this.form)
					.then((response) => {
						console.log(response);
						this.$router.push({ name: "Register" });
					})
					.catch((error) => {
						if (error.response.status === 422) {
							this.errors = error.response.data.errors;
						}
						console.log(error.response.data.errors);
						console.log(error.response.status);
					});
			},
		},
	};
</script>
