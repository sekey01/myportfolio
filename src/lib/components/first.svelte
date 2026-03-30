<script lang="ts">
import phiLogo from '/src/lib/assets/images/phi.png';
</script>

<div class="flex flex-col gap-8">

  <!-- Top nav row -->
  <div class="flex flex-row justify-between items-center w-full gap-4">
    <div class="flex flex-row gap-0 text-sm lg:text-2xl">
      <p class="font-bold text-slate-900">sekeyprince.</p>
      <p class="font-thin text-rose-600">com</p>
    </div>
    <a
      href="https://wa.me/233553767177"
      target="_blank"
      rel="noopener noreferrer"
      class="font-geom text-slate-900 font-bold px-4 py-2 border border-rose-600 bg-white rounded-full text-xs lg:text-xl hover:bg-rose-50 transition-colors duration-300"
    >
      Get in touch
    </a>
  </div>

  <!-- Hero body: stacked on mobile, two-column on desktop -->
  <div class="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-20 lg:min-h-[55vh]">

    <!-- Left: headline + subtext + stats -->
    <div class="flex flex-col gap-5 lg:w-3/5">
      <h1 class="text-3xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
        Speaker.<br>
        Builder.<br>
        <span class="block font-geom font-thin tracking-[0.22em] text-rose-600 text-2xl lg:text-5xl mt-1">
          entrepreneur.
        </span>
      </h1>
      <p class="text-slate-500 text-sm lg:text-lg max-w-lg">
        Helping young Africans turn ideas into real products and businesses that create lasting impact.
      </p>

      <!-- Social proof stats -->
      <div class="flex flex-row gap-3 lg:gap-10 mt-2">
        <div>
          <p class="text-rose-600 font-extrabold text-base lg:text-3xl">10+</p>
          <p class="text-slate-400 text-[10px] lg:text-sm">Youth Events</p>
        </div>
        <div class="border-l border-slate-200"></div>
        <div>
          <p class="text-rose-600 font-extrabold text-base lg:text-3xl">2</p>
          <p class="text-slate-400 text-[10px] lg:text-sm">Live Startups</p>
        </div>
        <div class="border-l border-slate-200"></div>
        <div>
          <p class="text-rose-600 font-extrabold text-base lg:text-3xl">300+</p>
          <p class="text-slate-400 text-[10px] lg:text-sm">Students Reached</p>
        </div>
        <div class="border-l border-slate-200"></div>
        <div>
          <p class="text-rose-600 font-extrabold text-base lg:text-3xl">4</p>
          <p class="text-slate-400 text-[10px] lg:text-sm">Programs Run</p>
        </div>
      </div>
    </div>

    <!-- Right: identity pill -->
    <div class="flex justify-start lg:justify-center lg:w-2/5">
      <div class="bg-white border border-slate-200 shadow-sm flex flex-row items-center rounded-full p-1 gap-4 w-full sm:w-auto">
        <div class="flex justify-center shrink-0">
          <div class="h-16 w-16 bg-slate-200 rounded-full flex items-center justify-center">
            <div class="animate-spin h-14 w-14 bg-white rounded-full flex justify-center items-center border border-slate-100">
              <img src={phiLogo} alt="Phi" />
              <div class="h-2 w-2 bg-slate-900 rounded-full"></div>
            </div>
          </div>
        </div>
        <div class="flex flex-col pr-4">
          <p class="text-slate-900 text-sm lg:text-xl font-bold leading-tight">Prince Sekey</p>
          <p class="text-rose-600 text-xs lg:text-sm font-normal">Speaker · Builder · Entrepreneur</p>
        </div>
      </div>
    </div>

  </div>

</div>
