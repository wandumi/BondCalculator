<template>
	<div
		v-if="showModal"
		class="bg-gray-800 bg-opacity-40 fixed inset-0 flex items-center justify-center"
	>
		<div class="fixed insert-0 z-10" @click="showModal = false"></div>
		<div class="bg-white shadow rounded-md px-6 py-4 max-w-lg w-full z-20">
			<div class="my-2">
				<transfer-form />
			</div>

			<div class="mt-2">
				<button
					class="bg-gray-600 hover:bg-gray-800 text-white p-3 rounded w-full"
					@click="showModal = false"
				>
					Close
				</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "modal",

		data() {
			return {
				showModal: false,
			};
		},
	};
</script>
