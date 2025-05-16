<script lang="ts">
	import Card from "./card.svelte";

   let projects = [
    {
        title: "MealMate Delivery App",
        author: "Elikem Sek",
        description: "A mobile app for food delivery, allowing users to order meals from local restaurants.",
        imageUrl: "https://media-hosting.imagekit.io/21c691b9e9ea435c/logo.png",
        tags: ["Flutter", "Firebase", "UI/UX"]
    },
    {
        title: "KW-Machines",
        author: "Elikem Sek",
        description: "A web app for managing and tracking machine operations.",
        imageUrl: "https://media-hosting.imagekit.io/9daa17777f974dc0/machine.jpeg",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Exeat Keeper App(Android)",
        author: "Elikem Sek",
        description: "A mobile app for managing and tracking senior high school students in and off Campus.",
        imageUrl: "https://media-hosting.imagekit.io/e48d3aa3ff7d4eb1/exeat.png",
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