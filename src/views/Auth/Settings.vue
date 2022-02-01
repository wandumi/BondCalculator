<template>
	<div>
		<div class="py-10 lg:mx-20">
			<bond-settings />
			<purchase-settings />
			<default-settings />
		</div>
	</div>
</template>

<script>
	import BondSettings from "../../components/Settings/BondSettings.vue";
	import PurchaseSettings from "../../components/Settings/Purchaseprice.vue";
	import DefaultSettings from "../../components/Settings/DefaultSettings.vue";

	export default {
		name: "Settings",
		components: {
			BondSettings,
			PurchaseSettings,
			DefaultSettings,
		},
	};
</script>
