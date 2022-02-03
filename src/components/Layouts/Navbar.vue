<template>
	<div class="bg-gray-600 p-5">
		<div class="container mx-auto">
			<div class="lg:mx-20 flex justify-between items-center">
				<div class="">
					<img src="#" alt="User Logo" />
				</div>
				<div class="text-white flex">
					<router-link class="pr-2" to="/">Home</router-link>
					<router-link class="pr-2" to="/about">About</router-link>
					<router-link class="pr-2" to="/login">Login</router-link>
					<base-dropdown class="ml-2" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import BaseDropdown from "../Base/BaseDropdown.vue";

	export default {
		name: "Navbar",
		components: {
			BaseDropdown,
		},
	};
</script>
