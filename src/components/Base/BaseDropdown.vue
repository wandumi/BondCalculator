<template>
	<div class="relative">
		<button
			@click="isOpen = !isOpen"
			class="elative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
		>
			<img
				class="h-full w-full object-cover"
				src="../../assets/images/munandi.jpg"
				alt="user profile"
			/>
		</button>
		<button
			tabindex="-1"
			v-if="isOpen"
			@click="isOpen = false"
			class="fixed top-0 right-0 bottom-0 left-0 h-full w-full cursor-default"
		></button>
		<div
			v-if="isOpen"
			class="absolute right-0 mt-2 w-48 bg-white rounded-lg py-2 shadow-xl"
		>
			<a
				href="#"
				class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
				>Profile</a
			>
			<router-link
				class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
				to="/Settings"
				>Account Settings</router-link
			>
			<a
				href="#"
				@click.prevent="logout"
				class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
				>Sign Out</a
			>
		</div>
	</div>
</template>
<script>
	export default {
		name: "dropdown",
		data() {
			return {
				isOpen: false,
			};
		},
		created() {
			const handleEscape = (e) => {
				if (e.key === "Esc" || e.key === "Escape") {
					this.isOpen = false;
				}
			};

			document.addEventListener("keydown", handleEscape);

			this.$once("hook:beforeDestroy", () => {
				document.removeEventListener("keydown", handleEscape);
			});
		},
		methods: {},
	};
</script>
