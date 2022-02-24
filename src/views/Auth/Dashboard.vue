<template>
	<div class="h-screen">
		<div class="py-20 lg:mx-20">
			<div class="grid place-content-center pb-10">
				<h2 class="text-3xl text-center font-bold pb-5">Welcome</h2>
				<p class="text-md text-center font-normal"></p>

				<p class="text-md text-center font-normal" v-if="user.authenticated">
					{{ user.data.email }}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from "vuex";
	export default {
		name: "dashboard",
		mounted() {
			this.user;
		},
		computed: {
			...mapGetters({
				user: "getUser",
			}),
		},
	};
</script>
