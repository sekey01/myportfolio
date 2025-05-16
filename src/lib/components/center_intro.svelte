<script lang="ts">
	import TextOnly from "./text_only.svelte";
</script>

<div class="flex flex-col items-center px-4 sm:px-6 bg-black text-white">
	<!-- Profile Section -->
	<div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 py-8">
		<p class="text-gray-200 text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-center sm:text-left">
			Hi there! I'm
		</p>
		<div class="flex items-center gap-2 sm:gap-4">
			<img 
				src="https://media-hosting.imagekit.io/2c4db4f389f141d4/download.jpeg?Expires=1841859541&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2-7MHQ4nFXlpsEl9b3JFSsGQftkRCID53VfRCEqLhHieO41mm0gLI8BzjJuBOBlhgVpufaB0CVZYlNmwxaJZp97~JobVNkD66PGVPSCWgDeBgePAnoU6cgIeYi9lsbqauqkgTcgZqpg6BLwPI2MAMVKT8kLDG7pWRV-rS9woS~cRr4QJgziWdZ1Lf7IO19SCR1VsQNowV~2hRe5i1bs5KYWdItIJlHqUY3o2-bIm0B4vIbtzZBe3noBlNgJYXdI9zsZJ6MMGS8g82yzAoYhgZnF1llrSWYjoKHQ8qneH~VCJpcY-MkEh8hT8g-x5ZJ16HkzxWT1Ep-S~3JPBN99-dg__" 
				alt="Elikem Sek" 
				class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover shadow-lg border-2 border-yellow-400 hover:shadow-yellow-300 transition-all duration-300 hover:scale-105"
				width="60"
				height="60"
			/>
			<p class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
				Elikem Sek!
			</p>
		</div>
	</div>

	<!-- Title Section -->
	<div class="text-center mt-6 sm:mt-10 max-w-2xl mx-auto border-t border-b border-yellow-400 py-6 px-4">
		<p class="text-yellow-300 text-xl sm:text-2xl font-mono font-bold mt-2 sm:mt-4">
			A passionate Mobile & Web App Developer
		</p>
		<p class="text-gray-300 text-xs sm:text-sm font-mono mt-3 sm:mt-5">
			I believe in solving problems, and there's a solution to every problem on this earth.
		</p>
	</div>

	<!-- FOUNDER AND CEO -->
	<div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20">
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-mono">I'm the</p>
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold font-serif">Founder & CEO</p>
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-mono">Of</p>
	</div>

	<!-- Company Name Section -->
	<div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mb-10 bg-yellow-400 px-6 py-3 rounded-lg">
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold font-serif text-center">
			MealMate & KW-Machines
		</p>
		<a href="https://wa.link/xzb91c" target="_blank" rel="noopener noreferrer">
		
		<p class="bg-black text-yellow-400 rounded-full px-4 py-1 text-xs sm:text-sm font-bold whitespace-nowrap">
			Open to Work
		</p>
		</a>
	</div>

	<!-- Call to Action -->

	<div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-2xl mx-auto">
		
		<a href="https://wa.link/xzb91c" target="_blank" rel="noopener noreferrer">
		<button  class="bg-yellow-400 text-black rounded-full px-6 sm:px-8 md:px-10 py-1.5 sm:py-2 text-sm font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap shadow-lg hover:shadow-yellow-300/50">
			Contact Me
			
		</button>
		</a>
		<p class="text-gray-300 text-xs sm:text-sm md:text-base font-mono text-center sm:text-left">
			Feel free to explore my portfolio and reach out if you have any questions or opportunities.
		</p>
	</div>
</div>

<style>
	.text-transparent {
		-webkit-text-fill-color: transparent;
	}
	.border-yellow-400 {
		border-color: #facc15;
	}
</style>