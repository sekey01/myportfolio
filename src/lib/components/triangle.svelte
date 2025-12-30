<script lang="ts">
	import Rex from "./rex.svelte";

    let letters:number[] = [];
     for (let i:number = 1; i <=20; i++){
       letters.push(i);
     }
 
</script>

<div class="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-6">
 {#each letters as letter}
   <Rex />
 {/each}
</div>