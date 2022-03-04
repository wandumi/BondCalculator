<template>
	<div v-if="showModal">
		<div
			class="bg-gray-800 bg-opacity-40 fixed inset-0 flex items-center justify-center"
		>
			<div class="bg-white shadow rounded-md px-6 py-4 max-w-lg w-full">
				text goes 1here

				<div class="mt-3">
					<button class="bg-black text-white p-1">Submit</button>
					<button class="bg-black text-white p-1">Close</button>
				</div>
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
