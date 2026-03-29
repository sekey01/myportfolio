<script>
import phiLogo from '/src/lib/assets/images/phi.png';
</script>

<div class="flex items-center justify-center flex-col gap-6">

  <!-- Top nav row: logo + CTA -->
  <div class="flex flex-row justify-between items-center w-full gap-4">

    <div class="flex flex-row text-gray-400 gap-0 text-sm lg:text-2xl">
      <p class="font-bold text-white">sekeyprince.</p>
      <p class="font-thin text-green-500">com</p>
    </div>

    <a
      href="mailto:sekeyprince1@gmail.com"
      class="font-geom text-white font-bold p-2 border border-green-500 bg-gray-800 rounded-full text-xs lg:text-xl hover:bg-green-900 transition-colors duration-300"
    >
      Get in touch
    </a>

  </div>

  <!-- Identity pill -->
  <div class="h-full sm:h-20 w-[90%] lg:w-[40%] bg-gray-900 border-2 border-gray-800 flex flex-row items-center place-content-start rounded-full p-1 gap-6 sm:gap-4">
    <div class="flex justify-center shrink-0">
      <h1 class="h-16 w-16 bg-gray-400 rounded-full justify-center flex items-center">
        <div class="animate-spin h-14 w-14 bg-white rounded-full flex justify-center items-center">
          <img src={phiLogo} alt="Phi">
          <div class="flex h-2 w-2 bg-black rounded-full justify-center items-center"></div>
        </div>
      </h1>
    </div>

    <div class="flex flex-col">
      <p class="text-white text-sm lg:text-xl font-bold leading-tight">Prince Sekey</p>
      <p class="text-green-400 text-xs lg:text-sm font-normal">Speaker · Builder · Entrepreneur</p>
    </div>
  </div>

  <!-- Social proof strip -->
  <div class="flex flex-row gap-6 lg:gap-12 text-center mt-2">
    <div>
      <p class="text-green-400 font-extrabold text-xl lg:text-3xl">10+</p>
      <p class="text-gray-400 text-xs lg:text-sm">Youth Events</p>
    </div>
    <div class="border-l border-gray-700"></div>
    <div>
      <p class="text-green-400 font-extrabold text-xl lg:text-3xl">2</p>
      <p class="text-gray-400 text-xs lg:text-sm">Live Startups</p>
    </div>
    <div class="border-l border-gray-700"></div>
    <div>
      <p class="text-green-400 font-extrabold text-xl lg:text-3xl">300+</p>
      <p class="text-gray-400 text-xs lg:text-sm">Students Reached</p>
    </div>
    <div class="border-l border-gray-700"></div>
    <div>
      <p class="text-green-400 font-extrabold text-xl lg:text-3xl">4</p>
      <p class="text-gray-400 text-xs lg:text-sm">Programs Run</p>
    </div>
  </div>

</div>
