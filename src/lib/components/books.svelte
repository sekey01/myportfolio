<script lang="ts">
	import Card from "./card.svelte";

	let books = [
		{
			title: "The Pragmatic Programmer",
			author: "Andrew Hunt and David Thomas",
			description: "A guide to becoming a better programmer, covering best practices and practical tips.",
			imageUrl: "../src/lib/assets/images/programmer.jpeg"
		},
		{
			title: "Clean Code",
			author: "Robert C. Martin",
			description: "A guide to writing clean, maintainable code with practical examples.",
			imageUrl: "../src/lib/assets/images/clean.jpeg"
		},
		{
			title: "Mindset Matters",
			author: "Joel Austin",
			description: "A book that emphasizes the power of a positive mindset and its impact on success.",
			imageUrl: "../src/lib/assets/images/entrepreneur.jpeg"
		}
	];
</script>

<div class="flex flex-col items-center gap-6 md:gap-10 px-4 py-10 sm:py-16 max-w-7xl mx-auto">
	<!-- Header Section -->
	<div class="text-center max-w-3xl mx-auto">
		<h2 class="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
			Books
		</h2>
		<p class="text-lg sm:text-xl md:text-2xl font-mono text-gray-600 mt-2 sm:mt-4">
			A collection of books that have influenced my journey
		</p>
	</div>

	<!-- Books Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full mt-6 sm:mt-10">
		{#each books as book}
			<Card
				title={book.title}
				author={book.author}
				description={book.description}
				imageUrl={book.imageUrl}
			/>
		{/each}
	</div>
</div>

<style>
	.text-transparent {
		-webkit-text-fill-color: transparent;
	}
</style>