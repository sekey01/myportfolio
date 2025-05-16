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
		padding:40px;
		margin: 0 auto;
		height: 300vh;
		background-color: #000000;
		overflow: scroll; /* Prevents double scrollbars */
	}

	/* Optional: Custom scrollbar styling */
	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-track {
		background: #8b9b9a;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 4px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>