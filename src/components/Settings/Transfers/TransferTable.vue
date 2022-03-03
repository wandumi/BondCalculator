<template>
	<div class="">
		<div class="py-10 mb-20 lg:mx-20">
			<div class="mb-10 pt-20 flex lg:justify-between justify-between">
				<h3 class="text-3xl font-semibold">TransferDuty Settings</h3>
				<div>
					<router-link to="#" class="bg-black p-2 text-center text-white"
						>Add</router-link
					>
				</div>
			</div>
			<div class="mb-10">
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:col-span-2">
					<div
						class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
					>
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

										<th scope="col" class="relative px-6 py-3">
											<span class="sr-only">Edit</span>
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

										<td
											class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
										>
											<div class="text-sm text-gray-500">
												{{ transfer.description }}
											</div>
										</td>

										<td
											class="flex align-center px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
										>
											<a
												href="#"
												class="hover:text-white mr-2 bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-sm"
												>Edit</a
											>

											<a
												href="#"
												class="hover:text-white bg-red-600 hover:bg-red-500 text-white p-2 rounded-sm"
												>Delete</a
											>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<!-- <div>
				<div>
					<h3 class="text-2xl font-medium mb-8">Add Transfer Duty</h3>
				</div>
				<div>
					<transferForm />
				</div>
			</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	import transferForm from "./TransferForm.vue";

	export default {
		name: "transferTable",

		components: {
			transferForm,
		},

		created() {
			this.transferDuty;
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
