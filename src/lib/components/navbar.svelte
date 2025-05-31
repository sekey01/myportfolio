<script lang="ts">
  export let title: string = "Prince Sekey";
  import { fade } from 'svelte/transition';
  let mobileMenuOpen = false;
  let activeLink = 'home';

  function setActive(link: string) {
    activeLink = link;
    mobileMenuOpen = false;
  }
</script>

<nav class="bg-gray-900 p-4 shadow-lg">
  <!-- Desktop Nav (hidden on mobile) -->
  <div class="hidden md:flex justify-between items-center">
    <div class="flex space-x-8">
      <a 
        href="#home" 
        class={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeLink === 'home' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'}`}
        on:click={() => setActive('home')}
        in:fade
      >
        Home
      </a>
      <a 
        href="#projects" 
        class={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeLink === 'projects' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'}`}
        on:click={() => setActive('projects')}
        in:fade
      >
        Projects
      </a>
      <a 
        href="#about" 
        class={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeLink === 'about' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'}`}
        on:click={() => setActive('about')}
        in:fade
      >
        About
      </a>
      <a 
        href="#contact" 
        class={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeLink === 'contact' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'}`}
        on:click={() => setActive('contact')}
        in:fade
      >
        Contact
      </a>
    </div>
  </div>

  <!-- Mobile Menu Button (hidden on desktop) -->
  <div class="md:hidden flex items-center">
    <button
      on:click={() => mobileMenuOpen = !mobileMenuOpen}
      class="text-gray-400 hover:text-white focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {#if mobileMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu (shown when button clicked) -->
  {#if mobileMenuOpen}
    <div class="md:hidden mt-4 space-y-2" transition:fade>
      <a 
        href="#home" 
        class={`block px-3 py-2 rounded-md text-base font-medium w-full ${activeLink === 'home' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'}`}
        on:click={() => setActive('home')}
      >
        Home
      </a>
      <a 
        href="#projects" 
        class={`block px-3 py-2 rounded-md text-base font-medium w-full ${activeLink === 'projects' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'}`}
        on:click={() => setActive('projects')}
      >
        Projects
      </a>
      <a 
        href="#about" 
        class={`block px-3 py-2 rounded-md text-base font-medium w-full ${activeLink === 'about' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'}`}
        on:click={() => setActive('about')}
      >
        About
      </a>
      <a 
        href="#contact" 
        class={`block px-3 py-2 rounded-md text-base font-medium w-full ${activeLink === 'contact' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'}`}
        on:click={() => setActive('contact')}
      >
        Contact
      </a>
    </div>
  {/if}
</nav>

<style>
  /* Smooth transitions */
  a, button {
    transition: all 0.3s ease;
  }
</style>