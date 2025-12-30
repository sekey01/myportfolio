<script lang="ts">

</script>

<div class="relative h-10 w-10 rounded-full overflow-hidden hover:scale-110 transition-transform">
    <!-- Rotating gradient border -->
    <div class="absolute inset-0 bg-gradient-to-r from-green-600 via-gray-800 to-black animate-spin-slow"></div>
    
    <!-- Inner circle -->
    <div class="absolute inset-[2px] bg-gray-900 rounded-full animate-pulse-subtle"></div>
</div>

<style>
    .animate-spin-slow {
        animation: spin 3s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes pulse-subtle {
        0%, 100% {
            background-color: rgb(17, 24, 39); /* gray-900 */
        }
        50% {
            background-color: rgb(31, 41, 55); /* gray-800 */
        }
    }

    .animate-pulse-subtle {
        animation: pulse-subtle 2s ease-in-out infinite;
    }
</style>