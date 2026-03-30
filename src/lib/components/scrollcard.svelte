<script lang="ts">
  import { onMount } from 'svelte';

  let visible = false;
  let cardRef: HTMLElement;

  onMount(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) visible = true;
    }, { threshold: 0.2 });

    if (cardRef) observer.observe(cardRef);
    return () => observer.disconnect();
  });

  export let title = '';
  export let description = '';
  export let imageUrl = '';
</script>

<div
  bind:this={cardRef}
  class="card w-full transition-all duration-700 pb-12"
  class:opacity-0={!visible}
  class:translate-y-10={!visible}
>
  <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

    <!-- Image -->
    <div class="relative group shrink-0">
      <div class="absolute inset-0 bg-linear-to-r from-rose-400 to-rose-600 rounded-2xl blur-xl opacity-30"></div>
      <div class="relative h-72 w-72 lg:h-80 lg:w-80 bg-white border border-slate-200 rounded-2xl p-2 shadow-sm">
        <img
          src={imageUrl}
          alt={title}
          class="w-full h-full object-cover rounded-xl rotate-3 hover:rotate-0 transition-transform duration-300"
        />
      </div>
    </div>

    <!-- Text -->
    <div class="flex-1 text-center lg:text-left">
      <p class="text-3xl lg:text-4xl font-extrabold text-slate-900">{title}</p>
      <p class="text-slate-500 mt-3 text-sm lg:text-base leading-relaxed">{description}</p>
    </div>

  </div>
</div>
