<template>
	<div class="m-8">
		<div class="mb-10 flex justify-between">
			<h3 class="text-3xl font-semibold">Default Settings</h3>
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
										Vat Amount
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Search Fee
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Deeds Office
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Post Petties
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Tarrif Fee
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
								<tr v-for="common in this.defaultData" :key="common.id">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="ml-0">
												<div class="text-sm font-medium text-gray-900">
													{{ common.id }}
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="text-sm text-gray-500">
												{{ common.vat_amount }}
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ common.search_fee }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ common.deeds_office }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ common.post_petties }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ common.tarrif_fee }}
										</div>
									</td>

									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											:to="{
												name: 'default_details',
												params: { id: common.id },
											}"
											class="hover:text-white bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-sm"
											>Edit</router-link
										>
										<span class="m-1"></span>
										<button
											@click="deleteDefault(common)"
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
					<defaultform />
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
	import defaultform from "./DefaultsForm.vue";
	import { mapActions, mapGetters } from "vuex";
	import Goback from "../../Base/Goback.vue";
	export default {
		name: "defaultSettings",
		components: {
			defaultform,
			Goback,
		},
		data() {
			return {
				showModal: false,
			};
		},
		created() {
			this.defaultData;
			this.getDefaultData;
		},
		methods: {
			deleteDefault(common) {
				let response = confirm(`Are you sure you want to delete ${common.id}`);
				if (response) {
					this.$store.dispatch("deleteDefaults", common);
				}
			},
		},

		computed: {
			...mapActions({
				getDefaultData: "getDefaultData",
			}),
			...mapGetters({
				defaultData: "getDefaults",
			}),
		},
	};
</script>
