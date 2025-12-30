<script lang="ts">
	import ProjectsContainer from "./projects_container.svelte";
	import Scrollcard from "./scrollcard.svelte";
  import youthImage from '/src/lib/assets/images/post1.jpeg';
  import techImage from '/src/lib/assets/images/post2.jpeg';
  import greenImage from '/src/lib/assets/images/post3.jpeg';


      let programs = [
        {
          title: "Youth Enlightenment",
          description: "Community engagement and development programs for youth.",
          imageUrl: youthImage
        },
        {
          title: "Tech for All",
          description: "Bridging the digital divide through technology access.",
          imageUrl: techImage
        },
        {
          title: "Green Future",
          description: "Environmental sustainability initiatives and education.",
          imageUrl: greenImage
        }
      ];
</script>

<div class="justify-center item-center items-center flex flex-col mt-10 mb-20 font-extrabold p-4">
    <p class="text-green-600 text-4xl justify-center pb-8"> Programs </p>

{#each programs as program}
  <Scrollcard title={program.title} description={program.description}  imageUrl={program.imageUrl}/>
{/each}

    <!-- <ProjectsContainer title="Nexus 1.0" description="A ticket booking web app"/> -->
</div>

