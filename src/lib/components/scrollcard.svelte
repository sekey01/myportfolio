<script>
  import { onMount } from 'svelte';
  
  let visible = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) visible = true;
    }, { threshold: 0.3 });
    
    const card = document.querySelector('.card');
    if (card) observer.observe(card);
    return () => observer.disconnect();
  });

  export let title = "Eli Thompson";
  export let description = "Creative Designer";
  export let imageUrl = "/src/lib/assets/images/post1.jpeg";
</script>

<div class="card transition-all duration-700 pb-19" class:opacity-0={!visible} class:translate-y-10={!visible}>
  <div class="relative group">
    <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-500 rounded-2xl blur-lg opacity-50"></div>
    <div class="relative h-80 w-80 bg-gray-800 rounded-2xl p-2">
      <img 
        src={imageUrl} 
        alt={title} 
        class="w-full h-full object-cover rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300"
      />
    </div>
  </div>
  
  <div class="mt-6 text-center">
    <p class="text-4xl font-extrabold text-white">{title}</p>
    <p class="text-gray-400 mt-2">{description}</p>
  </div>
</div>