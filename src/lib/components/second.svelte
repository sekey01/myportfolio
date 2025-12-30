<script lang="ts">
  let selectedSkill : any = null;
  
  const skills = [
    { 
      name: "Flutter Mobile Development", 
      proofs: [
        { title: "Promptus", url: "https://example.com/tedx" },
        { title: "MealMate Delivery App", url: "https://example.com/youth" }
      ]
    },
    { 
      name: "Entrepreneurship", 
      proofs: [
        { title: "Startup MealMate LLC", url: "https://meal-mate-web-git-main-sekeys-projects.vercel.app/" },
        { title: "Startup BundleX", url: "https://bundlex.click" }
      ]
    },
    { 
      name: "Leadership", 
      proofs: [
        { title: "Team Leadership -MealMate", url: "https://meal-mate-web-git-main-sekeys-projects.vercel.app/" }
      ]
    },
    { 
      name: "Networking", 
      proofs: [
        { title: "Professional Network", url: "https://example.com/network" }
      ]
    },
    { 
      name: "Public Speaking", 
      proofs: [
        { title: "Youth Conferences", url: "https://example.com/youth" }
      ]
    }

  ];
  
  function openSkill(skill: any) {
    selectedSkill = skill;
  }
  
  function closeModal() {
    selectedSkill = null;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="flex flex-col justify-items-center items-start w-full lg:items-center p-4 ">

  <div class="justify-start lg:justify-center items-center lg:place-items-center flex flex-col mt-2 mb-2 lg:w-1/2">
    <p class="font-extrabold text-4xl text-gray-200">
      Inspiring minds and <b class="text-green-600 font-extrabold ">Building Ideas</b> that create real impact...
    </p>
     
    <p class="text-white">
      Welcome to my platform. I am a public speaker and entrepreneur committed to sharing ideas that empower people and turn vision into action. Explore my work, talks, and ventures to see how I help individuals and organizations grow with purpose.
    </p>
  </div>

  <!-- Skills Set  -->
  <div class="text-white shadow-lg bg-gray-900 rounded-2xl p-6 mt-6 w-full lg:w-1/2">
    <div class="shadow-md shadow-green-400 rounded-2xl p-2 m-2 mb-6 text-center">
          <p class="font-extrabold text-3xl text-green-500 pb-4"> Skills Set</p>
          <p> <span class="text-white font-normal text-xs"> Click on a skill to view proofs </span>
</p>

    </div>
    
    <div class="flex flex-wrap gap-4 justify-start lg:justify-center">
      {#each skills as skill}
        <button 
          on:click={() => openSkill(skill)}
          class="bg-gray-800 p-2 rounded-full text-sm lg:text-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {skill.name}
        </button>
      {/each}
    </div>
  </div>

</div>

<!-- Modal -->
{#if selectedSkill}
  <div 
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    on:click={closeModal}
    on:keydown={(e) => e.key === 'Enter' && closeModal()}
    tabindex="-1"
  >
    <div 
      role="document"
      class="bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
      on:click|stopPropagation
      on:keydown={(e) => e.key === 'Enter' && e.stopPropagation()}
      tabindex="-1"
    >
      <div class="flex justify-between items-center mb-4">
        <p id="modal-title" class="text-2xl font-extrabold text-green-400 ">{selectedSkill.name}</p>
        <button 
          on:click={closeModal}
          aria-label="Close modal"
          class="text-gray-400 hover:text-white text-2xl"
        >
          ×
        </button>
      </div>
      
      <div class="space-y-3">
        {#each selectedSkill.proofs as proof}
          <a 
            href={proof.url}
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors duration-300"
          >
            <p class="text-white font-semibold">{proof.title}</p>
            <p class="text-gray-400 text-sm">View proof →</p>
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}