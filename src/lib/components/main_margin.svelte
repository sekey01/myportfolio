<script lang="ts">
	import Terminal from './terminal.svelte';
	import About from "./about.svelte";
	import First from "./first.svelte";
	import Projects from "./projects.svelte";
	import Second from "./second.svelte";

	let showTerminal = false;
</script>

<div class="relative">

  <!-- Background Designs (kept as-is, commented) -->
  <!--
  <div class="absolute top-20 hidden sm:block">
     <Triangle/>
  </div>  
  <div class="absolute top-100 right-0 lg:left-3/4 hidden sm:block"> 
    <Triangle/>
  </div>
  -->

  <div class="flex flex-col gap-2 lg:gap-12">
    <First/>	
    <Second/>
    <Projects/>
    <About/>
  
    <!-- Floating Navigation -->
    <div 
      class="flex-row fixed bottom-4 left-1/2 -translate-x-1/2
      h-25 w-[90%] lg:w-[50%] flex justify-center items-center
      bg-transparent backdrop-blur-lg text-black px-5 py-3 rounded-xl 
      shadow-xl border border-white/30 transition fill-transparent z-40"
    >
      <div class="grid grid-cols-3 w-full gap-2 justify-items-center items-center">

        <!-- SP -->
        <div class="h-12 lg:w-[30%] bg-black flex justify-center border-2 p-2 border-white rounded-2xl items-center text-white hover:text-green-500 transition">
          <h1>SP.</h1>
        </div>

        <!-- About -->
        <div class="h-full lg:w-[30%] bg-black flex flex-col justify-center border-2 p-2 rounded-2xl border-white items-center text-white hover:text-green-500 transition">
          <p class="font-bold">About</p>
        </div>

        <!-- Sudo -->
        <button
          on:click={() => showTerminal = true}
          class="bg-green-900 h-full lg:w-[40%] flex justify-center border-2 p-2 border-white rounded-2xl items-center text-white hover:text-green-500 transition"
        >
          <p>$ sudo_<span class="animate-pulse text-xl">|</span></p>
        </button>
    
      </div>
    </div>
  </div>

  <!-- Terminal Modal -->
  {#if showTerminal}
    <Terminal on:close={() => showTerminal = false} />
  {/if}

</div>
