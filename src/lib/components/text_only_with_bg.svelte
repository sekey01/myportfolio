<script>
    export let text;
    export let color;
    export let fontSize;
    export let marginTop;
    export let fontfamily;
    export let bgcolor;
    export let title;
    export let content;
    export let ctaText;
    export let isVisible;
</script>
<style>
    .text{
        text-align: center;
        font-size: 2rem;
        border-radius: 30px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(175, 57, 57, 0.2);
    }

    .text-transparent {
        -webkit-text-fill-color: transparent;
    }

    @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
</style>
<div class="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center {isVisible ? 'animate-fade-in-up' : 'opacity-0'}">
            <h2 class="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {title}
            </h2>
            <p class="text-gray-600 text-lg md:text-xl leading-relaxed">
                {content}
            </p>
            {#if ctaText}
                <button class="mt-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-400/50">
                    {ctaText}
                </button>
            {/if}
        </div>
    </div>
</div>
