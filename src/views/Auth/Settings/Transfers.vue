<template>
	<div class="h-screen">
		<div class="py-10 lg:mx-20">
			<transfers-duty />
		</div>
	</div>
</template>

<script>
	import TransfersDuty from "../../../components/Settings/Transfers/TransferTable.vue";

	export default {
		name: "Transfers",
		components: {
			TransfersDuty,
		},
	};
</script>
