<script lang="ts">
</script>

<div class="relative flex flex-col md:flex-row items-center justify-between p-2 w-full max-w-4xl mx-auto bg-gradient-to-r from-orange-200 to-orange-100 rounded-lg shadow-lg hover: transition-shadow duration-300 hover:scale-190">
    
    <div class="flex flex-col md:flex-row items-center gap-3 md:gap-6 lg:gap-6 w-full md:w-auto pl-4">
        <!-- Profile Image - Always visible but size adjusts -->
        <img src="./src/lib/assets/images/ph.png" alt="Elikem Sek" class="rounded-full w-12 h-12 md:w-10 md:h-10 object-cover shadow-lg" />

        <!-- Email - Stacked on mobile, inline on desktop -->
        <p class="font-serif font-thin text-sm md:text-xl whitespace-nowrap">elikemsek@gmail.com</p>
      
        <!-- Phone Number - Smaller on mobile -->
        <p class="font-serif text-xs md:text-sm whitespace-nowrap">+233 55 376 7177</p>
        <!-- Location - Stacked on mobile, inline on desktop -->
        <p class="font-serif text-xs md:text-sm whitespace-nowrap">Accra, Ghana</p>
        
    </div>

    <!-- Menu Button - Position changes based on screen size -->
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button class="mt-2 md:mt-0 bg-green-200 rounded-full p-2 hover:bg-gray-300 transition-colors self-end md:self-auto ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        
        
    </button>
</div>