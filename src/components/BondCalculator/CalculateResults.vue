<template>
	<div>
		<div class="grid grid-cols-1 gap-2 bg-gray-600 p-4 text-white">
			<!-- First Row -->

			<!-- first Row -->
			<div class="my-5">
				<div class="flex justify-between">
					<h3 class="font-bold">Total transfer costs</h3>
					<p class="font-bold" v-if="this.getTotalPurchase">
						{{ this.getTotalPurchase | moneyCurrency }}
					</p>
					<p class="font-bold" v-else>R 0.00</p>
				</div>
				<div class="flex justify-between">
					<h3>Transfer duty</h3>
					<p v-if="this.getTransferDuty">
						{{ this.getTransferDuty | moneyCurrency }}
					</p>
					<p v-else>R 0.00</p>
				</div>
				<div class="flex justify-between">
					<h3>Vat Amount</h3>
					<p v-if="this.getVatCharge">
						{{ this.getVatCharge | moneyCurrency }}
					</p>
					<p v-else>R 0.00</p>
				</div>
			</div>
			<!-- Second Row -->
			<div class="mb-5">
				<div class="flex justify-between">
					<h3 class="font-bold">Total bond costs</h3>
					<p class="font-bold" v-if="this.getBondTotal">
						{{ this.getBondTotal | moneyCurrency }}
					</p>
					<p v-else>R 0.00</p>
				</div>
				<div class="flex justify-between">
					<h3>Vat Amount</h3>
					<p v-if="this.getVatBond">
						{{ this.getVatBond | moneyCurrency }}
					</p>
					<p v-else>R 0.00</p>
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
				getVatBond: "getVatBond",
				getBondTotal: "getBondTotal",
			}),
		},
	};
</script>
