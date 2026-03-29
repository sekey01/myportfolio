<script lang="ts">
  interface Proof {
    title: string;
    url: string;
  }

  interface Skill {
    name: string;
    proofs: Proof[];
  }

  let selectedSkill: Skill | null = null;

  const skills: Skill[] = [
    {
      name: "Software Engineering",
      proofs: [
        { title: "BSc Computer Engineering — GCTU", url: "https://gct.edu.gh" },
        { title: "Internship at Atmostech", url: "https://atmostech.com" }
      ]
    },
    {
      name: "Flutter Mobile Developer",
      proofs: [
        { title: "Promptus App", url: "https://applestore.com/promptus" },
        { title: "MealMate Delivery App", url: "https://mealmmates.click" }
      ]
    },
    {
      name: "Entrepreneurship",
      proofs: [
        { title: "MealMate LLC", url: "https://mealmates.click" },
        { title: "BundleX Platform", url: "https://bundlex.click" }
      ]
    },
    {
      name: "Leadership",
      proofs: [
        { title: "Team Leadership — MealMate", url: "https://meal-mate-web-git-main-sekeys-projects.vercel.app/" }
      ]
    },
    {
      name: "Public Speaking",
      proofs: [
        { title: "Youth Conferences & Summits", url: "https://linkedin.com/in/sekey01" }
      ]
    }
  ];

  function openSkill(skill: Skill) {
    selectedSkill = skill;
  }

  function closeModal() {
    selectedSkill = null;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') closeModal();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="flex flex-col justify-items-center items-start w-full lg:items-center p-4">

  <!-- Hero tagline -->
  <div class="justify-start lg:justify-center items-center lg:place-items-center flex flex-col mt-2 mb-2 lg:w-1/2 animate-fade-in-up">
    <p class="font-extrabold text-2xl lg:text-4xl text-gray-200">
      Helping young Africans turn ideas into <b class="text-green-600 font-extrabold">real products and businesses</b> that create lasting impact.
    </p>

    <p class="text-white text-sm lg:text-base animate-fade-in-delay mt-3">
      I combine software, speech, and entrepreneurship to equip the next generation. Whether through a keynote, a product launch, or a summit — the mission is the same: purpose-driven growth.
    </p>
  </div>

  <!-- Skills Set -->
  <div class="text-white shadow-lg bg-gray-900 rounded-2xl p-6 mt-6 w-full lg:w-1/2 animate-fade-in-up">
    <div class="shadow-md shadow-green-400 rounded-2xl p-2 m-2 mb-6 text-center">
      <p class="font-extrabold text-xl lg:text-3xl text-green-500 pb-4">Skills & Credentials</p>
      <span class="text-white font-normal text-xs">Click on a skill to view proof</span>
    </div>

    <div class="flex flex-wrap gap-4 justify-start lg:justify-center">
      {#each skills as skill}
        <button
          on:click={() => openSkill(skill)}
          class="bg-gray-800 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-lg
                 hover:bg-gray-700 hover:scale-105 transition-all duration-300
                 animate-fade-in-delay cursor-pointer border border-gray-700 hover:border-green-500"
        >
          {skill.name}
        </button>
      {/each}
    </div>

    <!-- About Me -->
    <div class="text-left p-4 lg:p-6 text-white text-sm lg:text-base mt-6 bg-gray-800 rounded-2xl shadow-md shadow-green-400 animate-fade-in-up space-y-4">
      <h1 class="font-extrabold text-xl lg:text-3xl text-green-400 text-center">About Me</h1>

      <p>
        I help young Africans turn ideas into real products and businesses. I'm a builder, speaker, and entrepreneur from Ghana — and I believe the next wave of change in Africa will be led by young people who combine technical skill with purpose.
      </p>

      <p>
        I'm studying Computer Engineering at Ghana Communication Technology University (GCTU). That foundation shapes how I think: systematically, practically, and with a bias toward things that actually work.
      </p>

      <p>
        On the tech side, I've built and shipped mobile apps with Flutter, run a food delivery startup (MealMate), and launched BundleX — a data bundle platform serving real users. I don't just write code; I build products.
      </p>

      <p>
        On the speaking side, I'm focused on addressing young people and students — especially across African communities — about skills development, ethical entrepreneurship, technology awareness, and making bold career choices. I've spoken at youth conferences, summits, and community events.
      </p>

      <p>
        I value discipline, continuous learning, and ethical leadership. If you're building something meaningful — or looking for someone to speak at your event — I'd love to connect.
      </p>
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
    on:click={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    tabindex="-1"
  >
    <div
      class="bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl"
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
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in-up    { animation: fadeInUp 0.8s ease-out both; }
  .animate-fade-in-delay { animation: fadeInUp 1.2s ease-out both; }
</style>
