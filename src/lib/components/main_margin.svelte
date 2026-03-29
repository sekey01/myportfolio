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

  <!-- ░░ Background tech shapes ░░ -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden shapes-layer">

    <!-- Circle — top-left -->
    <div class="shape circle" style="width:260px;height:260px;top:4%;left:2%;animation:floatA 10s ease-in-out infinite;"></div>

    <!-- Diamond — top-right -->
    <div class="shape-wrap" style="top:5%;right:4%;animation:floatB 14s ease-in-out infinite 1s;">
      <div class="shape diamond" style="width:170px;height:170px;"></div>
    </div>

    <!-- Small circle — mid-left -->
    <div class="shape circle" style="width:85px;height:85px;top:41%;left:1.5%;animation:floatC 11s ease-in-out infinite 2s;"></div>

    <!-- Rounded rect — mid-right -->
    <div class="shape rect" style="width:155px;height:65px;top:50%;right:3%;animation:floatD 9s ease-in-out infinite 3s;border-radius:8px;"></div>

    <!-- Medium circle — lower-center -->
    <div class="shape circle" style="width:145px;height:145px;top:71%;left:44%;animation:floatE 13s ease-in-out infinite 0.5s;"></div>

    <!-- Diamond — bottom-left -->
    <div class="shape-wrap" style="top:79%;left:6%;animation:floatA 12s ease-in-out infinite 4s;">
      <div class="shape diamond" style="width:115px;height:115px;"></div>
    </div>

    <!-- Small square — top-center -->
    <div class="shape rect" style="width:62px;height:62px;top:7%;left:51%;animation:floatB 8s ease-in-out infinite 1.5s;border-radius:6px;"></div>

    <!-- Large diamond — bottom-right -->
    <div class="shape-wrap" style="top:82%;right:5%;animation:floatC 17s ease-in-out infinite 2.5s;">
      <div class="shape diamond" style="width:200px;height:200px;"></div>
    </div>

    <!-- Thin horizontal bar — upper-mid -->
    <div class="shape rect" style="width:175px;height:32px;top:27%;left:21%;animation:floatD 12s ease-in-out infinite 3.5s;border-radius:4px;"></div>

    <!-- Circle — right-center -->
    <div class="shape circle" style="width:95px;height:95px;top:34%;right:9%;animation:floatE 10s ease-in-out infinite 1s;"></div>

    <!-- Small diamond — lower-mid -->
    <div class="shape-wrap" style="top:59%;left:28%;animation:floatA 13s ease-in-out infinite 5s;">
      <div class="shape diamond" style="width:75px;height:75px;"></div>
    </div>

    <!-- Rounded rect — upper-right area -->
    <div class="shape rect" style="width:105px;height:48px;top:19%;right:19%;animation:floatB 16s ease-in-out infinite 0s;border-radius:6px;"></div>

    <!-- Thin vertical bar — far right -->
    <div class="shape rect" style="width:30px;height:140px;top:62%;right:1%;animation:floatC 9s ease-in-out infinite 2s;border-radius:4px;"></div>

    <!-- Circle — bottom-center-left -->
    <div class="shape circle" style="width:68px;height:68px;top:88%;left:33%;animation:floatD 11s ease-in-out infinite 4.5s;"></div>

  </div>
  <!-- ░░ end shapes ░░ -->

  <!-- Content sits above shapes -->
  <div class="relative flex flex-col gap-2 lg:gap-12" style="z-index:2;">
    <First/>

    <div id="about">
      <Second/>
    </div>

    <Projects/>

    <!-- Floating Navigation -->
    <div
      class="flex-row fixed bottom-4 left-1/2 -translate-x-1/2
      h-25 w-[90%] lg:w-[50%] flex justify-center items-center
      bg-transparent backdrop-blur-lg text-black px-5 py-3 rounded-xl
      shadow-xl border border-white/30 transition fill-transparent z-40"
    >
      <div class="grid grid-cols-3 w-full gap-2 justify-items-center items-center">

        <button
          on:click={scrollToTop}
          class="h-12 lg:w-[30%] bg-black flex justify-center border-2 p-2 border-white rounded-2xl items-center text-white hover:text-green-500 transition"
        >
          <h1>SP.</h1>
        </button>

        <button
          on:click={scrollToAbout}
          class="h-full lg:w-[30%] bg-black flex flex-col justify-center border-2 p-2 rounded-2xl border-white items-center text-white hover:text-green-500 transition"
        >
          <p class="font-bold">About</p>
        </button>

        <button
          on:click={() => showTerminal = true}
          class="bg-green-900 h-full lg:w-[40%] flex justify-center border-2 p-2 border-white rounded-2xl items-center text-white hover:text-green-500 transition"
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
  /* ── Layer z-index ── */
  .shapes-layer { z-index: 1; }

  /* ── Base shape styles ── */
  .shape {
    position: absolute;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow:
      0 0 12px rgba(255, 255, 255, 0.10),
      0 0 28px rgba(255, 255, 255, 0.05),
      inset 0 0 10px rgba(255, 255, 255, 0.03);
  }

  /* A handful of shapes get a subtle green accent instead */
  .shape.circle:nth-child(3),
  .shape.circle:nth-child(10) {
    border-color: rgba(34, 197, 94, 0.22);
    box-shadow:
      0 0 14px rgba(34, 197, 94, 0.12),
      0 0 30px rgba(34, 197, 94, 0.06),
      inset 0 0 10px rgba(34, 197, 94, 0.04);
  }

  .circle  { border-radius: 50%; }
  .diamond { transform: rotate(45deg); }
  .rect    { /* border-radius applied inline */ }

  /* Wrapper handles the float; inner div handles the rotation */
  .shape-wrap {
    position: absolute;
  }

  /* ── Float animations ── */
  @keyframes floatA {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-22px); }
  }

  @keyframes floatB {
    0%, 100% { transform: translate(0, 0); }
    33%       { transform: translate(12px, -16px); }
    66%       { transform: translate(-8px, -9px); }
  }

  @keyframes floatC {
    0%, 100% { transform: translateY(0); }
    40%       { transform: translateY(-14px); }
    70%       { transform: translateY(-6px); }
  }

  @keyframes floatD {
    0%, 100% { transform: translateX(0); }
    50%       { transform: translateX(14px); }
  }

  @keyframes floatE {
    0%, 100% { transform: translate(0, 0); }
    25%       { transform: translate(-10px, -12px); }
    75%       { transform: translate(9px, 16px); }
  }
</style>
