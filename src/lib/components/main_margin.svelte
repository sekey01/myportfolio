<script lang="ts">
	import Books from './books.svelte';
	import CenterIntro from "./center_intro.svelte";
	import Experiences from './experiences.svelte';
	import Footer from './footer.svelte';
	import InitRow from "./init_row.svelte";
	import Navbar from './navbar.svelte';
	import Projects from './projects.svelte';
	import Socials from './socials.svelte';
</script>

<div class="main-page">
	<Navbar/>
	<InitRow/>
	<CenterIntro/>
	<Experiences/>
	<Projects/>
	<Footer/>
</div>

<style>
	.main-page {
		padding: 0;
		margin: 0 auto;
		min-height: 100vh;
		background-color: #000000;
		overflow-x: hidden;
		/* Professional container spacing */
		max-width: 100%;
	}

	/* Add proper section spacing through global styles */
	.main-page :global(> *) {
		padding-left: clamp(1rem, 4vw, 2rem);
		padding-right: clamp(1rem, 4vw, 2rem);
	}

	/* Special handling for full-width components */
	.main-page :global(nav),
	.main-page :global(footer) {
		padding-left: 0;
		padding-right: 0;
	}

	/* Responsive vertical spacing between sections */
	.main-page :global(> * + *) {
		margin-top: clamp(2rem, 6vw, 4rem);
	}

	/* Enhanced scrollbar styling */
	:global(html) {
		scroll-behavior: smooth;
		scrollbar-width: thin;
		scrollbar-color: #facc15 #1a1a1a;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
	}

	:global(::-webkit-scrollbar-track) {
		background: #1a1a1a;
		border-radius: 4px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: linear-gradient(180deg, #facc15, #eab308);
		border-radius: 4px;
		border: 1px solid #1a1a1a;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: linear-gradient(180deg, #eab308, #d97706);
	}

	/* Professional responsive breakpoints */
	@media (max-width: 640px) {
		.main-page :global(> *) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		
		.main-page :global(> * + *) {
			margin-top: 2rem;
		}
	}

	@media (min-width: 1200px) {
		.main-page {
			max-width: 1200px;
		}
	}
</style>