<script lang="ts">
  let selectedSkill : any = null;
  
  const skills = [
    {
      name: "Computer Engineering", 
      proofs: [
        { title: "BSc Computer Engineering", url: "https://gct.edu.gh" },
        { title: "Internship at Atmostech", url: "https://atmostech.com" }
      ] 
    },
    { 
      name: "Flutter Mobile Developer", 
      proofs: [
        { title: "Promptus", url: "https://applestore.com/promptus" },
        { title: "MealMate Delivery App", url: "https://mealmmates.click" }
      ]
    },
    { 
      name: "Entrepreneurship", 
      proofs: [
        { title: "Startup MealMate LLC", url: "https://mealmates.click" },
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

  <div class="justify-start lg:justify-center items-center lg:place-items-center flex flex-col mt-2 mb-2 lg:w-1/2
              animate-fade-in-up">
    <p class="font-extrabold text-4xl text-gray-200 animate-glow">
      Inspiring minds and <b class="text-green-600 font-extrabold ">Building Ideas</b> that create real impact...
    </p>
     
    <p class="text-white animate-fade-in-delay">
      Welcome to my platform. I am a public speaker and entrepreneur committed to sharing ideas that empower people and turn vision into action. Explore my work, talks, and ventures to see how I help individuals and organizations grow with purpose.
    </p>
  </div>

  <!-- Skills Set  -->
  <div class="text-white shadow-lg bg-gray-900 rounded-2xl p-6 mt-6 w-full lg:w-1/2 animate-fade-in-up">
    <div class="shadow-md shadow-green-400 rounded-2xl p-2 m-2 mb-6 text-center animate-glow">
      <p class="font-extrabold text-3xl text-green-500 pb-4"> Skills Set</p>
      <p>
        <span class="text-white font-normal text-xs"> Click on a skill to view proofs </span>
      </p>
    </div>
    
    <div class="flex flex-wrap gap-4 justify-start lg:justify-center">
      {#each skills as skill}
        <button 
          on:click={() => openSkill(skill)}
          class="bg-gray-800 p-2 rounded-full text-sm lg:text-lg 
                 hover:bg-gray-700 hover:scale-105 transition-all duration-300 
                 animate-fade-in-delay cursor-pointer"
        >
          {skill.name}
        </button>
      {/each}
    </div>

    <div class="text-center p-4 text-white text-xl mt-6 bg-gray-800 rounded-2xl shadow-md shadow-green-400
                animate-fade-in-up">
      <h1 class="font-extrabold text-3xl text-green-400 p-6 animate-glow"> About Me </h1>
      My name is Prince Sekey, a technology-focused student with a strong interest in software development, entrepreneurship, and problem-solving in the African context. I am driven by the belief that education should go beyond certificates and must lead to practical skills that solve real problems.

      I am currently studying at Ghana Communication Technology University, where I am pursuing a Bachelor of Science in Computer Engineering. My academic training has strengthened my interest in computing systems, software development, and applied technology.

      My interest in technology began when I was introduced to computers and programming concepts during my secondary education. Since then, I have explored areas such as software development, web technologies, and digital platforms, with a focus on building solutions that improve everyday life.

      Alongside technology, I am actively developing my public speaking skills with a clear purpose. I am focusing on speaking to young people and students, especially in African communities, about skills development, ethical entrepreneurship, technology awareness, and positive career choices.

      I am especially interested in using both technology and communication to support education, business growth, and youth development in Ghana and across Africa.

      I value discipline, continuous learning, and ethical leadership.
    </div>
  </div>

</div>

<!-- Modal -->
{#if selectedSkill}
  <div 
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up"
    on:click={closeModal}
    tabindex="-1"
  >
    <div 
      role="document"
      class="bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl animate-glow"
      on:click|stopPropagation
      tabindex="-1"
    >
      <div class="flex justify-between items-center mb-4">
        <p id="modal-title" class="text-2xl font-extrabold text-green-400">{selectedSkill.name}</p>
        <button 
          on:click={closeModal}
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
            class="block bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors duration-300 animate-fade-in-delay"
          >
            <p class="text-white font-semibold">{proof.title}</p>
            <p class="text-gray-400 text-sm">View proof →</p>
          </a>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glow {
    0% { text-shadow: 0 0 0px #22c55e; }
    50% { text-shadow: 0 0 10px #22c55e; }
    100% { text-shadow: 0 0 0px #22c55e; }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out both;
  }

  .animate-fade-in-delay {
    animation: fadeInUp 1.2s ease-out both;
  }

  .animate-glow {
    animation: glow 2.5s ease-in-out infinite;
  }
</style>
