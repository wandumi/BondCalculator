<template>
	<div>
		<div>
			<div>
				<h3 class="text-2xl font-medium mb-8">Bond Parameters</h3>
			</div>
			<div>
				<form @submit.prevent="onSubmit">
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
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	export default {
		name: "bondForm",
		created() {
			this.purchaseData;
		},
		data() {
			return {
				form: {
					korbitec_gen_fee: "",
					electronic_ins_fee: "",
				},
				errors: [],
			};
		},
		methods: {
			...mapActions({
				bonds: "setBondsData",
			}),

			onSubmit() {
				this.bonds({
					payload: this.form,
					context: this,
				});
			},
		},
		computed: {
			...mapGetters({
				purchaseData: "getPurchase",
			}),
		},
	};
</script>
