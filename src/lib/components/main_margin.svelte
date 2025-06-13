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
		background-color: #ffffff;
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
		scrollbar-color: #3b82f6 #f3f4f6;
	}

	:global(::-webkit-scrollbar) {
		width: 6px;
	}

	:global(::-webkit-scrollbar-track) {
		background: #f3f4f6;
		border-radius: 4px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: #3b82f6;
		border-radius: 4px;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: #2563eb;
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