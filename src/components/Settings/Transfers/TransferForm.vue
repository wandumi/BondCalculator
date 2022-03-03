<template>
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
						v-model="form.start_amount"
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
						v-model.trim="form.end_amount"
						:class="{ 'border-red-500': errors.end_amount }"
					/>
					<span class="text-red-600" v-if="errors.end_amount">
						{{ errors.end_amount[0] }}
					</span>
				</label>

				<!-- Rates -->
				<label class="block">
					<span class="text-gray-700">Rates</span>
					<input
						type="text"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="End value of the amount"
						v-model.trim="form.rates"
						:class="{ 'border-red-500': errors.rates }"
					/>
					<span class="text-red-600" v-if="errors.rates">
						{{ errors.rates[0] }}
					</span>
				</label>

				<!-- Rates amount-->
				<label class="block">
					<span class="text-gray-700">Rates Amount</span>
					<input
						type="text"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="End value of the amount"
						v-model.trim="form.rate_amount"
						:class="{ 'border-red-500': errors.rate_amount }"
					/>
					<span class="text-red-600" v-if="errors.rate_amount">
						{{ errors.rate_amount[0] }}
					</span>
				</label>

				<!-- Description -->
				<label class="block">
					<span class="text-gray-700">Description</span>
					<input
						type="text"
						class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
						placeholder="Start value of the amount"
						v-model.trim="form.description"
					/>
					<span class="text-red-600" v-if="errors.description">
						{{ errors.description[0] }}
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
</template>

<script>
	// import BaseInput from "../Base/BaseInput.vue";
	import { required, minLength, decimal } from "vuelidate/lib/validators";
	import { mapActions } from "vuex";
	export default {
		name: "transferForm",

		created() {
			this.transfers;
		},

		data() {
			return {
				form: {
					start_amount: "",
					end_amount: "",
					rates: "",
					rate_amount: "",
					description: "",
				},
				errors: [],
			};
		},

		methods: {
			...mapActions({
				transfers: "setTransferData",
			}),

			onSubmit() {
				this.transfers({
					payload: this.form,
					context: this,
				});
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
