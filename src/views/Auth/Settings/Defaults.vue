<template>
	<div class="h-screen">
		<div class="py-10 lg:mx-20">
			<Defaults />
		</div>
	</div>
</template>

<script>
	import Defaults from "../../../components/Settings/Defaults/DefaultTable.vue";
	export default {
		name: "DefaultsTable",
		components: {
			Defaults,
		},
	};
</script>
