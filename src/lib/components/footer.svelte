<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  
  let email = '';
  let isSubscribed = false;
  let isVisible = false;

  onMount(() => {
    isVisible = true;
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  });

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      isSubscribed = true;
      email = '';
      setTimeout(() => {
        isSubscribed = false;
      }, 3000);
    }
  };
</script>

<footer class="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-t border-yellow-400/30 overflow-hidden">
  <!-- Animated Background Elements -->
  <div class="absolute inset-0 opacity-20">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
  </div>

  <div class="relative container mx-auto px-6 py-16">
    <!-- Main Footer Content -->
    {#if isVisible}
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16" in:fade={{ duration: 800, delay: 200 }}>
        <!-- Brand Column -->
        <div class="md:col-span-2 animate-on-scroll">
          <div class="flex items-center mb-6 group">
            <div class="relative">
              <img 
                src="https://i.ibb.co/nsQgPvZb/sekey1.jpg" 
                alt="Elikem Sek Logo" 
                class="h-12 mr-4 rounded-full border-2 border-yellow-400/50 group-hover:border-yellow-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-400/30"
              >
              <div class="absolute inset-0 rounded-full bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
            <span class="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent font-mono">
              Prince Sekey Elikem
            </span>
          </div>
          <p class="text-gray-300 mb-8 max-w-lg leading-relaxed text-lg">
            Creating innovative digital solutions that solve real-world problems through mobile and web technologies.
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            {#each ['github', 'linkedin', 'twitter'] as social}
              <a href="#" class="group relative p-3 bg-gray-800/50 rounded-full hover:bg-yellow-400/20 transition-all duration-300 hover:scale-110">
                <div class="w-5 h-5 bg-gray-400 group-hover:bg-yellow-400 transition-colors duration-300"></div>
                <div class="absolute inset-0 rounded-full bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              </a>
            {/each}
          </div>
        </div>

        <!-- Quick Links -->
        <div class="animate-on-scroll">
          <h3 class="text-xl font-bold text-yellow-400 mb-6 uppercase tracking-wider relative">
            Navigation
            <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
          </h3>
          <ul class="space-y-4">
            {#each [['Home', '#home'], ['Projects', '#projects'], ['About', '#about'], ['Contact', '#contact']] as [text, href], i}
              <li in:fly={{ x: -20, delay: 300 + i * 100 }}>
                <a 
                  {href} 
                  class="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                >
                  <span class="w-2 h-2 bg-yellow-400/50 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                  {text}
                </a>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="animate-on-scroll">
          <h3 class="text-xl font-bold text-yellow-400 mb-6 uppercase tracking-wider relative">
            Get In Touch
            <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
          </h3>
          <ul class="space-y-4">
            <li class="group flex items-start hover:bg-gray-800/30 p-3 rounded-lg transition-colors duration-300">
              <div class="p-2 bg-yellow-400/20 rounded-lg mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                <svg class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:sekeyprince1@gmail.com" class="text-gray-300 hover:text-white transition-colors duration-300">
                sekeyprince1@gmail.com
              </a>
            </li>
            <li class="group flex items-start hover:bg-gray-800/30 p-3 rounded-lg transition-colors duration-300">
              <div class="p-2 bg-yellow-400/20 rounded-lg mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                <svg class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span class="text-gray-300">+1 (233) 553-767-177</span>
            </li>
            <li class="group flex items-start hover:bg-gray-800/30 p-3 rounded-lg transition-colors duration-300">
              <div class="p-2 bg-yellow-400/20 rounded-lg mr-4 group-hover:bg-yellow-400/30 transition-colors duration-300">
                <svg class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span class="text-gray-300">Accra, Ghana (GCTU)</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-yellow-400/20" in:fly={{ y: 50, delay: 600 }}>
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent mb-3">
            Stay Updated
          </h3>
          <p class="text-gray-300 max-w-md mx-auto">
            Get the latest updates on my projects and tech insights delivered to your inbox.
          </p>
        </div>
        
        <div class="max-w-md mx-auto">
          {#if !isSubscribed}
            <div class="flex flex-col sm:flex-row gap-3">
              <input 
                bind:value={email}
                type="email" 
                placeholder="Enter your email address" 
                class="flex-1 bg-gray-800/80 text-white px-6 py-4 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 placeholder-gray-400"
              >
              <button 
                on:click={handleSubscribe}
                class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-8 py-4 rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30"
              >
                Subscribe
              </button>
            </div>
          {:else}
            <div class="text-center p-4 bg-green-400/20 rounded-xl border border-green-400/30" in:fade>
              <p class="text-green-400 font-semibold">✓ Successfully subscribed!</p>
            </div>
          {/if}
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-gray-700/50 text-center" in:fade={{ delay: 800 }}>
        <p class="text-gray-400 mb-4">© {new Date().getFullYear()} Elikem Sek. All rights reserved.</p>
        <div class="flex flex-wrap justify-center items-center gap-6 text-sm">
          {#each ['Privacy Policy', 'Terms of Service', 'Cookies'] as link, i}
            <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:underline decoration-yellow-400">
              {link}
            </a>
            {#if i < 2}
              <span class="text-gray-600">•</span>
            {/if}
          {/each}
        </div>
      </div>
    {/if}
  </div>
</footer>

<style>
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }
</style>