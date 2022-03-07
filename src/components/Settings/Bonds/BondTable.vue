<template>
	<div class="m-8">
		<div class="mb-10 flex justify-between">
			<h3 class="text-3xl font-semibold">Bond Settings</h3>
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
										Purchase price range
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Vat Amount
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										korbitec generation fee
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Electronic Fee
									</th>

									<th scope="col" class="relative px-6 py-3">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								<tr v-for="bond in this.bondData" :key="bond.id">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="ml-0">
												<div class="text-sm font-medium text-gray-900">
													{{ bond.id }}
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="ml-4">
												<div class="text-sm text-gray-500">-------</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="ml-4">
												<div class="text-sm text-gray-500">0.06</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="ml-4">
												<div class="text-sm text-gray-500">
													{{ bond.korbitec_gen_fee | money }}
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ bond.electronic_ins_fee | money }}
										</div>
									</td>

									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<a
											href="#"
											class="hover:text-white bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-sm"
											>Edit</a
										>
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
					<bondform />
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
	import bondform from "./BondForm.vue";
	import goback from "../../../components/Base/Goback.vue";
	export default {
		name: "bondTable",

		components: {
			bondform,
			goback,
		},

		created() {
			this.getBondData;
			this.bondData;
		},

		data() {
			return {
				bondSettings: {
					korbitec_gen_fee: "",
					electronic_ins_fee: "",
				},
				showModal: false,
			};
		},

		computed: {
			...mapActions({
				getBondData: "getBondData",
			}),
			...mapGetters({
				bondData: "getBonds",
				purchaseData: "getPurchase",
			}),
		},
	};
</script>
