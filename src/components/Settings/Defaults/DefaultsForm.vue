<template>
	<div>
		<div class="flex align-items-center justify-between mb-8">
			<h3 class="text-2xl font-medium">Default Settings</h3>
			<button class="text-2xl font-medium" @click="!showModal">x</button>
		</div>
		<div>
			<form @submit.prevent="onSubmit">
				<div class="grid grid-cols-1 gap-4">
					<!-- Vat Amount -->
					<label class="block">
						<span class="text-gray-700">Vat Amount</span>
						<input
							type="text"
							class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="Please enter deed office fee"
							v-model.number="form.vat_amount"
							:class="{ 'border-red-500': errors.vat_amount }"
						/>
						<span class="text-red-600" v-if="errors.vat_amount">
							{{ errors.vat_amount[0] }}
						</span>
					</label>

					<!-- Search Amount -->
					<label class="block">
						<span class="text-gray-700">Search Fee</span>
						<input
							type="text"
							class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="Please enter deed office fee"
							v-model.number="form.search_fee"
							:class="{ 'border-red-500': errors.search_fee }"
						/>
						<span class="text-red-600" v-if="errors.search_fee">
							{{ errors.search_fee[0] }}
						</span>
					</label>

					<!-- Deeds Office -->
					<label class="block">
						<span class="text-gray-700">Deeds Office</span>
						<input
							type="text"
							class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="Please enter deed office fee"
							v-model.number="form.deeds_office"
							:class="{ 'border-red-500': errors.deeds_office }"
						/>
						<span class="text-red-600" v-if="errors.deeds_office">
							{{ errors.deeds_office[0] }}
						</span>
					</label>

					<!-- Post Petties -->
					<label class="block">
						<span class="text-gray-700">Post Petties</span>
						<input
							type="text"
							class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="Please enter deed office fee"
							v-model.number="form.post_petties"
							:class="{ 'border-red-500': errors.post_petties }"
						/>
						<span class="text-red-600" v-if="errors.post_petties">
							{{ errors.post_petties[0] }}
						</span>
					</label>

					<!-- Tarrif Fee -->
					<label class="block">
						<span class="text-gray-700">Tarrif Fee</span>
						<input
							type="text"
							class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
							placeholder="Please enter tarrfi fee"
							v-model.number="form.tarrif_fee"
							:class="{ 'border-red-500': errors.tarrif_fee }"
						/>
						<span class="text-red-600" v-if="errors.tarrif_fee">
							{{ errors.electronic_gen_fee[0] }}
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
</template>
<script>
	import { mapActions } from "vuex";
	export default {
		name: "DefaultsForm",
		data() {
			return {
				form: {
					vat_amount: "",
					deeds_office: "",
					tarrif_fee: "",
					post_petties: "",
					search_fee: "",
				},
				errors: [],
			};
		},

		methods: {
			...mapActions({
				defaults: "setDefaultData",
			}),

			onSubmit() {
				this.defaults({
					payload: this.form,
					context: this,
				});
			},
		},
	};
</script>
