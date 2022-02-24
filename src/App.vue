<template>
	<div class="min-h-screen grid grid-rows-[auto,1fr,auto]">
		<!-- Navbar -->
		<navbar />

		<!-- Content -->
		<div class="container mx-auto">
			<router-view />
			<!-- <p>this is my store {{ this.$store.state.user.user.authenticated }}</p>
			<p>this are getters {{ this.$store.getters.getUser.authenticated }}</p> -->
		</div>

		<!-- Footer -->
		<footerBar />
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from "@/components/HelloWorld.vue";
	import navbar from "./components/Layouts/Navbar.vue";
	import footerBar from "./components/Layouts/Footerbar.vue";

	export default {
		components: {
			navbar,
			footerBar,
		},
		name: "App",
	};
</script>
