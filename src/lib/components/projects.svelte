<script lang="ts">
  import Scrollcard from "./scrollcard.svelte";
  import youthImage from '/src/lib/assets/images/post1.jpeg';
  import techImage from '/src/lib/assets/images/post2.jpeg';
  import greenImage from '/src/lib/assets/images/post3.jpeg';
  import kingdomImage from '/src/lib/assets/images/pg2.jpeg';

  const programs = [
    {
      title: "Youth Enlightenment",
      description: "Community development program reaching 200+ students across multiple regions — equipping young people with skills, mindset, and direction.",
      imageUrl: youthImage
    },
    {
      title: "Tech for All",
      description: "Breaking down barriers to digital access and literacy. Hands-on sessions introducing technology, coding, and digital tools to underserved communities.",
      imageUrl: techImage
    },
    {
      title: "Facing Your Fears",
      description: "A youth empowerment experience that helps individuals name their fears, confront them practically, and walk away with a concrete action plan.",
      imageUrl: greenImage
    },
    {
      title: "Kingdom & Financial Freedom Summit",
      description: "A summit exploring Kingdom principles and financial freedom — equipping individuals to build wealth with purpose, faith, and practical strategy.",
      imageUrl: kingdomImage
    }
  ];
</script>

<div class="justify-center items-center flex flex-col mt-10 mb-20 font-extrabold p-4">
  <p class="text-green-600 text-4xl justify-center pb-2">Programs</p>
  <p class="text-gray-400 font-normal text-sm pb-8 text-center">Initiatives and events designed to equip, inspire, and move people to action.</p>

  {#each programs as program}
    <Scrollcard title={program.title} description={program.description} imageUrl={program.imageUrl} />
  {/each}
</div>
