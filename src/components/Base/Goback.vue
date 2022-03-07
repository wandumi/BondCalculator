<template>
	<span>
		<button class="bg-black p-2 text-white" @click="goBack">Go Back</button>
	</span>
</template>
<script>
	export default {
		name: "Goback",
		methods: {
			goBack() {
				return this.$router.go(-1);
			},
		},
	};
</script>
