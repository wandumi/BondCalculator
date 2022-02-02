<template>
	<div class="mt-10">
		<div class="mb-10">
			<h3 class="text-3xl font-semibold">Default Settings</h3>
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
									<th scope="col" class="relative px-6 py-3">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white divide-y divide-gray-200">
								<tr v-for="common in defaultData" :key="common.id">
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
					<h3 class="text-2xl font-medium mb-8">Default Settings</h3>
				</div>
				<div>
					<form @submit.prevent="onSubmit">
						<div class="mb-7">
							<p v-if="$v.$anyError" class="errorMessage">
								Please fill out the required fields
							</p>
						</div>
						<div class="grid grid-cols-1 gap-4">
							<!-- Vat Amount -->
							<label class="block">
								<span class="text-gray-700">Vat Amount</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter deed office fee"
									v-model.number="defaultSettings.vat_amount"
									v-model.trim="$v.defaultSettings.vat_amount.$model"
									@blur="$v.defaultSettings.vat_amount.$touch()"
									:class="{ error: $v.defaultSettings.vat_amount.$error }"
								/>
								<div v-if="$v.defaultSettings.vat_amount.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.vat_amount.required"
									>
										Please enter the Vat Amount Fee
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.vat_amount.minLength"
									>
										Name must have at least
										{{ $v.defaultSettings.vat_amount.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.defaultSettings.vat_amount.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Search Amount -->
							<label class="block">
								<span class="text-gray-700">Search Fee</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter deed office fee"
									v-model.number="defaultSettings.search_fee"
									v-model.trim="$v.defaultSettings.search_fee.$model"
									@blur="$v.defaultSettings.search_fee.$touch()"
									:class="{ error: $v.defaultSettings.search_fee.$error }"
								/>
								<div v-if="$v.defaultSettings.search_fee.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.search_fee.required"
									>
										Please enter the Search Fee
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.search_fee.minLength"
									>
										Name must have at least
										{{ $v.defaultSettings.search_fee.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.defaultSettings.search_fee.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Deeds Office -->
							<label class="block">
								<span class="text-gray-700">Deeds Office</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter deed office fee"
									v-model.number="defaultSettings.deeds_office"
									v-model.trim="$v.defaultSettings.deeds_office.$model"
									@blur="$v.defaultSettings.deeds_office.$touch()"
									:class="{ error: $v.defaultSettings.deeds_office.$error }"
								/>
								<div v-if="$v.defaultSettings.deeds_office.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.deeds_office.required"
									>
										Please enter the Deeds Office Fee
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.deeds_office.minLength"
									>
										Name must have at least
										{{ $v.defaultSettings.deeds_office.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.defaultSettings.deeds_office.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Post Petties -->
							<label class="block">
								<span class="text-gray-700">Post Petties</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter deed office fee"
									v-model.number="defaultSettings.post_petties"
									v-model.trim="$v.defaultSettings.post_petties.$model"
									@blur="$v.defaultSettings.post_petties.$touch()"
									:class="{ error: $v.defaultSettings.post_petties.$error }"
								/>
								<div v-if="$v.defaultSettings.post_petties.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.post_petties.required"
									>
										Please enter the Post Petties Fee
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.post_petties.minLength"
									>
										Name must have at least
										{{ $v.defaultSettings.post_petties.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.defaultSettings.post_petties.numeric"
									>
										It only accepts numbers
									</p>
								</div>
							</label>

							<!-- Tarrif Fee -->
							<label class="block">
								<span class="text-gray-700">Tarrif Fee</span>
								<input
									type="text"
									class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
									placeholder="Please enter tarrfi fee"
									v-model.number="defaultSettings.tarrif_fee"
									v-model.trim="$v.defaultSettings.tarrif_fee.$model"
									@blur="$v.defaultSettings.tarrif_fee.$touch()"
									:class="{ error: $v.defaultSettings.tarrif_fee.$error }"
								/>
								<div v-if="$v.defaultSettings.tarrif_fee.$error">
									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.tarrif_fee.required"
									>
										Please enter the Tarrif Fee
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-if="!$v.defaultSettings.tarrif_fee.minLength"
									>
										Name must have at least
										{{ $v.defaultSettings.tarrif_fee.$params.minLength.min }}
										numbers.
									</p>

									<p
										class="text-red-600 text-sm p-2 rounded-md"
										v-show="!$v.defaultSettings.tarrif_fee.numeric"
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
	import { required, minLength, decimal } from "vuelidate/lib/validators";
	import axios from "axios";
	export default {
		name: "defaultSettings",

		created() {
			axios
				.get("http://127.0.0.1:8000/api/default_settings")
				.then((response) => {
					this.defaultData = response.data.data;
					console.log(response.data.data);
				})
				.catch((errors) => {
					console.log("There was and error" + errors);
				});
		},

		data() {
			return {
				defaultData: "",
				defaultSettings: {
					vat_amount: "",
					deeds_office: "",
					tarrif_fee: "",
					post_petties: "",
					search_fee: "",
				},
			};
		},
		validations: {
			defaultSettings: {
				vat_amount: {
					required,
					minLength: minLength(1),
					decimal,
				},
				deeds_office: {
					required,
					minLength: minLength(3),
					decimal,
				},
				tarrif_fee: {
					required,
					minLength: minLength(3),
					decimal,
				},
				post_petties: {
					required,
					minLength: minLength(3),
					decimal,
				},
				search_fee: {
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
							"http://127.0.0.1:8000/api/default_settings",
							this.defaultSettings
						)
						.then((response) => {
							// Reload the data value after the form submit
							this.defaultData.push(response.data);
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
