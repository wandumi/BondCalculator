<template>
	<div class="mt-40 h-screen">
		<div class="max-w-lg mx-auto">
			<div class="p-10 m-10 text-left bg-white shadow-xl">
				<div class="bg-red-600 text-white" v-if="errors.message">
					<p class="text-white p-3 mb-2">{{ errors.root }}</p>
				</div>
				<h3 class="text-2xl text-center">Login to your account</h3>
				<form @submit.prevent="Submit">
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

						<button
							class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
						>
							Login
						</button>

						<div class="mt-3">
							<div>
								<span>No account yet? </span>
								<router-link
									:to="{ name: 'Register' }"
									class="text-blue-600 hover:underline"
									>Register</router-link
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
	</div>
</template>

<script>
	import { mapActions } from "vuex";

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
			...mapActions({
				login: "loginUser",
				// "login",
				// ["loginUser"]
			}),

			Submit() {
				this.login({
					payload: this.form,
					context: this,
				});
			},
		},
	};
</script>
