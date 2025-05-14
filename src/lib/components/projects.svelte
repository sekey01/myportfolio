<script lang="ts">
	import Card from "./card.svelte";


   let projects =[
    {
        title: "MealMate Delivery App",
        author: "Elikem Sek",
        description: "A mobile app for food delivery, allowing users to order meals from local restaurants.",
        imageUrl:" ../src/lib/assets/images/delivery1.jpg"
        
    },
    {
        title: "KW-Machines",
        author: "Elikem Sek",
        description: "A web app for managing and tracking machine operations.",
        imageUrl:" ../src/lib/assets/images/machine.jpeg"
    
    },

    {
        title: "Exeat Keeper App(Android)",
        author: "Elikem Sek",
        description: "A mobile app for managing and tracking senior high school students in and off Campus.",
        imageUrl:" ../src/lib/assets/images/exeat.png"
    }

   ]

</script>
<div class="flex flex-col items-center gap-10 ">
    <h2 class="text-6xl font-bold">Projects</h2>
    <p class="text-2xl font-mono">A collection of projects that have influenced my journey</p>
    <div class="books-container">
        {#each projects as project}
        
        <Card
            title={project.title}
            author={project.author}
            description={project.description}
            imageUrl={project.imageUrl}
        />
    
        {/each}
    </div>
</div>

   