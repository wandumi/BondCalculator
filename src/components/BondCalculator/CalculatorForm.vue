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
		<div class="mt-8">
			<div class="mb-4">
				<h3 class="text-xl text-black font-bold pb-2">Purchase Price</h3>
				<p>Tranfer Duty : {{ transferDuty }}</p>
				<p>Vat Amount : {{ totalVatPurchase }}</p>
				<p>Total Purchase Price: {{ totalTransferCost }}</p>
			</div>
			<div>
				<h3 class="text-xl text-black font-bold pb-2">Bond Cost</h3>
				<p>Vat Amount : {{ totalVatBond }}</p>
				<p>Total Purchase Price: {{ totalBondCost }}</p>
			</div>
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
			// defaultSettings
			axios
				.get("http://127.0.0.1:8000/api/default_settings")
				.then((response) => {
					this.defaultData = response.data.data;
				})
				.catch((errors) => {
					console.log("There was and error" + errors);
				});
			// bondSettings
			axios
				.get("http://127.0.0.1:8000/api/bond_settings")
				.then((response) => {
					this.bondData = response.data.data;
				})
				.catch((errors) => {
					console.log("There was and error" + errors);
				});

			// purchaseSettings
			axios
				.get("http://127.0.0.1:8000/api/purchase_settings")
				.then((response) => {
					this.purchaseData = response.data.data;
				})
				.catch((errors) => {
					console.log("There was and error" + errors);
				});

			// run the computed
			// this.setTransferCost();
		},

		data() {
			return {
				bondData: "",
				purchaseData: "",
				defaultData: "",
				bondForm: {
					purchase_price: "",
					bond_amount: "",
					interest_rate: "",
				},

				// default settings
				defaultSettings: {
					vat_amount: 0,
					deeds_office: 0,
					tarrif_fee: 0,
					post_petties: 0,
					search_fee: 0,
				},

				// Specific to the entity transfer cost
				bondSettings: {
					electronic_ins_fee: 0,
					korbitec_gen_fee: 0,
				},

				// Specific to the entity bond cost
				purchaseSettings: {
					start_amount: 0,
					end_amount: 0,
					rate_applications: 0,
					korbitec_gen_fee: 0,
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
			// set default
			setDefault() {
				for (let i = 0; i < this.defaultData.length; i++) {
					let deeds_office = this.defaultData[i].deeds_office;
					let search_fee = this.defaultData[i].search_fee;
					let tarrif_fee = this.defaultData[i].tarrif_fee;
					let post_petties = this.defaultData[i].post_petties;

					// set the values
					this.defaultSettings.vat_amount = vat_amount;
					this.defaultSettings.deeds_office = deeds_office;
					this.defaultSettings.search_fee = search_fee;
					this.defaultSettings.tarrif_fee = tarrif_fee;
					this.defaultSettings.post_petties = post_petties;
				}
			},

			// set bond
			setBondSettings() {
				// console.log(Array.isArray(this.bond));
				for (let i = 0; i < this.bondData.length; i++) {
					const element = this.bondData[i].electronic_ins_fee;
					// set a variables
					let electronic_ins_fee = this.bondData[i].electronic_ins_fee;
					let korbitec_gen_fee = this.bondData[i].korbitec_gen_fee;

					// pass variables
					this.bondSettings.electronic_ins_fee = electronic_ins_fee;
					this.bondSettings.korbitec_gen_fee = korbitec_gen_fee;
				}
			},

			// set purchase
			setPurchaseSettings() {
				// console.log(Array.isArray(this.bond));
				for (let i = 0; i < this.purchaseData.length; i++) {
					const element = this.purchaseData[i].start_amount;

					let start_amount = this.purchaseData[i].start_amount;
					let end_amount = this.purchaseData[i].end_amount;
					let rate_applications = this.purchaseData[i].rate_applications;
					let korbitec_gen_fee = this.purchaseData[i].korbitec_gen_fee;

					this.purchaseSettings.start_amount = start_amount;
					this.purchaseSettings.end_amount = end_amount;
					this.purchaseSettings.rate_applications = rate_applications;
					this.purchaseSettings.korbitec_gen_fee = korbitec_gen_fee;
				}
			},

			// Transfer Calculations
			transferDuty() {
				let vat;

				for (let i = 0; i < this.defaultData.length; i++) {
					const element = this.defaultData[i];
					vat = element.vat_amount;
				}

				// console.log("the vat amount is " + vat);
				// const =((A6-1250000)*0,06)+10500
				const transferDuty =
					parseInt((this.bondForm.purchase_price - 1250000) * vat) + 10500;

				return transferDuty;
			},

			totalVatPurchase() {
				// values
				let vat = 15;
				let tarrif_fee;
				let search_fee;
				let korbitec_gen_fee = 400;
				let post_petties;

				// default values
				for (let i = 0; i < this.defaultData.length; i++) {
					const element = this.defaultData[i];

					// vat = element.vat_amount;
					tarrif_fee = element.tarrif_fee;
					search_fee = element.search_fee;
					post_petties = element.post_petties;
				}

				let flotTarrif = parseFloat(tarrif_fee);
				let flotsearch = parseFloat(search_fee);
				let flotkorbitec = parseFloat(korbitec_gen_fee);
				let flotpost = parseFloat(post_petties);

				const totalCost = flotTarrif + flotsearch + flotkorbitec + flotpost;

				// return totalCost;
				return Number((totalCost * vat) / 100);
			},

			totalTransferCost() {
				// values
				let vat = 15;
				let tarrif_fee;
				let search_fee;
				let post_petties;
				let korbitec_gen_fee;
				let rate_application;
				let deeds_office;

				// default values
				for (let i = 0; i < this.defaultData.length; i++) {
					const element = this.defaultData[i];

					// vat = element.vat_amount;
					tarrif_fee = element.tarrif_fee;
					search_fee = element.search_fee;
					post_petties = element.post_petties;
					deeds_office = element.deeds_office;
				}

				// purchase values
				for (let i = 0; i < this.purchaseData.length; i++) {
					const element = this.purchaseData[i];

					korbitec_gen_fee = element.korbitec_gen_fee;
					rate_application = element.rate_applications;
				}

				let flottarrif = parseFloat(tarrif_fee);
				let flotsearch = parseFloat(search_fee);
				let flotkorbitec = parseFloat(korbitec_gen_fee);
				let flotpost = parseFloat(post_petties);
				let flotrate = parseFloat(rate_application);
				let flotdeeds = parseFloat(deeds_office);

				const total =
					flottarrif +
					flotsearch +
					flotkorbitec +
					flotpost +
					flotrate +
					flotdeeds;

				return this.totalVatPurchase + this.transferDuty + total;
			},

			// bond Vat
			totalVatBond() {
				// values
				let vat = 15;
				let tarrif_fee;
				let search_fee;
				let korbitec_gen_fee;
				let electronic_ins_fee;
				let post_petties;

				// default values
				for (let i = 0; i < this.defaultData.length; i++) {
					const element = this.defaultData[i];

					// vat = element.vat_amount;
					tarrif_fee = element.tarrif_fee;
					search_fee = element.search_fee;
					post_petties = element.post_petties;
					electronic_ins_fee = element.electronic_ins_fee;
				}

				// bond values
				for (let i = 0; i < this.bondData.length; i++) {
					const element = this.bondData[i];

					// vat = element.vat_amount;
					korbitec_gen_fee = element.korbitec_gen_fee;
					electronic_ins_fee = element.electronic_ins_fee;
				}

				let flotTarrif = parseFloat(tarrif_fee);
				let flotsearch = parseFloat(search_fee);
				let flotpost = parseFloat(post_petties);
				let flotkorbitec = parseFloat(korbitec_gen_fee);
				let flotelectronic = parseFloat(electronic_ins_fee);

				const bondVatTotal =
					flotTarrif + flotsearch + flotkorbitec + flotpost + flotelectronic;

				return (bondVatTotal * vat) / 100;

				// return transfer_cost_vat;
				return parseFloat((transfer_cost_vat * this.vat_amount) / 100);
			},

			// Total for Bond Cost
			totalBondCost() {
				// values
				let vat = 15;
				let tarrif_fee;
				let search_fee;
				let post_petties;
				let deeds_office;
				let korbitec_gen_fee;
				let electronic_ins_fee;

				// default values
				for (let i = 0; i < this.defaultData.length; i++) {
					const element = this.defaultData[i];

					// vat = element.vat_amount;
					tarrif_fee = element.tarrif_fee;
					search_fee = element.search_fee;
					post_petties = element.post_petties;
					deeds_office = element.deeds_office;
				}

				// bond values
				for (let i = 0; i < this.bondData.length; i++) {
					const element = this.bondData[i];

					korbitec_gen_fee = element.korbitec_gen_fee;
					electronic_ins_fee = element.electronic_ins_fee;
				}

				let flottarrif = parseFloat(tarrif_fee);
				let flotsearch = parseFloat(search_fee);
				let flotpost = parseFloat(post_petties);
				let flotdeeds = parseFloat(deeds_office);
				let flotkorbitec = parseFloat(korbitec_gen_fee);
				let flotelectronic = parseFloat(electronic_ins_fee);

				const bondCost =
					this.totalVatBond +
					flottarrif +
					flotsearch +
					flotpost +
					flotdeeds +
					flotkorbitec +
					flotelectronic;

				// return transfer_cost_vat;
				return bondCost;
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
