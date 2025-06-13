<script lang="ts">
    import { onMount } from 'svelte';
    
    let isVisible = false;
    
    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    isVisible = true;
                }
            });
        });
        
        const section = document.querySelector('.experience-section');
        if (section) observer.observe(section);
        
        return () => observer.disconnect();
    });

    const experiences = [
        {
            icon: '🚀',
            title: 'Founder & CEO @ MealMate',
            company: 'Nov 2024 - Present',
            description: 'Leading a team to build innovative meal planning and delivery solutions that serve thousands of users daily.',
            tags: ['Strategy', 'Leadership', 'Innovation']
        },
        {
            icon: '⚙️',
            title: 'Founder @ KW-Machines',
            company: '2024 - Present',
            description: 'Developing cutting-edge automation solutions that optimize manufacturing processes and increase productivity by 40%.',
            tags: ['Automation', 'IoT', 'Manufacturing']
        },
        {
            icon: '💻',
            title: 'Software Engineering Intern @ Tudu',
            company: '2023',
            description: 'Contributed to robust API integrations and backend architecture for productivity platforms serving 10K+ users.',
            tags: ['Backend', 'APIs', 'Productivity']
        }
    ];
</script>

<div class="experience-section bg-gradient-to-br from-gray-50 via-white to-gray-50 py-6">
    <!-- Section Header -->
    <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
        </h2>
        <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            A journey through my professional growth and achievements
        </p>
        <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-8 rounded-full animate-pulse"></div>
    </div>

    <!-- Experience Timeline -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-12">
            {#each experiences as experience, index}
                <div class="relative {isVisible ? 'animate-fade-in-up' : 'opacity-0'}" style="animation-delay: {index * 0.2}s;">
                    <div class="flex flex-col md:flex-row gap-8">
                        <div class="md:w-5/12">
                            <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                                <div class="flex items-center gap-4 mb-4">
                                    <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                        <span class="text-2xl">{experience.icon}</span>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-800">{experience.title}</h3>
                                        <p class="text-blue-600 font-semibold">{experience.company}</p>
                                    </div>
                                </div>
                                <p class="text-gray-600 mb-4">{experience.description}</p>
                                <div class="flex flex-wrap gap-2">
                                    {#each experience.tags as tag}
                                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                                            {tag}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        </div>
                        <div class="hidden md:block md:w-2/12 text-center">
                            <div class="text-blue-600 text-2xl animate-pulse">🎯</div>
                        </div>
                        <div class="md:w-5/12"></div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16 {isVisible ? 'animate-fade-in-up' : 'opacity-0'}" style="animation-delay: 0.8s;">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 class="text-2xl md:text-3xl font-black text-gray-800 mb-4">
                Ready to Transform Your Business? 🚀
            </h3>
            <p class="text-gray-600 font-semibold text-lg mb-6">
                Let's collaborate and turn your vision into a market-leading digital solution
            </p>
            <button class="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-black px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-400/50">
                Let's Build Something Amazing Together →
            </button>
        </div>
    </div>
</div>

<style>
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