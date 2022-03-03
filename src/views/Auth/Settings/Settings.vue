<template>
	<div class="h-screen">
		<div class="py-10 lg:mx-20">
			<div class="flex mb-10 justify-around">
				<div class="bg-gray-200 w-1/4 shadow-sm p-5 m-2">
					<h1 class="text-grey-700 text-3xl text-center">Transfer Duty</h1>
					<p class="text-center">Contains the transfer duty informations</p>
					<div class="mt-2 links flex justify-center">
						<router-link
							to="/transfers"
							href="#"
							class="bg-black py-1 px-5 text-white text-center"
						>
							View
						</router-link>
					</div>
				</div>
				<div class="bg-gray-200 w-1/4 shadow-sm p-5 m-2">
					<h1 class="text-grey-700 text-3xl text-center">Purchase Price</h1>
					<p class="text-center">Contains the transfer duty informations</p>
					<div class="mt-2 links flex justify-center">
						<router-link
							to="/purchases"
							href="#"
							class="bg-black py-1 px-5 text-white text-center"
						>
							View
						</router-link>
					</div>
				</div>
				<div class="bg-gray-200 w-1/4 shadow-sm p-5 m-2">
					<h1 class="text-grey-700 text-3xl text-center">Bond Settings</h1>
					<p class="text-center">Contains the transfer duty informations</p>
					<div class="mt-2 links flex justify-center">
						<router-link
							to="/bonds"
							href="#"
							class="bg-black py-1 px-5 text-white text-center"
						>
							View
						</router-link>
					</div>
				</div>
				<div class="bg-gray-200 w-1/4 shadow-sm p-5 m-2">
					<h1 class="text-grey-700 text-3xl text-center">Default Settings</h1>
					<p class="text-center">Contains the transfer duty informations</p>
					<div class="mt-2 links flex justify-center">
						<router-link
							to="/defaults"
							href="#"
							class="bg-black py-1 px-5 text-white text-center"
						>
							View
						</router-link>
					</div>
				</div>
				<!-- hello -->
			</div>
			<!-- <div class="py-2">
				<router-view></router-view>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		name: "Settings",
	};
</script>
