<template>
	<div class="mt-20">
		<div class="mb-10">
			<h3 class="text-3xl font-semibold">Purchase Price Settings</h3>
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
										Rate Applications
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Korbitec generation fee
									</th>

									<th scope="col" class="relative px-6 py-3">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								<tr v-for="transfer in transferData" :key="transfer.id">
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
												{{ transfer.start_amount }}
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-500">
											{{ transfer.end_amount }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div class="text-sm text-gray-500">
											{{ transfer.rate_applications }}
										</div>
									</td>

									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div class="text-sm text-gray-500">
											{{ transfer.korbitec_gen_fee }}
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
					<h3 class="text-2xl font-medium mb-8">Purchase Price</h3>
				</div>
				<div>
					<form @submit.prevent="onSubmit">
						<div class="mb-7">
							<p v-if="$v.$anyError" class="errorMessage">
								Please fill out the required fields
							</p>
						</div>
						<div class="grid grid-cols-1 gap-4">
							<!-- Start Amount -->
							<label class="block">
								<span class="text-gray-700">Start Amount</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Start value of the amount"
									v-model.trim="$v.transferSettings.start_amount.$model"
									@blur="$v.transferSettings.start_amount.$touch()"
									:class="{ error: $v.transferSettings.start_amount.$error }"
								/>
								<div v-if="$v.transferSettings.start_amount.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferSettings.start_amount.required"
									>
										Please enter a Start Amount
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferSettings.start_amount.minLength"
									>
										Name must have at least
										{{ $v.transferSettings.start_amount.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.transferSettings.start_amount.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- End Amount -->
							<label class="block">
								<span class="text-gray-700">End Amount</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="End value of the amount"
									v-model.trim="$v.transferSettings.end_amount.$model"
									@blur="$v.transferSettings.end_amount.$touch()"
									:class="{ error: $v.transferSettings.end_amount.$error }"
								/>
								<div v-if="$v.transferSettings.end_amount.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferSettings.end_amount.required"
									>
										Please enter a End Amount
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferSettings.end_amount.minLength"
									>
										Name must have at least
										{{ $v.transferSettings.end_amount.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.transferSettings.end_amount.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Rate Applications -->
							<label class="block">
								<span class="text-gray-700">Rate Applications</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Start value of the amount"
									v-model.trim="$v.transferSettings.rate_applications.$model"
									@blur="$v.transferSettings.rate_applications.$touch()"
									:class="{
										error: $v.transferSettings.rate_applications.$error,
									}"
								/>
								<div v-if="$v.transferSettings.rate_applications.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferSettings.rate_applications.required"
									>
										Please enter a Start Amount
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferSettings.rate_applications.minLength"
									>
										Name must have at least
										{{
											$v.transferSettings.rate_applications.$params.minLength
												.min
										}}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.transferSettings.rate_applications.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Korbitec -->
							<label class="block">
								<span class="text-gray-700">Korbitec generation fee</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Start value of the amount"
									v-model.trim="$v.transferSettings.korbitec_gen_fee.$model"
									@blur="$v.transferSettings.korbitec_gen_fee.$touch()"
									:class="{
										error: $v.transferSettings.korbitec_gen_fee.$error,
									}"
								/>
								<div v-if="$v.transferSettings.korbitec_gen_fee.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferSettings.korbitec_gen_fee.required"
									>
										Please enter a Start Amount
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferSettings.korbitec_gen_fee.minLength"
									>
										Name must have at least
										{{
											$v.transferSettings.korbitec_gen_fee.$params.minLength.min
										}}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.transferSettings.korbitec_gen_fee.numeric"
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
									:disabled="$v.$invalid"
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
	import { required, minLength, decimal } from "vuelidate/lib/validators";
	import axios from "axios";
	export default {
		name: "transferSettings",

		created() {
			axios
				.get("http://127.0.0.1:8000/api/purchase_settings")
				.then((response) => {
					this.transferData = response.data.data;
					console.log(response.data.data);
				})
				.catch((errors) => {
					console.log("There was and error" + errors);
				});
		},

		data() {
			return {
				transferData: "",
				transferSettings: {
					start_amount: "",
					end_amount: "",
					rate_applications: "",
					korbitec_gen_fee: "",
				},
			};
		},
		validations: {
			transferSettings: {
				start_amount: {
					required,
					minLength: minLength(4),
					decimal,
				},
				end_amount: {
					required,
					minLength: minLength(4),
					decimal,
				},
				rate_applications: {
					required,
					minLength: minLength(3),
					decimal,
				},
				korbitec_gen_fee: {
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
						.post(
							"http://127.0.0.1:8000/api/purchase_settings",
							this.transferSettings
						)
						.then((response) => {
							// Reload the data value after the form submit
							this.transferData.push(response.data);
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
