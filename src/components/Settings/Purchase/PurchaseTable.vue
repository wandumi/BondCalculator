<template>
	<div class="m-8">
		<div class="mb-10 flex justify-between">
			<h3 class="text-3xl pl-0 font-semibold">Purchase Price Settings</h3>
			<div>
				<goback />
				<button
					@click="addPurchase()"
					to="#"
					class="bg-green-600 p-2 text-center text-white ml-2"
				>
					Add
				</button>
			</div>
		</div>
		<div>
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-14 lg:col-span-2">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div
						class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
					>
						<table class="min-w-full divide-y divide-gray-200">
							<thead class="bg-gray-50">
								<tr>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										ID
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Start amount
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										End amount
									</th>

									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Value Number
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Rate Applications
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Korbitec generation fee
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Actions
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								<tr
									v-for="(purchase, index) in this.purchaseData"
									:key="purchase.id"
								>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="text-sm font-medium text-gray-900">
												{{ index + 1 }}
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="text-sm text-gray-500">
												{{ purchase.start_amount | money }}
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ purchase.end_amount | money }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ purchase.vat_amount | money }}
										</div>
									</td>

									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div class="text-sm text-gray-500">
											{{ purchase.rate_applications | money }}
										</div>
									</td>

									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div class="text-sm text-gray-500">
											{{ purchase.korbitec_gen_fee | money }}
										</div>
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											:to="{
												name: 'purchase_details',
												params: { id: purchase.id },
											}"
											class="hover:text-white bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-sm"
										>
											Edit
										</router-link>
										<span class="m-1"></span>
										<button
											@click="deletePurchase(purchase)"
											class="hover:text-white bg-red-600 hover:bg-red-700 text-white p-2 rounded-sm"
										>
											Delete
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div
			v-if="showModal"
			class="bg-gray-800 bg-opacity-40 fixed inset-0 flex items-center justify-center"
		>
			<div class="fixed insert-0 z-10" @click="showModal = false"></div>
			<div class="bg-white shadow rounded-md px-6 py-4 max-w-lg w-full z-20">
				<div class="my-2">
					<PurchaseForm />
				</div>
				<div class="mt-2">
					<button
						class="bg-gray-600 hover:bg-gray-800 text-white p-3 rounded w-full"
						@click="showModal = false"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import PurchaseForm from "./PurchaseForm.vue";
	import Goback from "../../Base/Goback.vue";

	export default {
		name: "purchaseData",
		components: {
			PurchaseForm,
			Goback,
		},

		created() {
			this.getPurchaseData;
			this.purchaseData;
		},

		data() {
			return {
				form: {
					start_amount: "",
					end_amount: "",
					vat_amount: "",
					rate_applications: "",
					korbitec_gen_fee: "",
				},
				errors: [],
				showModal: false,
				modal: null,
			};
		},
		methods: {
			...mapActions({
				purchase: "setPurchaseData",
			}),

			onSubmit() {
				this.purchase({
					payload: this.form,
					context: this,
				});
			},

			addPurchase() {
				this.showModal = true;
				this.modal = "add";
			},

			deletePurchase(purchase) {
				let response = confirm(
					`Are you sure you want to delete ${purchase.id}`
				);
				if (response) {
					this.$store.dispatch("deletePurchase", purchase);
				}
			},
		},

		computed: {
			...mapActions({
				getPurchaseData: "getPurchaseData",
			}),
			...mapGetters({
				purchaseData: "getPurchase",
			}),
		},
	};
</script>
