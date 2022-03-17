<template>
	<div class="my-10 h-screen">
		<div class="py-10 lg:mx-20 mx-10 md:mx-15">
			<div class="mb-10 flex justify-between">
				<h3 class="text-3xl pl-0 font-semibold">View Bond Settings</h3>
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
					<div class="pb-5 font-medium text-xl">Update Bond Settings</div>
					<form @submit.prevent="onUpdate">
						<div class="grid grid-cols-1 gap-4">
							<!-- This is an example component -->
							<!-- <label class="block">
							<span class="text-gray-700">Purchase Price</span>
							<select
								class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							>
								<option>Choose a value</option>
								<option
									v-for="purchase in this.purchaseData"
									:key="purchase.id"
								>
									{{ purchase.start_amount }} - {{ purchase.end_amount }}
								</option>
							</select>
						</label> -->

							<!-- Korbitec -->
							<label class="block">
								<span class="text-gray-700">Korbitec Generation Fee</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Monetary value"
									v-model="form.korbitec_gen_fee"
									:class="{ 'border-red-500': errors.korbitec_gen_fee }"
								/>
								<span class="text-red-600" v-if="errors.korbitec_gen_fee">
									{{ errors.korbitec_gen_fee[0] }}
								</span>
							</label>

							<!-- Electronic Instruction Fee -->
							<label class="block">
								<span class="text-gray-700">Electronic Instruction Fee</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Monetary value"
									v-model.trim="form.electronic_ins_fee"
									:class="{ 'border-red-500': errors.electronic_ins_fee }"
								/>
								<span class="text-red-600" v-if="errors.electronic_ins_fee">
									{{ errors.electronic_ins_fee[0] }}
								</span>
							</label>

							<!-- Button -->

							<label class="block">
								<button
									class="p-3 mt-1 block w-full rounded-md text-white bg-green-600 hover:bg-green-500"
									type="submit"
								>
									Save
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
	import bond from "../../../apis/Bond";
	import { mapActions } from "vuex";

	export default {
		name: "bondDatails",
		components: {
			Goback,
		},
		created() {
			this.editBond();
		},
		data() {
			return {
				data: [],
				form: {
					korbitec_gen_fee: "",
					electronic_ins_fee: "",
				},
				errors: [],
			};
		},
		methods: {
			...mapActions({
				editBondData: "editBondData",
			}),
			editBond() {
				return bond.bondEdit(this.$route.params.id).then((response) => {
					console.log(response.data);
					this.form = response.data;
					this.data = response.data;
				});
			},
			onUpdate() {
				this.editBondData({
					payload: this.form,
					context: this,
				});
			},
		},
	};
</script>
