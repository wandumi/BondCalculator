<template>
	<div class="max-w-lg mx-auto mt-32 h-screen">
		<div class="px-10 py-6 text-left bg-white shadow-xl">
			<h3 class="text-2xl text-center">Register account</h3>
			<form @submit.prevent="Submit">
				<div class="mt-4">
					<div>
						<label class="block" for="email">Username</label>
						<input
							type="text"
							placeholder="Username"
							class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							v-model="form.name"
						/><span class="text-red-600" v-if="errors.name">
							{{ errors.name[0] }}
						</span>
					</div>
					<div>
						<label class="block" for="email">Email</label>
						<input
							type="email"
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
					<div class="mt-4">
						<label class="block">Retype Password</label>
						<input
							type="password"
							placeholder="Password"
							class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							v-model="form.password_confirm"
						/>
						<span class="text-red-600" v-if="errors.password_confirm">
							{{ errors.password_confirm[0] }}
						</span>
					</div>

					<button
						class="w-full px-3 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
					>
						Register
					</button>

					<div class="mt-3">
						<div>
							<span>Have an account </span>
							<router-link
								:to="{ name: 'Login' }"
								class="text-blue-600 hover:underline"
								>Login</router-link
							>
						</div>
						<div>
							<a href="#" class="text-sm text-blue-600 hover:underline"
								>Forgot password?</a
							>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "Register",
		components: {},
		data() {
			return {
				form: {
					name: "",
					email: "",
					password: "",
					password_confirm: "",
				},
				errors: [],
			};
		},
		methods: {
			...mapActions({
				register: "registerUser",
			}),
			// register() {
			// 	User.register(this.form)
			// 		.then((response) => {
			// 			console.log(response);
			// 			localStorage.setItem("auth", "true");
			// 			this.$router.push({ name: "Login" });
			// 		})
			// 		.catch((error) => {
			// 			if (error.response.status === 422) {
			// 				this.errors = error.response.data.errors;
			// 			}
			// 			console.log(error);
			// 		});
			// },
			Submit() {
				this.register({
					payload: this.form,
					context: this,
				});
			},
		},
	};
</script>
