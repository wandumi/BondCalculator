<template>
	<div>
		<div>
			<form @submit.prevent="onSubmit">
				<div class="grid grid-cols-1 gap-4">
					<label class="block">
						<span class="text-gray-700">Purchase price</span>
						<input
							type="text"
							class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="R"
							v-model.trim="$v.bondForm.purchase_price.$model"
						/>
						<div v-if="$v.bondForm.purchase_price.$error">
							<p
								class="text-red-600 text-sm p-2 rounded-md"
								v-if="!$v.bondForm.purchase_price.required"
							>
								Please enter the bond amount
							</p>

							<p
								class="text-red-600 text-sm p-2 rounded-md"
								v-if="!$v.bondForm.purchase_price.minLength"
							>
								Name must have at least
								{{ $v.bondForm.purchase_price.$params.minLength.min }} numbers.
							</p>

							<p
								class="text-red-600 text-sm p-2 rounded-md"
								v-show="!$v.bondForm.purchase_price.numeric"
							>
								It only accepts numbers
							</p>
						</div>
					</label>

					<!-- bond amount -->
					<label class="block">
						<span class="text-gray-700">Bond amount</span>
						<input
							type="text"
							class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="R"
							v-model.number="bondForm.bond_amount"
							v-model.trim="$v.bondForm.bond_amount.$model"
							@blur="$v.bondForm.bond_amount.$touch()"
							:class="{ error: $v.bondForm.bond_amount.$error }"
						/>
						<div v-if="$v.bondForm.bond_amount.$error">
							<p
								class="text-red-600 text-sm p-2 rounded-md"
								v-if="!$v.bondForm.bond_amount.required"
							>
								Please enter the bond amount
							</p>

							<p
								class="text-red-600 text-sm p-2 rounded-md"
								v-if="!$v.bondForm.bond_amount.minLength"
							>
								Name must have at least
								{{ $v.bondForm.bond_amount.$params.minLength.min }} numbers.
							</p>

							<p
								class="text-red-600 text-sm p-2 rounded-md"
								v-show="!$v.bondForm.bond_amount.numeric"
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
							Calculate
						</button>
						<p v-if="$v.$anyError" class="errorMessage">
							Please fill out the required fields
						</p>
					</label>
				</div>
			</form>
		</div>
		<div class="mt-10">
			<p>{{ bond }}</p>
			<hr />
			<br />

			<span> Purchase </span>
			<p>{{ purchase }}</p>
			<hr />
			<br />
		</div>
	</div>
</template>

<script>
	// import BaseInput from "../Base/BaseInput.vue";
	import { required, minLength, numeric } from "vuelidate/lib/validators";
	import axios from "axios";
	export default {
		name: "CalculatorForm",
		created() {
			// bondSettings
			axios
				.get("http://127.0.0.1:8000/api/bond_settings")
				.then((response) => {
					this.bond = response.data.data;
				})
				.catch((errors) => {
					console.log("There was and error" + errors);
				});

			// purchaseSettings
			axios
				.get("http://127.0.0.1:8000/api/purchase_price_settings")
				.then((response) => {
					this.purchase = response.data.data;
				})
				.catch((errors) => {
					console.log("There was and error" + errors);
				});

			// run the computed
			// this.setTransferCost();
		},

		data() {
			return {
				bond: "",
				purchase: "",
				bondForm: {
					purchase_price: "",
					bond_amount: "",
					interest_rate: "",
				},

				vat_amount: 15,
				start_amount: 0,
				end_amount: 0,

				// Specific to the entity transfer cost
				bondSettings: {
					deeds_office: 0,
					tarif_fee: 0,
					search_fee: 0,
					korbitec_gen_fee: 1200,
					post_petties: 0,
					rate_application: 0,
				},

				// Specific to the entity bond cost
				purchaseSettings: {
					tarrif_fee: 0,
					post_petties: 0,
					search_fee: 0,
					deeds_office: 0,
					korbitec_gen_fee: 1200,
					electronic_fee: 0,
				},
			};
		},
		// Form Validation Rules
		validations: {
			bondForm: {
				purchase_price: {
					required,
					minLength: minLength(4),
					numeric,
				},
				bond_amount: {
					required,
					minLength: minLength(4),
					numeric,
				},
				repayment_term: {
					required,
					minLength: minLength(1),
					numeric,
				},
			},
		},
		methods: {},
		computed: {
			// settings
			setSettings() {},
			// set bond
			setBondSettings() {
				// console.log(Array.isArray(this.bond));
				for (let i = 0; i < this.bond.length; i++) {
					const element = this.bond[i].post_petties;
					let post_petties = this.bond[i].post_petties;
					let search_fee = this.bond[i].search_fee;
					let rates_application = this.bond[i].rates_application;

					this.bondSettings.post_petties = post_petties;
					this.bondSettings.search_fee = search_fee;
					this.bondSettings.rates_application = rates_application;
				}
			},

			// set purchase
			setPurchaseSettings() {
				// console.log(Array.isArray(this.bond));
				for (let i = 0; i < this.purchase.length; i++) {
					const element = this.purchase[i].Tarrif_fee;
					console.log("tarrif fee " + element);

					let start_amount = this.purchase[i].Start_amount;
					let end_amount = this.purchase[i].End_amount;
					let tarrif_fee = this.purchase[i].Tarrif_fee;
					let deeds_office = this.purchase[i].Deeds_office;

					this.purchaseSettings.start_amount = start_amount;
					this.purchaseSettings.end_amount = end_amount;
					this.purchaseSettings.tarrif_fee = tarrif_fee;
					this.purchaseSettings.deeds_office = deeds_office;
				}
			},

			// Transfer Calculations
			transferDuty() {
				// const =((A6-1250000)*0,06)+10500
				const transferDuty =
					parseInt((this.bondForm.purchase_price - 1250000) * 0.06) + 10500;

				return transferDuty;
			},

			vatCalculations() {
				const transfer_cost_vat =
					this.transferCost.tarif_fee +
					this.transferCost.search_fee +
					this.transferCost.korbitec_gen_fee +
					this.transferCost.post_petties;
				// return transfer_cost_vat;
				return parseFloat((transfer_cost_vat * this.vat_amount) / 100);
			},

			totalTransferCost() {
				return (
					this.transferDuty +
					this.vatCalculations +
					this.transferCost.tarif_fee +
					this.transferCost.deeds_office +
					this.transferCost.search_fee +
					this.transferCost.korbitec_gen_fee +
					this.transferCost.post_petties +
					this.transferCost.rate_application
				);
			},

			// Bond Caculations
			bondDuty() {
				// const =((A6-1250000)*0,06)+10500
				const transferDuty =
					parseInt((this.bondForm.purchase_price - 1250000) * 0.06) + 10500;

				return transferDuty;
			},

			vatBondCalculations() {
				const transfer_cost_vat =
					this.bondCost.tarif_fee +
					this.bondCost.search_fee +
					this.bondCost.korbitec_gen_fee +
					this.bondCost.electronic_fee +
					this.bondCost.post_petties;
				// return transfer_cost_vat;
				return parseFloat((transfer_cost_vat * this.vat_amount) / 100);
			},
			totalBondCost() {
				return (
					this.vatBondCalculations +
					this.bondCost.tarif_fee +
					this.bondCost.search_fee +
					this.bondCost.korbitec_gen_fee +
					this.bondCost.post_petties +
					this.bondCost.deeds_office +
					this.bondCost.electronic_fee
				);
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
