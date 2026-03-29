<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/stores/theme';

	let { children } = $props();

	$effect(() => {
		document.documentElement.classList.toggle('light', $theme === 'light');
	});
</script>

{@render children()}
