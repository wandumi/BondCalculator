<template>
	<div>
		<div class="mb-10">
			<h3 class="text-gray-700 text-center text-3xl capitalize">
				{{ this.title }}
			</h3>
		</div>
		<div
			v-if="showModal"
			class="bg-gray-800 bg-opacity-40 fixed inset-0 flex items-center justify-center"
		>
			<div class="fixed insert-0 z-10" @click="showModal = false"></div>
			<div class="bg-white shadow rounded-md px-6 py-4 max-w-lg w-full z-20">
				<div class="my-2">
					<slot />
				</div>

				<div class="flex justify-between">
					<button
						class="bg-green-600 hover:bg-green-800 text-white p-3 rounded w-full"
						@click="submitModal"
					>
						Submit
					</button>
					<button
						class="bg-gray-600 hover:bg-gray-800 text-white p-3 rounded w-full"
						@click="showModal = false"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "supermodal",
		props: {
			onSubmit: {
				type: Function,
				required: false,
			},
		},
		data() {
			return {
				showModal: false,
				title: "",
			};
		},
		methods: {
			submitModal() {
				this.onSubmit();
			},
		},
	};
</script>
