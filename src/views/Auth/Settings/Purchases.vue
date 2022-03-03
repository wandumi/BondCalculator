<template>
	<div class="h-screen">
		<div class="py-10 lg:mx-20">
			<Purchases />
		</div>
	</div>
</template>

<script>
	import Purchases from "../../../components/Settings/Purchase/PurchaseTable.vue";
	export default {
		name: "PurchaseTable",
		components: {
			Purchases,
		},
	};
</script>
