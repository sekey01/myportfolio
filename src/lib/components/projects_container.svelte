
<script lang="ts">
export let title: string = "Project Title";
export let description: string = "Project Description";
</script>

<div class="relative flex flex-row w-[80%] h-20 rounded-xl overflow-hidden">
        <!-- Rotating animated border -->
        <div class="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 animate-spin-slow"></div>
        
        <!-- Inner content -->
        <div class="absolute inset-[2px] bg-black rounded-xl flex flex-row">
            <div class="w-[30%] border-r-2 border-gray-500 flex justify-center items-center rounded-2xl">
                <h1 class="text-white">PJ1</h1>
            </div>

            <div class="w-[70%] flex flex-col justify-start items-start rounded-2xl">
                <h1 class="text-green-600 p-2"> {title}</h1>
                <p class="text-white pl-2"> {description}</p>
            </div>
        </div>
    </div>
        


<style>
    .animate-spin-slow {
        animation: spin 4s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>