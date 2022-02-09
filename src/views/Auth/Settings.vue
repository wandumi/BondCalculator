<template>
	<div>
		<div class="py-10 lg:mx-20">
			<bond-settings />
			<purchase-settings />
			<default-settings />
			<transfer-duty />
		</div>
	</div>
</template>

<script>
	import BondSettings from "../../components/Settings/BondSettings.vue";
	import PurchaseSettings from "../../components/Settings/Purchaseprice.vue";
	import DefaultSettings from "../../components/Settings/DefaultSettings.vue";
	import TransferDuty from "../../components/Settings/TransferDuty.vue";

	export default {
		name: "Settings",
		components: {
			BondSettings,
			PurchaseSettings,
			DefaultSettings,
			TransferDuty,
		},
	};
</script>
