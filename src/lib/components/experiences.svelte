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
</script>

<div class="px-4 py-12 sm:py-16 md:py-20 max-w-6xl mx-auto experience-section bg-gradient-to-br from-gray-900 via-black to-gray-800">
    <!-- Header with compelling tagline -->
    <div class="text-center mb-16 {isVisible ? 'animate-fade-in-up' : 'opacity-0'}">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-yellow-400 to-yellow-500 bg-clip-text text-transparent animate-gradient-text">
            Professional Journey
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 font-bold max-w-3xl mx-auto leading-relaxed">
            🚀 <span class="text-yellow-400">Transforming Ideas into Reality</span> - Where Innovation Meets Excellence
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-6 rounded-full"></div>
    </div>

    <!-- Compelling Stats Bar -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 {isVisible ? 'animate-slide-up' : 'opacity-0'}">
        <div class="text-center bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div class="text-3xl font-black text-yellow-400 mb-2">3+</div>
            <div class="text-gray-300 font-bold">Years Experience</div>
        </div>
        <div class="text-center bg-gradient-to-br from-blue-400/10 to-blue-600/10 backdrop-blur-sm border border-blue-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div class="text-3xl font-black text-blue-400 mb-2">2</div>
            <div class="text-gray-300 font-bold">Companies Founded</div>
        </div>
        <div class="text-center bg-gradient-to-br from-purple-400/10 to-purple-600/10 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:scale-105 transition-all duration-300">
            <div class="text-3xl font-black text-purple-400 mb-2">100%</div>
            <div class="text-gray-300 font-bold">Success Rate</div>
        </div>
    </div>

    <!-- Professional Value Proposition -->
    <div class="text-center mb-12 {isVisible ? 'animate-fade-in' : 'opacity-0'}">
        <p class="text-lg text-gray-300 font-semibold max-w-4xl mx-auto leading-relaxed">
            💡 <em>"I don't just build applications - I craft digital experiences that drive business growth and user engagement."</em>
        </p>
    </div>

    <!-- Experiences Timeline -->
    <div class="relative">
        <!-- Vertical Line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-blue-400 to-purple-400 transform md:-translate-x-0.5"></div>
        
        <div class="flex flex-col gap-12">
            <!-- Experience 1 - CEO Position -->
            <div class="relative {isVisible ? 'animate-slide-right' : 'opacity-0'}" style="animation-delay: 0.2s;">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="md:w-5/12 md:pr-8">
                        <div class="bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-2xl p-6 md:p-8 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 hover:shadow-yellow-400/20 group">
                            <div class="absolute -left-6 md:-left-4 top-8 h-6 w-6 rounded-full bg-yellow-500 border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                            
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-black">CURRENT</div>
                                <div class="text-yellow-400 font-bold">🚀 Leadership Role</div>
                            </div>
                            
                            <h2 class="text-2xl md:text-3xl font-black mb-3 text-white group-hover:text-yellow-400 transition-colors">
                                Founder & CEO @ MealMate
                            </h2>
                            <p class="text-yellow-400 font-bold mb-4 text-lg">Nov 2024 - Present | Full-Time Leadership</p>
                            
                            <p class="text-gray-300 font-semibold leading-relaxed mb-4">
                                🍔 <strong>Revolutionizing Food-Tech:</strong> Leading a team to build innovative meal planning and delivery solutions that serve thousands of users daily.
                            </p>
                            
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">Strategy</span>
                                <span class="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">Leadership</span>
                                <span class="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">Innovation</span>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block md:w-2/12 text-center">
                        <div class="text-yellow-400 text-2xl animate-pulse">💼</div>
                    </div>
                    <div class="md:w-5/12"></div>
                </div>
            </div>

            <!-- Experience 2 - Founder Position -->
            <div class="relative {isVisible ? 'animate-slide-left' : 'opacity-0'}" style="animation-delay: 0.4s;">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="md:w-5/12"></div>
                    <div class="hidden md:block md:w-2/12 text-center">
                        <div class="text-blue-400 text-2xl animate-pulse">⚙️</div>
                    </div>
                    <div class="md:w-5/12 md:pl-8">
                        <div class="bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-2xl p-6 md:p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105 hover:shadow-blue-400/20 group">
                            <div class="absolute -left-6 md:-right-4 top-8 h-6 w-6 rounded-full bg-blue-500 border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                            
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-blue-400 text-black px-3 py-1 rounded-full text-sm font-black">ACTIVE</div>
                                <div class="text-blue-400 font-bold">🔧 Innovation</div>
                            </div>
                            
                            <h2 class="text-2xl md:text-3xl font-black mb-3 text-white group-hover:text-blue-400 transition-colors">
                                Founder @ KW-Machines
                            </h2>
                            <p class="text-blue-400 font-bold mb-4 text-lg">2024 - Present | Industrial Innovation</p>
                            
                            <p class="text-gray-300 font-semibold leading-relaxed mb-4">
                                🏭 <strong>Industrial Automation Expert:</strong> Developing cutting-edge automation solutions that optimize manufacturing processes and increase productivity by 40%.
                            </p>
                            
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold">Automation</span>
                                <span class="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold">IoT</span>
                                <span class="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full text-sm font-bold">Manufacturing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experience 3 - Intern Position -->
            <div class="relative {isVisible ? 'animate-slide-right' : 'opacity-0'}" style="animation-delay: 0.6s;">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="md:w-5/12 md:pr-8">
                        <div class="bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl rounded-2xl p-6 md:p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 hover:shadow-purple-400/20 group">
                            <div class="absolute -left-6 md:-left-4 top-8 h-6 w-6 rounded-full bg-purple-500 border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                            
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-purple-400 text-black px-3 py-1 rounded-full text-sm font-black">FOUNDATION</div>
                                <div class="text-purple-400 font-bold">💻 Development</div>
                            </div>
                            
                            <h2 class="text-2xl md:text-3xl font-black mb-3 text-white group-hover:text-purple-400 transition-colors">
                                Software Engineering Intern @ Tudu
                            </h2>
                            <p class="text-purple-400 font-bold mb-4 text-lg">2023 | Remote Excellence</p>
                            
                            <p class="text-gray-300 font-semibold leading-relaxed mb-4">
                                💻 <strong>Backend Development Specialist:</strong> Contributed to robust API integrations and backend architecture for productivity platforms serving 10K+ users.
                            </p>
                            
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm font-bold">Backend</span>
                                <span class="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm font-bold">APIs</span>
                                <span class="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm font-bold">Productivity</span>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block md:w-2/12 text-center">
                        <div class="text-purple-400 text-2xl animate-pulse">🎯</div>
                    </div>
                    <div class="md:w-5/12"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16 {isVisible ? 'animate-fade-in-up' : 'opacity-0'}" style="animation-delay: 0.8s;">
        <div class="bg-gradient-to-r from-yellow-400/10 to-purple-400/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 class="text-2xl md:text-3xl font-black text-white mb-4">
                Ready to Transform Your Business? 🚀
            </h3>
            <p class="text-gray-300 font-semibold text-lg mb-6">
                Let's collaborate and turn your vision into a market-leading digital solution
            </p>
            <button class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50">
                Let's Build Something Amazing Together →
            </button>
        </div>
    </div>
</div>

<style>
    .text-transparent {
        -webkit-text-fill-color: transparent;
    }

    /* Professional animations */
    @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideRight {
        0% { opacity: 0; transform: translateX(-50px); }
        100% { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideLeft {
        0% { opacity: 0; transform: translateX(50px); }
        100% { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }

    .animate-slide-up {
        animation: slideUp 0.8s ease-out forwards;
    }

    .animate-slide-right {
        animation: slideRight 0.8s ease-out forwards;
    }

    .animate-slide-left {
        animation: slideLeft 0.8s ease-out forwards;
    }

    .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
    }

    .animate-gradient-text {
        background-size: 200% 200%;
        animation: gradientShift 3s ease infinite;
    }

    /* Mobile responsive timeline */
    @media (max-width: 768px) {
        .absolute {
            left: 1rem !important;
        }
    }
</style>