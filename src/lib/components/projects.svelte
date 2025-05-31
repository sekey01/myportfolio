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
        
        const section = document.querySelector('.projects-section');
        if (section) observer.observe(section);
        
        return () => observer.disconnect();
    });

    type ProjectColor = 'yellow' | 'blue' | 'green' | 'purple' | 'cyan' | 'orange';

    interface Project {
        title: string;
        category: string;
        description: string;
        tags: string[];
        status: string;
        impact: string;
        icon: string;
        color: ProjectColor;
    }

    let projects: Project[] = [
        {
            title: "MealMate Delivery Platform",
            category: "Mobile App Development",
            description: "🍔 Revolutionary food delivery ecosystem serving 5,000+ daily orders with real-time tracking, AI-powered recommendations, and seamless payment integration.",
            tags: ["Flutter", "Firebase", "UI/UX", "Real-time"],
            status: "Live Production",
            impact: "5K+ Daily Users",
            icon: "🚀",
            color: "yellow"
        },
        {
            title: "KW-Machines Industrial Suite",
            category: "Enterprise Web Application",
            description: "⚙️ Comprehensive industrial automation platform managing 50+ manufacturing units with IoT integration, predictive maintenance, and performance analytics.",
            tags: ["React", "Node.js", "MongoDB", "IoT"],
            status: "Enterprise Active",
            impact: "40% Efficiency Boost",
            icon: "🏭",
            color: "blue"
        },
        {
            title: "Exeat Keeper Campus Manager",
            category: "Educational Management System",
            description: "🎓 Smart campus management solution tracking 2,000+ students with biometric integration, real-time notifications, and comprehensive reporting dashboard.",
            tags: ["Android", "Kotlin", "Firebase", "Biometric"],
            status: "Institutional Deployment",
            impact: "2K+ Students Managed",
            icon: "📚",
            color: "green"
        },
        {
            title: "Node.js Authentication API",
            category: "Backend Infrastructure",
            description: "🔐 Enterprise-grade authentication microservice handling 10,000+ concurrent users with JWT tokens, OAuth integration, and advanced security protocols.",
            tags: ["Node.js", "JWT", "OAuth", "Security"],
            status: "Production Ready",
            impact: "10K+ Concurrent Users",
            icon: "🛡️",
            color: "purple"
        },
        {
            title: "Telegram Bot Creator Studio",
            category: "Automation Platform",
            description: "🤖 No-code bot development platform enabling businesses to create intelligent Telegram bots with AI integration and automated workflows.",
            tags: ["Python", "Telegram API", "AI", "Automation"],
            status: "SaaS Platform",
            impact: "500+ Bots Created",
            icon: "🤖",
            color: "cyan"
        },
        {
            title: "Visual Basic & PHP Admin Suite",
            category: "Legacy System Modernization",
            description: "💻 Hybrid desktop-web administration system bridging legacy VB applications with modern PHP backends for seamless data management.",
            tags: ["Visual Basic", "PHP", "MySQL", "Legacy Integration"],
            status: "Enterprise Migration",
            impact: "Legacy System Revived",
            icon: "🔧",
            color: "orange"
        }
    ];

    const colorSchemes = {
        yellow: {
            bg: "from-yellow-400/10 to-yellow-600/10",
            border: "border-yellow-400/30 hover:border-yellow-400/60",
            glow: "hover:shadow-yellow-400/20",
            text: "text-yellow-400",
            badge: "bg-yellow-400"
        },
        blue: {
            bg: "from-blue-400/10 to-blue-600/10",
            border: "border-blue-400/30 hover:border-blue-400/60",
            glow: "hover:shadow-blue-400/20",
            text: "text-blue-400",
            badge: "bg-blue-400"
        },
        green: {
            bg: "from-green-400/10 to-green-600/10",
            border: "border-green-400/30 hover:border-green-400/60",
            glow: "hover:shadow-green-400/20",
            text: "text-green-400",
            badge: "bg-green-400"
        },
        purple: {
            bg: "from-purple-400/10 to-purple-600/10",
            border: "border-purple-400/30 hover:border-purple-400/60",
            glow: "hover:shadow-purple-400/20",
            text: "text-purple-400",
            badge: "bg-purple-400"
        },
        cyan: {
            bg: "from-cyan-400/10 to-cyan-600/10",
            border: "border-cyan-400/30 hover:border-cyan-400/60",
            glow: "hover:shadow-cyan-400/20",
            text: "text-cyan-400",
            badge: "bg-cyan-400"
        },
        orange: {
            bg: "from-orange-400/10 to-orange-600/10",
            border: "border-orange-400/30 hover:border-orange-400/60",
            glow: "hover:shadow-orange-400/20",
            text: "text-orange-400",
            badge: "bg-orange-400"
        }
    };
</script>

