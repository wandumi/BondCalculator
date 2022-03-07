<template>
	<div class="">
		<div class="py-20 mx-20">
			<div class="grid place-content-center pb-10">
				<h2 class="text-3xl text-center font-bold pb-5">
					Bond and transfer cost calculator
				</h2>
				<p class="text-md text-center font-normal">
					Calculate the total bond registration and property transfer costs on
					your new home.
				</p>
			</div>
			<div class="mt-5 grid lg:grid-cols-2 sm:grid-cols-1 gap-10">
				<!-- import the form -->
				<div class="">
					<calculator-form />
				</div>

				<!-- import the results -->
				<div>
					<calculate-results />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from "@/components/HelloWorld.vue";
	import CalculatorForm from "@/components/BondCalculator/CalculatorForm.vue";
	import CalculateResults from "@/components/BondCalculator/CalculateResults.vue";

	export default {
		components: {
			CalculatorForm,
			CalculateResults,
		},
		name: "Home",
	};
</script>
