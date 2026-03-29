<script>
import phiLogo from '/src/lib/assets/images/phi.png';
</script>

<div class="flex flex-col gap-8">

  <!-- Top nav row -->
  <div class="flex flex-row justify-between items-center w-full gap-4">
    <div class="flex flex-row gap-0 text-sm lg:text-2xl">
      <p class="font-bold text-white">sekeyprince.</p>
      <p class="font-thin text-green-500">com</p>
    </div>
    <a
      href="https://wa.me/233553767177"
      target="_blank"
      rel="noopener noreferrer"
      class="font-geom text-white font-bold px-4 py-2 border border-green-500 bg-gray-800 rounded-full text-xs lg:text-xl hover:bg-green-900 transition-colors duration-300"
    >
      Get in touch
    </a>
  </div>

  <!-- Hero body: stacked on mobile, two-column on desktop -->
  <div class="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-20 lg:min-h-[55vh]">

    <!-- Left: headline + subtext + stats -->
    <div class="flex flex-col gap-5 lg:w-3/5">
      <h1 class="text-3xl lg:text-6xl font-extrabold text-white leading-tight">
        Speaker.<br>
        Builder.<br>
        <span class="text-green-400">Entrepreneur.</span>
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
