<script lang="ts">
	import Card from "./card.svelte";

   let projects = [
    {
        title: "MealMate Delivery App",
        author: "Elikem Sek",
        description: "A mobile app for food delivery, allowing users to order meals from local restaurants.",
        imageUrl: "https://cdn.vectorstock.com/i/2000v/43/65/food-delivery-icon-set-vector-4904365.avif",
        tags: ["Flutter", "Firebase", "UI/UX"]
    },
    {
        title: "KW-Machines",
        author: "Elikem Sek",
        description: "A web app for managing and tracking machine operations.",
        imageUrl: "https://media.istockphoto.com/id/1629004972/vector/helmet-and-gear-safety-and-protection-engineer-construction-labor-and-engineering-symbols.jpg?s=612x612&w=0&k=20&c=2Yu-It1BrUTjgai1e6WJvr7sO8hbqHtCgT02rjxfb-U=",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Exeat Keeper App(Android)",
        author: "Elikem Sek",
        description: "A mobile app for managing and tracking senior high school students in and off Campus.",
        imageUrl: "https://images.vexels.com/media/users/3/224234/isolated/preview/ff7c525c1c3e1bef640644542001e1fd-online-school-logo.png",
        tags: ["Android", "Kotlin", "Firebase"]
    }
   ]
</script>

<div class="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
    <!-- Header Section -->
    <div class="text-center mb-16 max-w-4xl mx-auto">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-4">My Projects</h2>
        <p class="text-xl sm:text-2xl font-mono text-gray-300 border-t border-b border-yellow-400 py-4">
            A collection of projects that have influenced my journey
        </p>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {#each projects as project}
            <Card
                title={project.title}
                author={project.author}
                description={project.description}
                imageUrl={project.imageUrl}
            />
        {/each}
    </div>

    <!-- View More Button -->
    <div class="text-center mt-16">
        <button class="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-yellow-300/50">
            View All Projects
        </button>
    </div>
</div>

<style>
    .projects-container {
        scrollbar-width: thin;
        scrollbar-color: #facc15 transparent;
    }
    
    .projects-container::-webkit-scrollbar {
        height: 6px;
    }
    
    .projects-container::-webkit-scrollbar-thumb {
        background-color: #facc15;
        border-radius: 3px;
    }
</style>