<template>
	<div>
		<div>
			<form @submit.prevent="onSubmit">
				<div class="grid grid-cols-1 gap-4">
					<!-- Purchase Price -->
					<label class="block">
						<span class="text-gray-700">Purchase price</span>
						<input
							type="text"
							class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="R"
							v-model.number="bondForm.purchase_price"
							v-model.trim="$v.bondForm.purchase_price.$model"
							@blur="$v.bondForm.purchase_price.$touch()"
							:class="{ error: $v.bondForm.purchase_price.$error }"
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
						>
							Calculate
						</button>
						<p v-if="$v.$anyError" class="errorMessage">
							Please fill out the required fields
						</p>
					</label>
				</div>
			</form>
			<!-- <div class="mt-5">
				<div>Transfer: {{ transferDuty | moneyCurrency }}</div>
				<div>Total Vat: {{ totalVatPurchase | moneyCurrency }}</div>
				<div>Transfer Cost: {{ totalTransferCost | moneyCurrency }}</div>

				<div>{{ this.getBonds }}</div>
			</div>
			<div>
				<h2>Vat Calculator Function</h2>
				<div></div>
			</div> -->
		</div>
	</div>
</template>

<script>
	// import BaseInput from "../Base/BaseInput.vue";
	import { required, minLength, numeric } from "vuelidate/lib/validators";
	import { mapActions, mapGetters } from "vuex";
	export default {
		name: "CalculatorForm",
		mounted() {
			// get default data
			this.getDefaultData();
			this.getBondData();
			this.getPurchaseData();
		},

		data() {
			return {
				bondForm: {
					purchase_price: "",
					bond_amount: "",
				},

				totalPurchase: "",
			};
		},

		methods: {
			...mapActions({
				getDefaultData: "getDefaultData",
				getBondData: "getBondData",
				getPurchaseData: "getPurchaseData",
			}),

			onSubmit() {
				console.log("Button respond");
				this.$store.dispatch("getTotalPurchase", this.totalTransferCost);
				this.$store.dispatch("getVatCharge", this.totalVatPurchase);
				this.$store.dispatch("getTransferDuty", this.transferDuty);
				this.$store.dispatch("getVatBond", this.totalVatBond);
				this.$store.dispatch("getBondTotal", this.totalBondCost);
			},

			vatCalculations(defaultValues = [], purchase = [], bond = []) {
				// set the values
				let vat;
				let tarrif_fee;
				let search_fee;
				let post_petties;
				let purchasekorbitec_gen_fee;
				let bondkorbitec_gen_fee;
				let electronic_ins_fee;

				// change the numbers to whole number for precise calculations
				let flotvat = parseFloat(vat);
				let flotTarrif = parseFloat(tarrif_fee);
				let flotsearch = parseFloat(search_fee);
				let flotpost = parseFloat(post_petties);
				let flotpurchasekorbitec = parseFloat(purchasekorbitec_gen_fee);
				let flotbondkorbitec = parseFloat(bondkorbitec_gen_fee);
				let flotelectronic = parseFloat(electronic_ins_fee);

				// default values
				if (defaultValues != 0) {
					for (let i = 0; i < defaultValues.length; i++) {
						const element = defaultValues[i];
						vat = element.vat_amount;
						tarrif_fee = element.tarrif_fee;
						search_fee = element.search_fee;
						post_petties = element.post_petties;
					}
				}

				// get the vat from the purchase
				if (purchase.length != 0) {
					// get the purchase
					for (let i = 0; i < this.getPurchase.length; i++) {
						const element = this.getPurchase[i];
						purchasekorbitec_gen_fee = element.korbitec_gen_fee;
					}
				}

				if (!bond.length === 0) {
					for (let i = 0; i < this.getBonds.length; i++) {
						const element = this.getBonds[i];
						electronic_ins_fee = element.electronic_ins_fee;
						bondkorbitec_gen_fee = element.korbitec_gen_fee;
					}
				}

				console.log(electronic_ins_fee);
				// not common varibles
				if (electronic_ins_fee != 0) {
					const totalCost = parseFloat(
						flotTarrif +
							flotsearch +
							flotbondkorbitec +
							flotpost +
							flotelectronic
					);

					return (totalCost * flotvat) / 100;
				}

				if (purchasekorbitec_gen_fee != 0) {
					const totalCost = parseFloat(
						flotTarrif + flotsearch + flotpurchasekorbitec + flotpost
					);

					return (totalCost * vat) / 100;
				}
			},
		},
		computed: {
			...mapGetters({
				getDefaults: "getDefaults",
				getBonds: "getBonds",
				getPurchase: "getPurchase",
			}),

			/**Transfer Cost */
			transferDuty() {
				let vat;

				for (let i = 0; i < this.getPurchase.length; i++) {
					const element = this.getPurchase[i];
					vat = element.vat_amount;
				}

				// const =((A6-1250000)*0,06)+10500
				return (
					parseFloat((this.bondForm.purchase_price - 1250000) * vat) + 10500
				);
			},

			// total bond
			totalTransferCost() {
				// values
				let tarrif_fee;
				let search_fee;
				let post_petties;
				let korbitec_gen_fee;
				let rate_application;
				let deeds_office;

				// default values
				for (let i = 0; i < this.getDefaults.length; i++) {
					const element = this.getDefaults[i];

					tarrif_fee = element.tarrif_fee;
					search_fee = element.search_fee;
					post_petties = element.post_petties;
					deeds_office = element.deeds_office;
				}

				// purchase values
				for (let i = 0; i < this.getPurchase.length; i++) {
					const element = this.getPurchase[i];

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

			/**Bond Calculator */
			totalVatBond() {
				// values
				let vat;
				let tarrif_fee;
				let search_fee;
				let post_petties;
				let korbitec_gen_fee;
				let electronic_ins_fee;

				// default values
				for (let i = 0; i < this.getDefaults.length; i++) {
					const element = this.getDefaults[i];
					vat = element.vat_amount;
					tarrif_fee = element.tarrif_fee;
					search_fee = element.search_fee;
					post_petties = element.post_petties;
				}

				// get the vat from the purchase
				for (let i = 0; i < this.getBonds.length; i++) {
					const element = this.getBonds[i];
					electronic_ins_fee = element.electronic_ins_fee;
					korbitec_gen_fee = element.korbitec_gen_fee;
				}

				let flotvat = parseFloat(vat);
				let flotTarrif = parseFloat(tarrif_fee);
				let flotsearch = parseFloat(search_fee);
				let flotpost = parseFloat(post_petties);
				let flotkorbitec = parseFloat(korbitec_gen_fee);
				let flotelectronic = parseFloat(electronic_ins_fee);

				const totalCost = parseFloat(
					flotTarrif + flotsearch + flotkorbitec + flotpost + flotelectronic
				);

				return (totalCost * flotvat) / 100;
			},

			// totalvatpurchase
			totalVatPurchase() {
				// values

				let vat;
				let tarrif_fee;
				let search_fee;
				let korbitec_gen_fee;
				let post_petties;

				// default values
				for (let i = 0; i < this.getDefaults.length; i++) {
					const element = this.getDefaults[i];
					vat = element.vat_amount;
					tarrif_fee = element.tarrif_fee;
					search_fee = element.search_fee;
					post_petties = element.post_petties;
				}

				// get the purchase
				for (let i = 0; i < this.getPurchase.length; i++) {
					const element = this.getPurchase[i];

					korbitec_gen_fee = element.korbitec_gen_fee;
				}

				let flotTarrif = parseFloat(tarrif_fee);
				let flotsearch = parseFloat(search_fee);
				let flotkorbitec = parseFloat(korbitec_gen_fee);
				let flotpost = parseFloat(post_petties);

				const totalCost = parseFloat(
					flotTarrif + flotsearch + flotkorbitec + flotpost
				);

				return (totalCost * vat) / 100;
			},
			// get the bond total
			totalBondCost() {
				// values
				let tarrif_fee;
				let search_fee;
				let post_petties;
				let korbitec_gen_fee;
				let electronic_ins_fee;
				let deeds_office;

				// default values
				for (let i = 0; i < this.getDefaults.length; i++) {
					const element = this.getDefaults[i];

					tarrif_fee = element.tarrif_fee;
					search_fee = element.search_fee;
					post_petties = element.post_petties;
					deeds_office = element.deeds_office;
				}

				// get the vat from the purchase
				for (let i = 0; i < this.getBonds.length; i++) {
					const element = this.getBonds[i];
					electronic_ins_fee = element.electronic_ins_fee;
					korbitec_gen_fee = element.korbitec_gen_fee;
				}

				let flottarrif = parseFloat(tarrif_fee);
				let flotsearch = parseFloat(search_fee);
				let flotkorbitec = parseFloat(korbitec_gen_fee);
				let flotpost = parseFloat(post_petties);
				let flotelectronic = parseFloat(electronic_ins_fee);
				let flotdeeds = parseFloat(deeds_office);

				const total =
					flottarrif +
					flotsearch +
					flotkorbitec +
					flotpost +
					flotelectronic +
					flotdeeds;

				return this.totalVatBond + total;
			},
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
