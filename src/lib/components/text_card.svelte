<script>
     let title = "Follow";
     let description = "Follow me on all Social Media @";
     let imageUrl = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGltYWdlfGVufDB8fHx8MTY5MjQ1NzE3Ng&ixlib=rb-4.0.3&q=80&w=1080";
</script>
<div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 {isVisible ? 'animate-fade-in-up' : 'opacity-0'}">
    <div class="flex items-center gap-4 mb-4">
        {#if icon}
            <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <span class="text-2xl">{icon}</span>
            </div>
        {/if}
        <div>
            <h3 class="text-xl font-bold text-gray-800">{title}</h3>
            {#if subtitle}
                <p class="text-blue-600 font-semibold">{subtitle}</p>
            {/if}
        </div>
    </div>
    <p class="text-gray-600 mb-4">{content}</p>
    {#if tags && tags.length > 0}
        <div class="flex flex-wrap gap-2">
            {#each tags as tag}
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                    {tag}
                </span>
            {/each}
        </div>
    {/if}
    {#if ctaText}
        <button class="mt-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-400/50">
            {ctaText}
        </button>
    {/if}
</div>

<style>
    @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
</style>
