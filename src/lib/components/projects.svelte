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
            bg: "from-yellow-50 to-yellow-100",
            border: "border-yellow-200 hover:border-yellow-300",
            glow: "hover:shadow-yellow-200",
            text: "text-yellow-600",
            badge: "bg-yellow-100 text-yellow-800"
        },
        blue: {
            bg: "from-blue-50 to-blue-100",
            border: "border-blue-200 hover:border-blue-300",
            glow: "hover:shadow-blue-200",
            text: "text-blue-600",
            badge: "bg-blue-100 text-blue-800"
        },
        green: {
            bg: "from-green-50 to-green-100",
            border: "border-green-200 hover:border-green-300",
            glow: "hover:shadow-green-200",
            text: "text-green-600",
            badge: "bg-green-100 text-green-800"
        },
        purple: {
            bg: "from-purple-50 to-purple-100",
            border: "border-purple-200 hover:border-purple-300",
            glow: "hover:shadow-purple-200",
            text: "text-purple-600",
            badge: "bg-purple-100 text-purple-800"
        },
        cyan: {
            bg: "from-cyan-50 to-cyan-100",
            border: "border-cyan-200 hover:border-cyan-300",
            glow: "hover:shadow-cyan-200",
            text: "text-cyan-600",
            badge: "bg-cyan-100 text-cyan-800"
        },
        orange: {
            bg: "from-orange-50 to-orange-100",
            border: "border-orange-200 hover:border-orange-300",
            glow: "hover:shadow-orange-200",
            text: "text-orange-600",
            badge: "bg-orange-100 text-orange-800"
        }
    };
</script>

<div class="projects-section py-20">
    <!-- Section Header -->
    <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
        </h2>
        <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            A showcase of my most impactful work, demonstrating expertise across various technologies and industries
        </p>
        <div class="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-8 rounded-full animate-pulse"></div>
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
                        <span class="{colorSchemes[project.color].badge} px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                            {project.status}
                        </span>
                        <span class="bg-white {colorSchemes[project.color].text} px-3 py-1 rounded-full text-xs font-bold">
                            {project.impact}
                        </span>
                    </div>
                </div>

                <!-- Project Title & Category -->
                <div class="mb-4">
                    <h3 class="text-xl md:text-2xl font-black text-gray-800 mb-2 group-hover:{colorSchemes[project.color].text} transition-colors duration-300">
                        {project.title}
                    </h3>
                    <p class="{colorSchemes[project.color].text} font-bold text-sm uppercase tracking-wider">
                        {project.category}
                    </p>
                </div>

                <!-- Project Description -->
                <p class="text-gray-600 font-semibold leading-relaxed mb-6 text-sm">
                    {project.description}
                </p>

                <!-- Tech Stack Tags -->
                <div class="flex flex-wrap gap-2 mb-6">
                    {#each project.tags as tag}
                        <span class="bg-white text-gray-600 px-3 py-1 rounded-full text-xs font-bold border border-gray-200 hover:border-gray-300 transition-colors">
                            {tag}
                        </span>
                    {/each}
                </div>

                <!-- Project Actions -->
                <div class="flex gap-3">
                    <button class="{colorSchemes[project.color].badge} px-4 py-2 rounded-full text-sm font-black hover:scale-105 transition-all duration-300 flex-1">
                        View Details
                    </button>
                    <button class="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors border border-gray-200">
                        Demo
                    </button>
                </div>
            </div>
        {/each}
    </div>

    <!-- Professional CTA Section -->
    <div class="text-center {isVisible ? 'animate-fade-in-up' : 'opacity-0'}" style="animation-delay: 0.8s;">
        <div class="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
            <!-- Background Glow Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-blue-100/50 animate-pulse"></div>
            
            <div class="relative z-10">
                <h3 class="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                    🚀 Ready to Scale Your Business?
                </h3>
                <p class="text-gray-600 font-bold text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    Let's transform your ideas into market-dominating applications that drive growth, engage users, and maximize ROI
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-black px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-400/50">
                        Start Your Project Today →
                    </button>
                    <button class="border-2 border-gray-800 text-gray-800 font-black px-8 py-4 rounded-full text-lg hover:bg-gray-800 hover:text-white transition-all duration-300">
                        Schedule Consultation
                    </button>
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
        scrollbar-color: #3b82f6 transparent;
    }

    .projects-container::-webkit-scrollbar {
        height: 6px;
    }

    .projects-container::-webkit-scrollbar-thumb {
        background-color: #3b82f6;
        border-radius: 3px;
    }

    /* Enhanced glow effects */
    .group:hover {
        filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.05));
    }

    /* Mobile responsive adjustments */
    @media (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>