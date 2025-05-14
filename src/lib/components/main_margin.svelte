<script lang="ts">
	import Books from './books.svelte';
	import CenterIntro from "./center_intro.svelte";
	import Experiences from './experiences.svelte';
	import InitRow from "./init_row.svelte";
	import Projects from './projects.svelte';
	import Socials from './socials.svelte';
</script>

<div class="main-page">
	<div class=" p-8 overflow-y-auto"> <!-- Changed from fixed to scrollable container -->
		<div class="flex flex-col gap-20 max-w-6xl mx-auto space-y-2  "> <!-- Added max-width and spacing -->
			<InitRow />

			<CenterIntro />

			<Socials />	
    </div>
			
			<div class="flex flex-col items-center justify-center space-x-10 mt-20 mb-20">
				<Books />
				<Experiences />
				<Projects />

			</div>
	</div>
</div>

<style>
	.main-page {
		margin: 0 auto;
		height: 300vh;
		background-color: #ededf3;
		overflow: scroll; /* Prevents double scrollbars */
	}

	/* Optional: Custom scrollbar styling */
	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-track {
		background: #f9f8f8;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 4px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>