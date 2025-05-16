<script lang="ts">
	import Books from './books.svelte';
	import CenterIntro from "./center_intro.svelte";
	import Experiences from './experiences.svelte';
	import Footer from './footer.svelte';
	import InitRow from "./init_row.svelte";
	import Projects from './projects.svelte';
	import Socials from './socials.svelte';
</script>

<div class="main-page">
<InitRow/>
<CenterIntro/>
<Experiences/>
<Projects/>
<Footer/>

</div>

<style>
	.main-page {
		padding: 40px;
		margin: 0 auto;
		min-height: 100vh; /* Changed from fixed height */
		background-color: #000000;
		overflow-x: hidden; /* Prevents horizontal scroll */
	}

	/* Improved scrollbar styling */
	:global(html) {
		scroll-behavior: smooth;
	}
	
	:global(::-webkit-scrollbar) {
		width: 10px;
	}
	
	:global(::-webkit-scrollbar-track) {
		background: #1a1a1a;
	}
	
	:global(::-webkit-scrollbar-thumb) {
		background: #facc15; /* Yellow to match your theme */
		border-radius: 5px;
	}
	
	:global(::-webkit-scrollbar-thumb:hover) {
		background: #eab308; /* Darker yellow on hover */
	}
</style>