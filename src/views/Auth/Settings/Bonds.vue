<template>
	<div class="h-screen">
		<div class="py-10 lg:mx-20">
			<Bonds />
		</div>
	</div>
</template>

<script>
	import Bonds from "../../../components/Settings/Bonds/BondTable.vue";
	export default {
		name: "BondTable",
		components: {
			Bonds,
		},
	};
</script>
