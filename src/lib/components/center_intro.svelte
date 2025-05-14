<script lang="ts">
	import TextOnly from "./text_only.svelte";
</script>

<div class="flex flex-col items-center px-4 sm:px-6 ">
	<!-- Profile Section -->
	<div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
		<p class="text-black text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-center sm:text-left">
			Hi there! I'm
		</p>
		<div class="flex items-center gap-2 sm:gap-4 ">
			<img 
				src="./src/lib/assets/images/sekey1.JPG" 
				alt="Elikem Sek" 
				class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover shadow-md border-2 border-gray-200 hover: transition-shadow duration-300 hover:scale-180"
				width="60"
				height="60"
			/>
			<p class="text-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent hover: transition-shadow duration-300 hover:scale-110">
				Elikem Sek!
			</p>
		</div>
	</div>

	<!-- Title Section -->
	<div class="text-center mt-6 sm:mt-10 max-w-2xl mx-auto">
		<p class="text-gray-700 text-xl sm:text-2xl font-mono font-bold mt-2 sm:mt-4">
			A passionate Mobile & Web App Developer
		</p>
		<p class="text-gray-600 text-xs sm:text-sm font-mono mt-3 sm:mt-5">
			I believe in solving problems, and there's a solution to every problem on this earth.
		</p>
	</div>

	<!---FOUNDER AND CEO-->
	<div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20">
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-700 font-mono">I'm the</p>
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-extrabold font-serif">Founder & CEO</p>
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-700 font-mono">Of</p>
	</div>

	<!-- Company Name Section -->
	<div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mb-10">
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold font-serif text-center">
			MealMate & KW-Machines
		</p>
		<p class="bg-green-500 text-white rounded-full px-4 py-1 text-xs sm:text-sm font-bold whitespace-nowrap">
			Open to Work
		</p>
	</div>

	<!-- Call to Action -->
	<div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-2xl mx-auto">
		<button class="bg-black text-white rounded-full px-6 sm:px-8 md:px-10 py-1.5 sm:py-2 text-sm font-bold hover:bg-gray-800 transition-colors whitespace-nowrap">
			Call
		</button>
		<p class="text-gray-600 text-xs sm:text-sm md:text-sl font-mono text-center sm:text-left">
			Feel free to explore my portfolio and reach out if you have any questions or opportunities.
		</p>
	</div>
</div>

<style>
	.text-transparent {
		-webkit-text-fill-color: transparent;
	}
</style>