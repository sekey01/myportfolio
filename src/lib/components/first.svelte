<script lang="ts">
import phiLogo from '/src/lib/assets/images/phi.png';
import { theme } from '$lib/stores/theme';
</script>

<div class="flex flex-col gap-8">

  <!-- Top nav row -->
  <div class="fixed top-3 left-1/2 -translate-x-1/2 z-30
              w-[95%] lg:w-[80%]
              flex flex-row justify-between items-center gap-4
              px-4 py-3 rounded-2xl
              bg-black/40 backdrop-blur-xl
              border border-white/10
              shadow-xl shadow-black/30">
    <div class="flex flex-row gap-0 text-sm lg:text-2xl">
      <p class="font-bold text-white">sekeyprince.</p>
      <p class="font-thin text-green-500">com</p>
    </div>
    <!-- Theme toggle + CTA grouped right -->
    <div class="flex items-center gap-2">

      <button
        on:click={theme.toggle}
        aria-label="Toggle theme"
        class="h-9 w-9 lg:h-11 lg:w-11 flex items-center justify-center rounded-full border border-gray-700 bg-gray-800 hover:border-green-500 transition-colors duration-300"
      >
        {#if $theme === 'dark'}
          <!-- Sun icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 lg:h-5 lg:w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        {:else}
          <!-- Moon icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 lg:h-5 lg:w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        {/if}
      </button>

      <a
        href="https://wa.me/233553767177"
        target="_blank"
        rel="noopener noreferrer"
        class="font-geom text-white font-bold px-4 py-2 border border-green-500 bg-gray-800 rounded-full text-xs lg:text-xl hover:bg-green-900 transition-colors duration-300"
      >
        Get in touch
      </a>

    </div>
  </div>

  <!-- Spacer to push hero below fixed nav -->
  <div class="h-16 lg:h-20"></div>

  <!-- Hero body: stacked on mobile, two-column on desktop -->
  <div class="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-20 lg:min-h-[55vh]">

    <!-- Left: headline + subtext + stats -->
    <div class="flex flex-col gap-5 lg:w-3/5">
      <h1 class="text-3xl lg:text-6xl font-extrabold text-white leading-tight">
        Speaker.<br>
        Builder.<br>
        <span class="block font-geom font-thin tracking-[0.22em] text-green-400 text-2xl lg:text-5xl mt-1">
          entrepreneur.
        </span>
      </h1>
      <p class="text-gray-400 text-sm lg:text-lg max-w-lg">
        Helping young Africans turn ideas into real products and businesses that create lasting impact.
      </p>

      <!-- Social proof stats -->
      <div class="flex flex-row gap-3 lg:gap-10 mt-2">
        <div>
          <p class="text-green-400 font-extrabold text-base lg:text-3xl">10+</p>
          <p class="text-gray-400 text-[10px] lg:text-sm">Youth Events</p>
        </div>
        <div class="border-l border-gray-700"></div>
        <div>
          <p class="text-green-400 font-extrabold text-base lg:text-3xl">2</p>
          <p class="text-gray-400 text-[10px] lg:text-sm">Live Startups</p>
        </div>
        <div class="border-l border-gray-700"></div>
        <div>
          <p class="text-green-400 font-extrabold text-base lg:text-3xl">300+</p>
          <p class="text-gray-400 text-[10px] lg:text-sm">Students Reached</p>
        </div>
        <div class="border-l border-gray-700"></div>
        <div>
          <p class="text-green-400 font-extrabold text-base lg:text-3xl">4</p>
          <p class="text-gray-400 text-[10px] lg:text-sm">Programs Run</p>
        </div>
      </div>
    </div>

    <!-- Right: identity pill -->
    <div class="flex justify-start lg:justify-center lg:w-2/5">
      <div class="bg-gray-900 border-2 border-gray-800 flex flex-row items-center rounded-full p-1 gap-4 w-full sm:w-auto">
        <div class="flex justify-center shrink-0">
          <div class="h-16 w-16 bg-gray-400 rounded-full flex items-center justify-center">
            <div class="animate-spin h-14 w-14 bg-white rounded-full flex justify-center items-center">
              <img src={phiLogo} alt="Phi" />
              <div class="h-2 w-2 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        <div class="flex flex-col pr-4">
          <p class="text-white text-sm lg:text-xl font-bold leading-tight">Prince Sekey</p>
          <p class="text-green-400 text-xs lg:text-sm font-normal">Speaker · Builder · Entrepreneur</p>
        </div>
      </div>
    </div>

  </div>

</div>
