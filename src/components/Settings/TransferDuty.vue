<template>
	<div class="mt-20">
		<div class="mb-10">
			<h3 class="text-3xl font-semibold">TransferDuty Settings</h3>
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

									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div class="text-sm text-gray-500">
											{{ transfer.description }}
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
					<h3 class="text-2xl font-medium mb-8">Add Transfer Duty</h3>
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
									v-model.trim="$v.transferduty.start_amount.$model"
									@blur="$v.transferduty.start_amount.$touch()"
									:class="{ error: $v.transferduty.start_amount.$error }"
								/>
								<div v-if="$v.transferduty.start_amount.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.start_amount.required"
									>
										Please enter a Start Amount
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.start_amount.minLength"
									>
										Name must have at least
										{{ $v.transferduty.start_amount.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.transferduty.start_amount.numeric"
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
									v-model.trim="$v.transferduty.end_amount.$model"
									@blur="$v.transferduty.end_amount.$touch()"
									:class="{ error: $v.transferduty.end_amount.$error }"
								/>
								<div v-if="$v.transferduty.end_amount.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.end_amount.required"
									>
										Please enter a End Amount
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.end_amount.minLength"
									>
										Name must have at least
										{{ $v.transferduty.end_amount.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.transferduty.end_amount.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Rates -->
							<label class="block">
								<span class="text-gray-700">Rates</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="End value of the amount"
									v-model.trim="$v.transferduty.rates.$model"
									@blur="$v.transferduty.rates.$touch()"
									:class="{ error: $v.transferduty.rates.$error }"
								/>
								<div v-if="$v.transferduty.rates.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.rates.required"
									>
										Please enter a rates
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.rates.minLength"
									>
										Name must have at least
										{{ $v.transferduty.rates.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.transferduty.rates.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Rates amount-->
							<label class="block">
								<span class="text-gray-700">Rates Amount</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="End value of the amount"
									v-model.trim="$v.transferduty.rate_amount.$model"
									@blur="$v.transferduty.rate_amount.$touch()"
									:class="{ error: $v.transferduty.rate_amount.$error }"
								/>
								<div v-if="$v.transferduty.rate_amount.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.rate_amount.required"
									>
										Please enter a rate_amount
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.rate_amount.minLength"
									>
										Name must have at least
										{{ $v.transferduty.rate_amount.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.transferduty.rate_amount.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Description -->
							<label class="block">
								<span class="text-gray-700">Description</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Start value of the amount"
									v-model.trim="$v.transferduty.description.$model"
									@blur="$v.transferduty.description.$touch()"
									:class="{
										error: $v.transferduty.description.$error,
									}"
								/>
								<div v-if="$v.transferduty.description.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.description.required"
									>
										Please enter a description
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.transferduty.description.minLength"
									>
										Name must have at least
										{{ $v.transferduty.description.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.transferduty.description.numeric"
									>
										It only accepts text
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
	import { mapActions, mapGetters } from "vuex";
	export default {
		name: "transferData",

		created() {
			this.transferDuty;
			this.transferData;
		},

		data() {
			return {
				transferduty: {
					start_amount: "",
					end_amount: "",
					rates: "",
					rate_amount: "",
					description: "",
				},
			};
		},
		validations: {
			transferduty: {
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
				rates: {
					required,
					minLength: minLength(4),
					decimal,
				},
				rate_amount: {
					required,
					minLength: minLength(4),
					decimal,
				},
				description: {
					required,
					minLength: minLength(3),
				},
			},
		},
		methods: {
			onSubmit() {
				this.$v.$touch();
				if (!this.$v.$invalid) {
					axios
						.post("http://127.0.0.1:8000/api/transfer_duty", this.transferduty)
						.then((response) => {
							// Reload the data value after the form submit
							this.transferDuty.push(response.data);
							console.log(response.data);
							console.log("The file saved to the database" + response.data);
						})
						.catch((errors) => {
							console.log("There was and error" + errors);
						});
				} else {
					// Do the submit here to the database
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
