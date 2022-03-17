<template>
	<div class="m-8">
		<div class="mb-10 flex justify-between">
			<h3 class="text-3xl font-semibold">TransferDuty Settings</h3>
			<div>
				<goback />
				<button
					@click="showModal = true"
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
										Rates
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Description
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
								<tr v-for="transfer in this.transferData" :key="transfer.id">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="text-sm font-medium text-gray-900">
												{{ transfer.id }}
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="text-sm text-gray-500">
												{{ transfer.start_amount | money }}
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ transfer.end_amount | money }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ transfer.rates }}
										</div>
									</td>

									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div class="text-sm text-gray-500">
											{{ transfer.description }}
										</div>
									</td>

									<td
										class="flex align-center px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											:to="{
												name: 'transfer_details',
												params: { id: transfer.id },
											}"
											class="hover:text-white mr-2 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-sm"
											>Edit</router-link
										>

										<span class="m-1"></span>
										<button
											@click="deleteTransfer(transfer)"
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
					<transfer-form />
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
	import Goback from "../../Base/Goback.vue";
	import transferForm from "./TransferForm.vue";
	import superModal from "../../Base/superModal.vue";

	export default {
		name: "transferTable",

		components: {
			transferForm,
			Goback,
			superModal,
		},

		created() {
			this.transferDuty;
		},

		data() {
			return {
				showModal: false,
			};
		},
		methods: {
			deleteTransfer(transfers) {
				let response = confirm(
					`Are you sure you want to delete ${transfers.id}`
				);
				if (response) {
					this.$store.dispatch("deleteTransfer", transfers);
				}
			},
		},
		computed: {
			...mapActions({
				transferDuty: "getTransferData",
			}),
			...mapGetters({
				transferData: "getTransfer",
			}),
		},
	};
</script>
