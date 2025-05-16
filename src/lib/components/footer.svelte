<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';
</script>

<footer class="bg-black text-white border-t border-yellow-400">
  <div class="container mx-auto px-6 py-12">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Brand Column -->
      <div class="md:col-span-2">
        <div class="flex items-center mb-4">
          <img 
            src="https://i.ibb.co/nsQgPvZb/sekey1.jpg" 
            alt="Elikem Sek Logo" 
            class="h-10 mr-3"
          >
          <span class="text-2xl font-bold text-yellow-400 font-mono">Prince Sekey Elikem</span>
        </div>
        <p class="text-gray-400 mb-6 max-w-md">
          Creating innovative digital solutions that solve real-world problems through mobile and web technologies.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider">Navigation</h3>
        <ul class="space-y-2">
          <li>
            <a href="#home" class="text-gray-400 hover:text-white transition-colors duration-200" in:fade>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" class="text-gray-400 hover:text-white transition-colors duration-200" in:fade>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" class="text-gray-400 hover:text-white transition-colors duration-200" in:fade>
              About
            </a>
          </li>
          <li>
            <a href="#contact" class="text-gray-400 hover:text-white transition-colors duration-200" in:fade>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-lg font-bold text-yellow-400 mb-4 uppercase tracking-wider">Get In Touch</h3>
        <ul class="space-y-3">
          <li class="flex items-start">
            <svg class="h-5 w-5 text-yellow-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:sekeyprince1@gmail.com" class="text-gray-400 hover:text-white transition-colors duration-200">
              sekeyprince1@gmail.com
            </a>
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-yellow-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-gray-400">+1 (233) 553-767-177</span>
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-yellow-400 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="text-gray-400">Accra, Ghana (GCTU)</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="mt-12 pt-8 border-t border-gray-800">
      <h3 class="text-lg font-bold text-yellow-400 mb-4 text-center">Subscribe to My Newsletter</h3>
      <div class="max-w-md mx-auto flex">
        <input 
          type="email" 
          placeholder="Your email address" 
          class="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
        <button class="bg-yellow-400 text-black font-bold px-6 py-2 rounded-r-lg hover:bg-yellow-300 transition-colors duration-200">
          Subscribe
        </button>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Elikem Sek. All rights reserved.</p>
      <div class="flex justify-center space-x-6 mt-4">
        <a href="#" class="text-gray-500 hover:text-yellow-400">Privacy Policy</a>
        <span>•</span>
        <a href="#" class="text-gray-500 hover:text-yellow-400">Terms of Service</a>
        <span>•</span>
        <a href="#" class="text-gray-500 hover:text-yellow-400">Cookies</a>
      </div>
    </div>
  </div>
</footer>