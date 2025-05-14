<script lang="ts">
	import Card from './card.svelte';
	import CenterIntro from "./center_intro.svelte";
	import Experiences from './experiences.svelte';
	import InitRow from "./init_row.svelte";
</script>

<div class="main-page">
	<div class=" p-8 overflow-y-auto"> <!-- Changed from fixed to scrollable container -->
		<div class="max-w-4xl mx-auto space-y-12"> <!-- Added max-width and spacing -->
			<InitRow />
			<CenterIntro />
    </div>
			
			<div class="flex flex-col items-center gap-2">
				<Card />
				<Experiences />
			</div>
	</div>
</div>

<style>
	.main-page {
		margin: 0 auto;
		height: 100vh;
		background-color: #fffefe;
		overflow: hidden; /* Prevents double scrollbars */
	}

	/* Optional: Custom scrollbar styling */
	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 4px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>