<script lang="ts">
	import Socials from "./socials.svelte";


  // Image paths - consider importing or using a more maintainable approach
  const backgroundImage = "https://i.ibb.co/Mkn5nRxn/eli.png";
  const profileImage = "https://i.ibb.co/nsQgPvZb/sekey1.jpg";
</script>

<div class="relative w-full h-64 md:h-[150px] bg-gray-100 overflow-hidden">
  <!-- Background Image -->
  <img 
    src={backgroundImage} 
    alt="Background" 
    class="w-full h-full object-cover object-center"
  />

  <!-- Content Overlay -->
  <div class="absolute inset-0 bg-black/30 flex items-start justify-start p-1">
    <div class="flex flex-col gap-0.5 sm:gap-3 md:gap-4 lg:gap-5">
      <!-- Profile Image -->
      <img 
        src={profileImage} 
        alt="Elikem Sek" 
        class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover shadow-md border-2 border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
        width="60" 
        height="60"
      />

      <!-- Name Section -->
      <div class="text-white">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Elikem</h1>
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">Sek.</h2>
        <div class="h-1 w-10 bg-amber-400 my-2"></div>
      </div>

      <!-- Socials Component -->
       <Socials/>
    </div>
  </div>
</div>