<template>
	<div>
		<div class="grid grid-cols-1 gap-2 bg-gray-600 p-4 text-white">
			<!-- First Row -->
			<div class="mt-5 mb-5 flex justify-between">
				<h3 class="font-bold">Total cost</h3>
				<p>R 0.00</p>
			</div>
			<!-- Second Row -->
			<div class="mb-5">
				<div class="flex justify-between">
					<h3 class="font-bold">Total bond costs</h3>
					<p>R 0.00</p>
				</div>
				<div class="flex justify-between">
					<h3>Bond registration cost</h3>
					<p>R 0.00</p>
				</div>
				<div class="flex justify-between">
					<h3>Bond deeds office fees</h3>
					<p>R 0.00</p>
				</div>
				<div class="flex justify-between">
					<h3>Post, petties FICA, other fees</h3>
					<p>R 0.00</p>
				</div>
				<div class="flex justify-between">
					<h3>Bank initiation fee</h3>
					<p>R 0.00</p>
				</div>
			</div>
			<!-- Third Row -->
			<div class="mb-5">
				<div class="flex justify-between">
					<h3 class="font-bold">Total transfer costs</h3>
					<p>{{ this.getTotalPurchase ? this.getTotalPurchase : "R 0.00" }}</p>
				</div>
				<div class="flex justify-between">
					<h3>Transfer duty</h3>
					<p>{{ this.getTransferDuty ? this.getTransferDuty : "R 0.00" }}</p>
				</div>
				<div class="flex justify-between">
					<h3>Vat Amount</h3>
					<p>{{ this.getVatCharge ? this.getVatCharge : "R 0.00" }}</p>
				</div>
			</div>
			<!-- end -->
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: "CalculationResults",

		computed: {
			...mapGetters({
				getTotalPurchase: "getTotalPurchase",
				getVatCharge: "getVatCharge",
				getTransferDuty: "getTransferDuty",
			}),
		},
	};
</script>
