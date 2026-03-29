<script lang="ts">
	import Terminal from './terminal.svelte';
	import First from "./first.svelte";
	import Projects from "./projects.svelte";
	import Second from "./second.svelte";
	import { theme } from '$lib/stores/theme';

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
  <!-- All shapes use wrapper pattern: wrapper floats, inner shape glows -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden" class:shapes-light={$theme === 'light'} style="z-index:1;">

    <!-- Circle — top-left (green) -->
    <div class="sw" style="top:4%;left:2%;animation:floatA 10s ease-in-out infinite;">
      <div class="shape circle green" style="width:260px;height:260px;"></div>
    </div>

    <!-- Diamond — top-right -->
    <div class="sw" style="top:5%;right:4%;animation:floatB 14s ease-in-out infinite 1s;">
      <div class="shape diamond" style="width:170px;height:170px;"></div>
    </div>

    <!-- Small circle — mid-left (green) -->
    <div class="sw" style="top:41%;left:1.5%;animation:floatC 11s ease-in-out infinite 2s;">
      <div class="shape circle green" style="width:85px;height:85px;"></div>
    </div>

    <!-- Rounded rect — mid-right -->
    <div class="sw" style="top:50%;right:3%;animation:floatD 9s ease-in-out infinite 3s;">
      <div class="shape" style="width:155px;height:65px;border-radius:8px;"></div>
    </div>

    <!-- Medium circle — lower-center (green) -->
    <div class="sw" style="top:71%;left:44%;animation:floatE 13s ease-in-out infinite 0.5s;">
      <div class="shape circle green" style="width:145px;height:145px;"></div>
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

    <!-- Thin horizontal bar — upper-mid (green) -->
    <div class="sw" style="top:27%;left:21%;animation:floatD 12s ease-in-out infinite 3.5s;">
      <div class="shape green" style="width:175px;height:32px;border-radius:4px;"></div>
    </div>

    <!-- Circle — right-center (green) -->
    <div class="sw" style="top:34%;right:9%;animation:floatE 10s ease-in-out infinite 1s;">
      <div class="shape circle green" style="width:95px;height:95px;"></div>
    </div>

    <!-- Small diamond — lower-mid -->
    <div class="sw" style="top:59%;left:28%;animation:floatA 13s ease-in-out infinite 5s;">
      <div class="shape diamond" style="width:75px;height:75px;"></div>
    </div>

    <!-- Rounded rect — upper-right area -->
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
      w-[90%] lg:w-[50%] flex justify-center items-center
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
  /* Shape wrapper — handles position + float animation */
  .sw {
    position: absolute;
  }

  /* Base shape — transparent with neon white glow */
  .shape {
    background: transparent;
    border: 1.5px solid rgba(255, 255, 255, 0.75);
    box-shadow:
      0 0 4px  rgba(255, 255, 255, 0.9),
      0 0 11px rgba(255, 255, 255, 0.65),
      0 0 22px rgba(255, 255, 255, 0.35),
      0 0 45px rgba(255, 255, 255, 0.15);
    animation: pulseGlow 3s ease-in-out infinite;
  }

  /* Green neon variant */
  .shape.green {
    border-color: rgba(34, 197, 94, 0.8);
    box-shadow:
      0 0 4px  rgba(34, 197, 94, 0.9),
      0 0 11px rgba(34, 197, 94, 0.65),
      0 0 22px rgba(34, 197, 94, 0.35),
      0 0 45px rgba(34, 197, 94, 0.15);
    animation: pulseGlowGreen 3s ease-in-out infinite;
  }

  .circle  { border-radius: 50%; }
  .diamond { transform: rotate(45deg); }

  /* ── Light theme shape overrides ── */
  .shapes-light .shape {
    border-color: rgba(15, 23, 42, 0.2);
    box-shadow:
      0 0 3px  rgba(15, 23, 42, 0.25),
      0 0 8px  rgba(15, 23, 42, 0.12),
      0 0 18px rgba(15, 23, 42, 0.06);
    animation: pulseGlowDark 3s ease-in-out infinite;
  }

  .shapes-light .shape.green {
    border-color: rgba(22, 163, 74, 0.4);
    box-shadow:
      0 0 3px  rgba(22, 163, 74, 0.45),
      0 0 8px  rgba(22, 163, 74, 0.25),
      0 0 18px rgba(22, 163, 74, 0.12);
    animation: pulseGlowGreenDark 3s ease-in-out infinite;
  }

  /* ── Keyframes — :global so they're reachable from inline styles ── */
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
    @keyframes pulseGlow {
      0%, 100% {
        box-shadow:
          0 0 4px  rgba(255,255,255,0.9),
          0 0 11px rgba(255,255,255,0.65),
          0 0 22px rgba(255,255,255,0.35);
        border-color: rgba(255,255,255,0.75);
      }
      50% {
        box-shadow:
          0 0 8px  rgba(255,255,255,1),
          0 0 20px rgba(255,255,255,0.85),
          0 0 40px rgba(255,255,255,0.55),
          0 0 70px rgba(255,255,255,0.25);
        border-color: rgba(255,255,255,1);
      }
    }
    @keyframes pulseGlowGreen {
      0%, 100% {
        box-shadow:
          0 0 4px  rgba(34,197,94,0.9),
          0 0 11px rgba(34,197,94,0.65),
          0 0 22px rgba(34,197,94,0.35);
        border-color: rgba(34,197,94,0.8);
      }
      50% {
        box-shadow:
          0 0 8px  rgba(34,197,94,1),
          0 0 20px rgba(34,197,94,0.85),
          0 0 40px rgba(34,197,94,0.55),
          0 0 70px rgba(34,197,94,0.25);
        border-color: rgba(34,197,94,1);
      }
    }
    @keyframes pulseGlowDark {
      0%, 100% {
        box-shadow:
          0 0 3px rgba(15,23,42,0.25),
          0 0 8px rgba(15,23,42,0.12);
        border-color: rgba(15,23,42,0.2);
      }
      50% {
        box-shadow:
          0 0 6px rgba(15,23,42,0.4),
          0 0 16px rgba(15,23,42,0.22);
        border-color: rgba(15,23,42,0.38);
      }
    }
    @keyframes pulseGlowGreenDark {
      0%, 100% {
        box-shadow:
          0 0 3px rgba(22,163,74,0.45),
          0 0 8px rgba(22,163,74,0.22);
        border-color: rgba(22,163,74,0.4);
      }
      50% {
        box-shadow:
          0 0 6px rgba(22,163,74,0.65),
          0 0 16px rgba(22,163,74,0.38);
        border-color: rgba(22,163,74,0.65);
      }
    }
  }
</style>
