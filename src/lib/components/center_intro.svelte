<script lang="ts">
	import { fade, fly } from 'svelte/transition';
</script>

<div class="flex flex-col items-center px-4 sm:px-6 bg-black text-white">
	<!-- Profile Section -->
	<div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 py-8">
		<p class="text-gray-200 text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-center sm:text-left animate-slide-right">
			Hi there! I'm
		</p>
		<div class="flex items-center gap-2 sm:gap-4 animate-slide-right-delayed">
			<img 
				src="https://i.ibb.co/nsQgPvZb/sekey1.jpg" 
				alt="Elikem Sek" 
				class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover shadow-lg border-2 border-yellow-400 hover:shadow-yellow-300 transition-all duration-300 hover:scale-105 animate-pulse-glow"
				width="60"
				height="60"
			/>
			<p class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 animate-gradient">
				Elikem Sek!
			</p>
		</div>
	</div>

	<!-- Title Section -->
	<div class="text-center mt-6 sm:mt-10 max-w-2xl mx-auto border-t border-b border-yellow-400 py-6 px-4 animate-fade-up">
		<p class="text-yellow-300 text-xl sm:text-2xl font-mono font-black mt-2 sm:mt-4 animate-slide-right">
			A passionate Mobile & Web App Developer
		</p>
		<p class="text-gray-300 text-xs sm:text-sm font-mono font-bold mt-3 sm:mt-5 animate-slide-right-delayed">
			I believe in solving problems, and there's a solution to every problem on this earth.
		</p>
	</div>

	<!-- FOUNDER AND CEO -->
	<div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-10 sm:mt-16 md:mt-20 mb-10 sm:mb-16 md:mb-20 animate-slide-sequence">
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-mono font-black animate-slide-1">I'm the</p>
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-black font-serif animate-slide-2">Founder & CEO</p>
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400 font-mono font-black animate-slide-3">Of</p>
	</div>

	<!-- Company Name Section -->
	<div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 mb-10 bg-yellow-400 px-6 py-3 rounded-lg animate-slide-up hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300">
		<p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-black font-serif text-center">
			MealMate & KW-Machines
		</p>
		<a href="https://wa.link/xzb91c" target="_blank" rel="noopener noreferrer">
			<p class="bg-black text-yellow-400 rounded-full px-4 py-1 text-xs sm:text-sm font-black whitespace-nowrap animate-pulse">
				Open to Work
			</p>
		</a>
	</div>

	<!-- Call to Action -->
	<div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-10 max-w-2xl mx-auto animate-slide-right">
		<a href="https://wa.link/xzb91c" target="_blank" rel="noopener noreferrer">
			<button class="bg-yellow-400 text-black rounded-full px-6 sm:px-8 md:px-10 py-1.5 sm:py-2 text-sm font-black hover:bg-yellow-300 transition-colors whitespace-nowrap shadow-lg hover:shadow-yellow-300/50 hover:scale-110 transform duration-300">
				Contact Me
			</button>
		</a>
		<p class="text-gray-300 text-xs sm:text-sm md:text-base font-mono font-bold text-center sm:text-left">
			Feel free to explore my portfolio and reach out if you have any questions or opportunities.
		</p>
	</div>
</div>

<!-- Background Image and Overlay -->
<div 
  class="relative h-screen w-full bg-gray-900 overflow-hidden"
  style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://www.braintechnosys.com/blog/wp-content/uploads/2020/08/mobile-app-developmen.jpeg') no-repeat center center; background-size: cover;"
>
  <!-- Content Container -->
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
  
	<!-- Animated Badge -->
	<span class="bg-yellow-400 text-gray-900 text-xs font-black px-3 py-1 rounded-full mb-4 uppercase tracking-wider animate-bounce-glow">
		Mobile Developer
	</span>
    
    <!-- Main Headline -->
    <h1 class="text-4xl md:text-6xl font-black text-white mb-4 leading-tight animate-slide-right">
      Building <span class="text-yellow-400 animate-gradient-text">Exceptional</span><br/>
      Mobile Experiences
    </h1>
    
    <!-- Subheadline -->
    <p class="text-lg md:text-xl text-gray-300 font-bold max-w-2xl mb-8 animate-slide-right-delayed">
      I craft high-performance iOS & Android apps with cutting-edge technologies 
      and pixel-perfect UI implementations.
    </p>
    
    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 animate-slide-up">
      <button class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-black py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/50">
        View My Work
      </button>
      <button class="border-2 border-white hover:border-yellow-400 text-white hover:text-yellow-400 font-black py-3 px-6 rounded-full transition-all duration-300 hover:scale-105">
        Contact Me
      </button>
    </div>
    
    <!-- Tech Stack Icons -->
    <div class="mt-12 flex flex-wrap justify-center gap-6 animate-fade-up">
      {#each ['swift', 'kotlin', 'flutter', 'react-native'] as tech}
        <div class="bg-gray-800 bg-opacity-60 p-3 rounded-full hover:bg-yellow-400 hover:bg-opacity-20 transition-all duration-300 hover:scale-110">
          <img 
            src={`/icons/${tech}.svg`} 
            alt={tech} 
            class="h-8 w-8 object-contain filter brightness-0 invert"
          />
        </div>
      {/each}
    </div>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</div>

<style>
	.text-transparent {
		-webkit-text-fill-color: transparent;
	}
	.border-yellow-400 {
		border-color: #facc15;
	}

	/* Classy slide-in animations */
	@keyframes slideRight {
		0% { opacity: 0; transform: translateX(-50px); }
		100% { opacity: 1; transform: translateX(0); }
	}

	@keyframes slideUp {
		0% { opacity: 0; transform: translateY(30px); }
		100% { opacity: 1; transform: translateY(0); }
	}

	@keyframes fadeUp {
		0% { opacity: 0; transform: translateY(20px); }
		100% { opacity: 1; transform: translateY(0); }
	}

	@keyframes gradientShift {
		0%, 100% { background-position: 0% 50%; }
		50% { background-position: 100% 50%; }
	}

	@keyframes pulseGlow {
		0%, 100% { box-shadow: 0 0 5px #facc15; }
		50% { box-shadow: 0 0 20px #facc15, 0 0 30px #facc15; }
	}

	.animate-slide-right {
		animation: slideRight 0.8s ease-out;
	}

	.animate-slide-right-delayed {
		animation: slideRight 0.8s ease-out 0.3s both;
	}

	.animate-slide-up {
		animation: slideUp 0.8s ease-out 0.5s both;
	}

	.animate-fade-up {
		animation: fadeUp 1s ease-out 0.7s both;
	}

	.animate-slide-1 {
		animation: slideRight 0.8s ease-out 0.2s both;
	}

	.animate-slide-2 {
		animation: slideRight 0.8s ease-out 0.4s both;
	}

	.animate-slide-3 {
		animation: slideRight 0.8s ease-out 0.6s both;
	}

	.animate-gradient {
		background-size: 200% 200%;
		animation: gradientShift 3s ease infinite;
	}

	.animate-gradient-text {
		background: linear-gradient(-45deg, #facc15, #fbbf24, #f59e0b, #d97706);
		background-size: 400% 400%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: gradientShift 3s ease infinite;
	}

	.animate-pulse-glow {
		animation: pulseGlow 2s infinite;
	}

	.animate-bounce-glow {
		animation: bounce 1s infinite, pulseGlow 2s infinite;
	}
</style>