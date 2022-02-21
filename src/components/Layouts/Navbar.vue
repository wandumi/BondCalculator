<template>
	<div class="bg-gray-600 p-5">
		<div class="container mx-auto">
			<div class="lg:mx-20 flex justify-between items-center">
				<div class="">
					<router-link class="pr-2 flex align-center" to="/">
						<img src="#" alt="User Logo" />
					</router-link>
				</div>
				<div class="text-white flex">
					<span class="flex" v-if="!user.authenticated">
						<router-link class="pr-2" :to="{ name: 'Home' }">Home</router-link>
						<router-link class="pr-2" :to="{ name: 'About' }"
							>About</router-link
						>
						<router-link class="pr-2" :to="{ name: 'Login' }"
							>Sign in</router-link
						>
						<!-- <router-link class="pr-2" :to="{ name: 'Register' }"
							>Register</router-link
						> -->
					</span>
					<!-- Login in users -->
					<span class="flex items-center" v-if="user.authenticated">
						<router-link class="pr-2" :to="{ name: 'Dashboard' }"
							>Dashboard</router-link
						>
						<base-dropdown class="ml-2" />
					</span>
					<!-- <span class="bg-white text-black px-1">
						{{ this.$store.state.user.user.authenticated }}
					</span> -->
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
		mounted() {
			this.user;
		},

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
