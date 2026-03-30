<script lang="ts">
	import Terminal from './terminal.svelte';
	import First from "./first.svelte";
	import Projects from "./projects.svelte";
	import Second from "./second.svelte";

	let showTerminal = false;

	function scrollToTop() {
		document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
	}

	function scrollToAbout() {
		document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
	}
</script>

<div class="relative" id="top">

  <!-- ░░ Background shapes — float only, no glow ░░ -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden" style="z-index:1;">

    <!-- Circle — top-left -->
    <div class="sw" style="top:4%;left:2%;animation:floatA 10s ease-in-out infinite;">
      <div class="shape circle" style="width:260px;height:260px;"></div>
    </div>
    <!-- Diamond — top-right (rose) -->
    <div class="sw" style="top:5%;right:4%;animation:floatB 14s ease-in-out infinite 1s;">
      <div class="shape diamond rose" style="width:170px;height:170px;"></div>
    </div>
    <!-- Small circle — mid-left (rose) -->
    <div class="sw" style="top:41%;left:1.5%;animation:floatC 11s ease-in-out infinite 2s;">
      <div class="shape circle rose" style="width:85px;height:85px;"></div>
    </div>
    <!-- Rounded rect — mid-right -->
    <div class="sw" style="top:50%;right:3%;animation:floatD 9s ease-in-out infinite 3s;">
      <div class="shape" style="width:155px;height:65px;border-radius:8px;"></div>
    </div>
    <!-- Medium circle — lower-center (rose) -->
    <div class="sw" style="top:71%;left:44%;animation:floatE 13s ease-in-out infinite 0.5s;">
      <div class="shape circle rose" style="width:145px;height:145px;"></div>
    </div>
    <!-- Diamond — bottom-left -->
    <div class="sw" style="top:79%;left:6%;animation:floatA 12s ease-in-out infinite 4s;">
      <div class="shape diamond" style="width:115px;height:115px;"></div>
    </div>
    <!-- Small square — top-center -->
    <div class="sw" style="top:7%;left:51%;animation:floatB 8s ease-in-out infinite 1.5s;">
      <div class="shape" style="width:62px;height:62px;border-radius:6px;"></div>
    </div>
    <!-- Large diamond — bottom-right -->
    <div class="sw" style="top:82%;right:5%;animation:floatC 17s ease-in-out infinite 2.5s;">
      <div class="shape diamond" style="width:200px;height:200px;"></div>
    </div>
    <!-- Thin horizontal bar — upper-mid (rose) -->
    <div class="sw" style="top:27%;left:21%;animation:floatD 12s ease-in-out infinite 3.5s;">
      <div class="shape rose" style="width:175px;height:32px;border-radius:4px;"></div>
    </div>
    <!-- Circle — right-center (rose) -->
    <div class="sw" style="top:34%;right:9%;animation:floatE 10s ease-in-out infinite 1s;">
      <div class="shape circle rose" style="width:95px;height:95px;"></div>
    </div>
    <!-- Small diamond — lower-mid -->
    <div class="sw" style="top:59%;left:28%;animation:floatA 13s ease-in-out infinite 5s;">
      <div class="shape diamond" style="width:75px;height:75px;"></div>
    </div>
    <!-- Rounded rect — upper-right -->
    <div class="sw" style="top:19%;right:19%;animation:floatB 16s ease-in-out infinite 0s;">
      <div class="shape" style="width:105px;height:48px;border-radius:6px;"></div>
    </div>
    <!-- Thin vertical bar — far right -->
    <div class="sw" style="top:62%;right:1%;animation:floatC 9s ease-in-out infinite 2s;">
      <div class="shape" style="width:30px;height:140px;border-radius:4px;"></div>
    </div>
    <!-- Circle — bottom-center-left -->
    <div class="sw" style="top:88%;left:33%;animation:floatD 11s ease-in-out infinite 4.5s;">
      <div class="shape circle" style="width:68px;height:68px;"></div>
    </div>

  </div>
  <!-- ░░ end shapes ░░ -->

  <!-- Content -->
  <div class="relative flex flex-col gap-2 lg:gap-12" style="z-index:2;">
    <First/>

    <div id="about">
      <Second/>
    </div>

    <Projects/>

    <!-- Floating Navigation -->
    <div
      class="flex-row fixed bottom-4 left-1/2 -translate-x-1/2
      w-[90%] lg:w-[50%] flex justify-center items-center
      bg-white/80 backdrop-blur-lg px-5 py-3 rounded-xl
      shadow-lg border border-slate-200 z-40"
    >
      <div class="grid grid-cols-3 w-full gap-2 justify-items-center items-center">

        <button
          on:click={scrollToTop}
          class="h-12 lg:w-[30%] bg-white flex justify-center border border-slate-300 p-2 rounded-2xl items-center text-slate-900 hover:text-rose-600 hover:border-rose-400 transition"
        >
          <h1>SP.</h1>
        </button>

        <button
          on:click={scrollToAbout}
          class="h-full lg:w-[30%] bg-white flex flex-col justify-center border border-slate-300 p-2 rounded-2xl items-center text-slate-900 hover:text-rose-600 hover:border-rose-400 transition"
        >
          <p class="font-bold">About</p>
        </button>

        <button
          on:click={() => showTerminal = true}
          class="bg-rose-600 h-full lg:w-[40%] flex justify-center border border-rose-600 p-2 rounded-2xl items-center text-white hover:bg-rose-700 transition"
        >
          <p>$ sudo_<span class="animate-pulse text-xl">|</span></p>
        </button>

      </div>
    </div>
  </div>

  {#if showTerminal}
    <Terminal on:close={() => showTerminal = false} />
  {/if}

</div>

<style>
  .sw { position: absolute; }

  /* Base shape — subtle slate border, blurred into background */
  .shape {
    background: transparent;
    border: 1px solid rgba(100, 116, 139, 0.2);
    filter: blur(6px);
  }

  /* Rose accent variant */
  .shape.rose {
    border-color: rgba(225, 29, 72, 0.25);
  }

  .circle  { border-radius: 50%; }
  .diamond { transform: rotate(45deg); }

  :global {
    @keyframes floatA {
      0%, 100% { transform: translateY(0); }
      50%       { transform: translateY(-30px); }
    }
    @keyframes floatB {
      0%, 100% { transform: translate(0, 0); }
      33%       { transform: translate(18px, -24px); }
      66%       { transform: translate(-12px, -12px); }
    }
    @keyframes floatC {
      0%, 100% { transform: translateY(0); }
      40%       { transform: translateY(-20px); }
      70%       { transform: translateY(-8px); }
    }
    @keyframes floatD {
      0%, 100% { transform: translateX(0); }
      50%       { transform: translateX(20px); }
    }
    @keyframes floatE {
      0%, 100% { transform: translate(0, 0); }
      25%       { transform: translate(-14px, -18px); }
      75%       { transform: translate(12px, 22px); }
    }
  }
</style>
