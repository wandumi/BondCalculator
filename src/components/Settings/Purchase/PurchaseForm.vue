<template>
	<div>
		<div>
			<div>
				<h3 class="text-2xl font-medium mb-8">Purchase Price</h3>
			</div>
			<div>
				<form @submit.prevent="onSubmit">
					<div class="grid grid-cols-1 gap-4">
						<!-- Start Amount -->
						<label class="block">
							<span class="text-gray-700">Start Amount</span>
							<input
								type="text"
								class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
								placeholder="Start value of the amount"
								v-model.trim="form.start_amount"
								:class="{ 'border-red-500': errors.start_amount }"
							/>
							<span class="text-red-600" v-if="errors.start_amount">
								{{ errors.start_amount[0] }}
							</span>
						</label>

						<!-- End Amount -->
						<label class="block">
							<span class="text-gray-700">End Amount</span>
							<input
								type="text"
								class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
								placeholder="End value of the amount"
								v-model="form.end_amount"
								:class="{ 'border-red-500': errors.end_amount }"
							/>
							<span class="text-red-600" v-if="errors.end_amount">
								{{ errors.end_amount[0] }}
							</span>
						</label>

						<!-- End Amount -->
						<label class="block">
							<span class="text-gray-700">Vat Amount</span>
							<input
								type="text"
								class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
								placeholder="End value of the amount"
								v-model="form.vat_amount"
								:class="{ 'border-red-500': errors.vat_amount }"
							/>
							<span class="text-red-600" v-if="errors.vat_amount">
								{{ errors.vat_amount[0] }}
							</span>
						</label>

						<!-- Rate Applications -->
						<label class="block">
							<span class="text-gray-700">Rate Applications</span>
							<input
								type="text"
								class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
								placeholder="Start value of the amount"
								v-model="form.rate_applications"
								:class="{ 'border-red-500': errors.rate_applications }"
							/>
							<span class="text-red-600" v-if="errors.rate_applications">
								{{ errors.rate_applications[0] }}
							</span>
						</label>

						<!-- Korbitec -->
						<label class="block">
							<span class="text-gray-700">Korbitec generation fee</span>
							<input
								type="text"
								class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
								placeholder="Start value of the amount"
								v-model="form.korbitec_gen_fee"
								:class="{ 'border-red-500': errors.korbitec_gen_fee }"
							/>
							<span class="text-red-600" v-if="errors.korbitec_gen_fee">
								{{ errors.korbitec_gen_fee[0] }}
							</span>
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
</template>
<script>
	import { mapActions } from "vuex";
	export default {
		name: "PurchaseForm",

		data() {
			return {
				form: {
					start_amount: "",
					end_amount: "",
					vat_amount: "",
					rate_applications: "",
					korbitec_gen_fee: "",
				},
				errors: [],
			};
		},
		methods: {
			...mapActions({
				purchase: "setPurchaseData",
			}),

			onSubmit() {
				this.purchase({
					payload: this.form,
					context: this,
				});
			},
		},
	};
</script>
