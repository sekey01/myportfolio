<script lang="ts">
	import TextOnly from "./text_only.svelte";
</script>

<div class="flex flex-col items-center gap-6 max-w-md mx-auto py-6">
	<!-- Profile Section -->
	<div class="flex items-center gap-4">
		<p class="text-black text-xl font-mono font-bold tracking-tight">
			Hi there! I'm
		</p>
		<img 
			src="./src/lib/assets/images/sekey1.JPG" 
			alt="Elikem Sek" 
			class="rounded-full w-16 h-16 object-cover shadow-md border-2 border-gray-200"
			width="64"
			height="64"
		/>
		<p class="text-black text-3xl font-bold font-sans">
			Elikem Sek!
		</p>
	</div>

	<!-- Title Section -->
	<div class="text-center">
		<TextOnly 
			text='Founder And CEO Of' 
			color='red' 
			fontSize='18px' 
			fontfamily='sans-serif'
		/>
	</div>

	<!-- Company Name Section -->
	<div class="flex flex-col items-center gap-4">
		<div class="flex items-center gap-4">
			<h2 class="text-black text-3xl font-bold font-mono">MealMate</h2>
			<span class="bg-green-500 text-white rounded-full px-4 py-1.5 text-sm font-bold">
				Open to Work
			</span>
		</div>

		<!-- Call to Action -->
		<div class="flex flex-col items-center gap-3">
			<button class="bg-black text-white rounded-full px-6 py-2 font-bold hover:bg-gray-800 transition-colors">
				Book a Call
			</button>
			<p class="text-gray-600 text-sm font-mono max-w-xs text-center">
				Feel free to explore my portfolio and reach out if you have any questions or opportunities.
			</p>
		</div>
	</div>
</div>

<style>
	/* Add any custom styles here if needed */
</style>