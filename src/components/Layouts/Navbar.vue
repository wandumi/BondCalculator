<template>
	<div class="bg-gray-600 p-5">
		<div class="container mx-auto">
			<div class="lg:mx-20 flex justify-between items-center">
				<div class="">
					<img src="#" alt="User Logo" />
				</div>
				<div class="text-white flex">
					<span class="flex" v-if="!user.authenticated">
						<router-link class="pr-2" :to="{ name: 'Home' }">Home</router-link>
						<router-link class="pr-2" :to="{ name: 'About' }"
							>About</router-link
						>
						<router-link class="pr-2" :to="{ name: 'Login' }"
							>Login</router-link
						>
						<router-link class="pr-2" :to="{ name: 'Register' }"
							>Register</router-link
						>
					</span>
					<!-- Login in users -->
					<span class="flex" v-if="user.authenticated">
						<base-dropdown class="ml-2" />
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import BaseDropdown from "../Base/BaseDropdown.vue";
	import { mapGetters } from "vuex";

	export default {
		name: "Navbar",

		components: {
			BaseDropdown,
		},
		computed: {
			...mapGetters({
				user: "getUser",
			}),
		},
	};
</script>
