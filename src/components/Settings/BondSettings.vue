<template>
	<div>
		<div class="mb-10">
			<h3 class="text-3xl font-semibold">Bond Settings</h3>
		</div>
		<div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:col-span-2">
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
								<tr v-for="bond in bondData" :key="bond.id">
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

			<div>
				<div>
					<h3 class="text-2xl font-medium mb-8">Bond Parameters</h3>
				</div>
				<div>
					<form @submit.prevent="onSubmit">
						<div class="mb-7">
							<p v-if="$v.$anyError" class="errorMessage">
								Please fill out the required fields
							</p>
						</div>
						<div class="grid grid-cols-1 gap-4">
							<!-- This is an example component -->
							<label class="block">
								<span class="text-gray-700">Purchase Price</span>
								<select
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
								>
									<option>Choose a value</option>
									<option v-for="purchase in purchaseData" :key="purchase.id">
										{{ purchase.start_amount }} - {{ purchase.end_amount }}
									</option>
								</select>
							</label>

							<!-- Korbitec -->
							<label class="block">
								<span class="text-gray-700">Korbitec Generation Fee</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Monetary value"
									v-model="bondSettings.korbitec_gen_fee"
									v-model.trim="$v.bondSettings.korbitec_gen_fee.$model"
									@blur="$v.bondSettings.korbitec_gen_fee.$touch()"
									:class="{ error: $v.bondSettings.korbitec_gen_fee.$error }"
								/>
								<div v-if="$v.bondSettings.korbitec_gen_fee.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.bondSettings.korbitec_gen_fee.required"
									>
										Please enter Post Petties
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.bondSettings.korbitec_gen_fee.minLength"
									>
										Name must have at least
										{{ $v.bondSettings.korbitec_gen_fee.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.bondSettings.korbitec_gen_fee.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Electronic Instruction Fee -->
							<label class="block">
								<span class="text-gray-700">Electronic Instruction Fee</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Monetary value"
									v-model.trim="$v.bondSettings.electronic_ins_fee.$model"
									@blur="$v.bondSettings.electronic_ins_fee.$touch()"
									:class="{ error: $v.bondSettings.electronic_ins_fee.$error }"
								/>
								<div v-if="$v.bondSettings.electronic_ins_fee.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.bondSettings.electronic_ins_fee.required"
									>
										Please enter a Search Fee
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.bondSettings.electronic_ins_fee.minLength"
									>
										Name must have at least
										{{
											$v.bondSettings.electronic_ins_fee.$params.minLength.min
										}}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.bondSettings.electronic_ins_fee.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Button -->
							<label class="block">
								<button
									class="p-3 mt-1 block w-full rounded-md text-white bg-gray-600"
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
	// import BaseInput from "../Base/BaseInput.vue";
	import {
		required,
		minLength,
		numeric,
		decimal,
	} from "vuelidate/lib/validators";
	import axios from "axios";
	export default {
		name: "bondSettings",

		created() {
			axios
				.get("http://127.0.0.1:8000/api/bond_settings")
				.then((response) => {
					this.bondData = response.data.data;
					console.log(response.data.data);
				})
				.catch((errors) => {
					console.log("There was and error" + errors);
				});
			axios
				.get("http://127.0.0.1:8000/api/purchase_settings")
				.then((response) => {
					this.purchaseData = response.data.data;
					console.log(response.data.data);
				})
				.catch((errors) => {
					console.log("There was and error" + errors);
				});
		},

		data() {
			return {
				bondData: "",
				purchaseData: "",
				bondSettings: {
					korbitec_gen_fee: "",
					electronic_ins_fee: "",
				},
			};
		},
		validations: {
			bondSettings: {
				korbitec_gen_fee: {
					required,
					minLength: minLength(3),
					decimal,
				},
				electronic_ins_fee: {
					required,
					minLength: minLength(3),
					decimal,
				},
			},
		},
		methods: {
			onSubmit() {
				this.$v.$touch();
				if (!this.$v.$invalid) {
					axios
						.post("http://127.0.0.1:8000/api/bond_settings", this.bondSettings)
						.then((response) => {
							// Reload the data value after the form submit
							this.bondData.push(response.data);
							console.log(
								"The file saved to the database" + response.data.data
							);
						})
						.catch((errors) => {
							console.log("There was and error" + errors);
						});
				} else {
					// Do the submit here to the database
				}
			},
		},
	};
</script>

<style scoped>
	.error {
		border: red solid 2px;
	}

	.errorMessage {
		background: red;
		margin-top: 0.5rem;
		padding: 0.8rem;
		color: #fff;
	}
</style>
