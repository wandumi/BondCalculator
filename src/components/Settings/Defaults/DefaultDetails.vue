<template>
	<div class="my-10 h-screen">
		<div class="py-10 lg:mx-20 mx-10 md:mx-15">
			<div class="mb-10 flex justify-between">
				<h3 class="text-3xl pl-0 font-semibold">View Default Settings</h3>
				<div>
					<goback />
				</div>
			</div>
			<div class="grid lg:grid-cols-3 md:grid-cols-1 gap-8 mb-10">
				<div class="lg:col-span-2 md:col-span-1">
					{{ this.data }}

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
										Value
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								<tr v-for="(purchase, index) in this.data" :key="purchase.id">
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
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div class="mb-10">
					<div class="pb-5 font-medium text-xl">Update Default Settings</div>
					<form @submit.prevent="onUpdate">
						<div class="grid grid-cols-1 gap-4">
							<!-- Vat Amount -->
							<label class="block">
								<span class="text-gray-700">Vat Amount</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter deed office fee"
									v-model.number="form.vat_amount"
									:class="{ 'border-red-500': errors.vat_amount }"
								/>
								<span class="text-red-600" v-if="errors.vat_amount">
									{{ errors.vat_amount[0] }}
								</span>
							</label>

							<!-- Search Amount -->
							<label class="block">
								<span class="text-gray-700">Search Fee</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter deed office fee"
									v-model.number="form.search_fee"
									:class="{ 'border-red-500': errors.search_fee }"
								/>
								<span class="text-red-600" v-if="errors.search_fee">
									{{ errors.search_fee[0] }}
								</span>
							</label>

							<!-- Deeds Office -->
							<label class="block">
								<span class="text-gray-700">Deeds Office</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter deed office fee"
									v-model.number="form.deeds_office"
									:class="{ 'border-red-500': errors.deeds_office }"
								/>
								<span class="text-red-600" v-if="errors.deeds_office">
									{{ errors.deeds_office[0] }}
								</span>
							</label>

							<!-- Post Petties -->
							<label class="block">
								<span class="text-gray-700">Post Petties</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter deed office fee"
									v-model.number="form.post_petties"
									:class="{ 'border-red-500': errors.post_petties }"
								/>
								<span class="text-red-600" v-if="errors.post_petties">
									{{ errors.post_petties[0] }}
								</span>
							</label>

							<!-- Tarrif Fee -->
							<label class="block">
								<span class="text-gray-700">Tarrif Fee</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter tarrfi fee"
									v-model.number="form.tarrif_fee"
									:class="{ 'border-red-500': errors.tarrif_fee }"
								/>
								<span class="text-red-600" v-if="errors.tarrif_fee">
									{{ errors.electronic_gen_fee[0] }}
								</span>
							</label>

							<!-- Button -->
							<label class="block">
								<button
									class="p-3 mt-1 block w-full rounded-md text-white bg-green-600 hover:bg-green-500"
									type="submit"
								>
									Update
								</button>
							</label>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Goback from "../../Base/Goback.vue";
	import defaults from "../../../apis/Defaults";
	import { mapActions } from "vuex";

	export default {
		name: "defaultsDatails",
		components: {
			Goback,
		},
		created() {
			this.editDefaults();
		},
		data() {
			return {
				data: [],
				form: {
					vat_amount: "",
					deeds_office: "",
					tarrif_fee: "",
					post_petties: "",
					search_fee: "",
				},
				errors: [],
			};
		},
		methods: {
			...mapActions({
				editDefaultData: "editDefaults",
			}),
			editDefaults() {
				return defaults.defaultEdit(this.$route.params.id).then((response) => {
					this.form = response.data;
					this.data = response.data;
				});
			},
			onUpdate() {
				this.editDefaultData({
					payload: this.form,
					context: this,
				});
			},
		},
	};
</script>