<div class="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8 projects-section">
    <!-- Header Section -->
    <div class="text-center mb-20 max-w-5xl mx-auto {isVisible ? 'animate-fade-in-up' : 'opacity-0'}">
        <div class="inline-block mb-6">
            <span class="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-black uppercase tracking-wider">
                Portfolio Showcase
            </span>
        </div>
        
        <h2 class="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-white via-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-6 animate-gradient-text">
            Game-Changing Projects
        </h2>
        
        <p class="text-xl sm:text-2xl text-gray-300 font-bold max-w-4xl mx-auto leading-relaxed mb-8">
            💡 <span class="text-yellow-400">Turning Complex Challenges into Profitable Solutions</span> - Each project represents a success story
        </p>
        
        <div class="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            <div class="bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-xl px-4 py-2">
                <span class="text-yellow-400 font-bold">🎯 100% Client Satisfaction</span>
            </div>
            <div class="bg-gradient-to-r from-blue-400/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-xl px-4 py-2">
                <span class="text-blue-400 font-bold">⚡ 20+ Technologies Mastered</span>
            </div>
            <div class="bg-gradient-to-r from-green-400/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl px-4 py-2">
                <span class="text-green-400 font-bold">📈 Proven ROI Results</span>
            </div>
        </div>
        
        <div class="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-8 rounded-full animate-pulse"></div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
        {#each projects as project, index}
            <div class="group bg-gradient-to-br {colorSchemes[project.color].bg} backdrop-blur-sm border {colorSchemes[project.color].border} rounded-2xl p-6 transition-all duration-500 hover:scale-105 {colorSchemes[project.color].glow} hover:shadow-2xl {isVisible ? 'animate-slide-up' : 'opacity-0'}" 
                 style="animation-delay: {index * 0.1}s;">
                
                <!-- Project Header -->
                <div class="flex items-start justify-between mb-4">
                    <div class="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {project.icon}
                    </div>
                    <div class="flex flex-col items-end gap-2">
                        <span class="{colorSchemes[project.color].badge} text-black px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                            {project.status}
                        </span>
                        <span class="bg-gray-800 {colorSchemes[project.color].text} px-3 py-1 rounded-full text-xs font-bold">
                            {project.impact}
                        </span>
                    </div>
                </div>

                <!-- Project Title & Category -->
                <div class="mb-4">
                    <h3 class="text-xl md:text-2xl font-black text-white mb-2 group-hover:{colorSchemes[project.color].text} transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p class="{colorSchemes[project.color].text} font-bold text-sm uppercase tracking-wider">
                        {project.category}
                    </p>
                </div>

                <!-- Project Description -->
                <p class="text-gray-300 font-semibold leading-relaxed mb-6 text-sm">
                    {project.description}
                </p>

                <!-- Tech Stack Tags -->
                <div class="flex flex-wrap gap-2 mb-6">
                    {#each project.tags as tag}
                        <span class="bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full text-xs font-bold border border-gray-700 hover:border-gray-500 transition-colors">
                            {tag}
                        </span>
                    {/each}
                </div>

                <!-- Project Actions -->
                <div class="flex gap-3">
                    <button class="{colorSchemes[project.color].badge} text-black px-4 py-2 rounded-full text-sm font-black hover:scale-105 transition-all duration-300 flex-1">
                        View Details
                    </button>
                    <button class="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-700 transition-colors border border-gray-600">
                        Demo
                    </button>
                </div>
            </div>
        {/each}
    </div>

    <!-- Professional CTA Section -->
    <div class="text-center {isVisible ? 'animate-fade-in-up' : 'opacity-0'}" style="animation-delay: 0.8s;">
        <div class="bg-gradient-to-r from-yellow-400/10 via-purple-400/10 to-blue-400/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
            <!-- Background Glow Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-400/5 to-blue-400/5 animate-pulse"></div>
            
            <div class="relative z-10">
                <h3 class="text-3xl md:text-4xl font-black text-white mb-4">
                    🚀 Ready to Scale Your Business?
                </h3>
                <p class="text-gray-300 font-bold text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    Let's transform your ideas into market-dominating applications that drive growth, engage users, and maximize ROI
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50">
                        Start Your Project Today →
                    </button>
                    <button class="border-2 border-white text-white font-black px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300">
                        Schedule Consultation
                    </button>
                </div>
                
                <div class="mt-8 flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-400">
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Available for New Projects
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                        24/7 Support Included
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                        Money-Back Guarantee
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .text-transparent {
        -webkit-text-fill-color: transparent;
    }

    /* Professional animations */
    @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideUp {
        0% { opacity: 0; transform: translateY(50px); }
        100% { opacity: 1; transform: translateY(0); }
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

    .animate-gradient-text {
        background-size: 200% 200%;
        animation: gradientShift 3s ease infinite;
    }

    /* Custom scrollbar */
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

    /* Enhanced glow effects */
    .group:hover {
        filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
    }

    /* Mobile responsive adjustments */
    @media (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>