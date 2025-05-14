<script lang="ts">
	import Card from "./card.svelte";

	let books = [
		{
			title: "The Pragmatic Programmer",
			author: "Andrew Hunt and David Thomas",
			description: "A guide to becoming a better programmer, covering best practices and practical tips.",
			imageUrl: "https://media-hosting.imagekit.io/37f2d0bf47654f34/programmer.jpeg?Expires=1841859403&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mY3EC078Zzt4oVjjkaoREjqiZHEhh0uR7YUcB2Cdy7t4qK6O64lCz4Sg3AF7e9ZsRCiru1sGUAw4fO~eM-ErZMf-vyUZ4GJJXE8EjD9uvyZbRjaYPIDSnQoBUrnMAVYsT1dUqyXTpdekghDj3ECwHFmgptC7ZfY~hGD~eF~niG8fpXTuiLoaQWUKOG6Z0q-a9KcW2-jxw3QXtyFPafMBfdhQ40yqwhIdpaU0DFVryaqWIHXkKpjrDhzm79DlasFf89s5utDVb-djZUtxnorfG28xCFa-drTB2New9V6kHSQo1dRUxjoVFTlPJUZOELBEOYoPrxzoAnrYoIt9FQ5Rtw__"
		},
		{
			title: "Clean Code",
			author: "Robert C. Martin",
			description: "A guide to writing clean, maintainable code with practical examples.",
			imageUrl: "https://media-hosting.imagekit.io/7f528535c46949e5/clean.jpeg?Expires=1841859031&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=C1uP4bMbU8t15N3vf~R848t95om-M23i~sW6yV5Qpr-ouSn-kDngIsDBSLv2Ad18wQQbzv0zw9ys9G6DAa5lxbE30z6OBlTJJiTU6ZLhnKJPPAVxopEpgKRlUgWV1UdxnOOD8O2WGlEilc6lsRBmvj9aX3i0MpzPYLkTlk52kIer3g69TM~6I~vAg~~DMA5FWe9Rg8lBroi8yLlXySDJTj3~T9ZSqWOqoxXCgy7~JPhhCKQDkkDtdtQbAB-qpZlawq-9ZOaGUxZJvWTlF8In8c5hSNC6o1BHzoSQqiP8NyMXgadC6iJj6ynKeSyXOQk9t5M80tSoJ-snLo7naKhhKQ__"
		},
		{
			title: "Mindset Matters",
			author: "Joel Austin",
			description: "A book that emphasizes the power of a positive mindset and its impact on success.",
			imageUrl: "https://media-hosting.imagekit.io/dae65472b95844bf/entrepreneur.jpeg?Expires=1841859031&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QtMvA5tt193Yma1z7CohYDceYuJlcCsgu~1cdxi4m~bEPDDdqg2GPKQoaRCt8BBuzp-6l-mFVwmvIHxfmm-kGCgjX96dyPxp6jmzv~y~SDodGlLT9XKbg1y3p6ghSlb1eQEYuFm-iBPdy2BNModJR9nGPGEmuLMEYHwlHpoqrLVYfyt6xLyvlFAJnCtOjFCJE5GXWi-2GCxVYQfh~6tpYTCBmj68vZNzcJEY8XQcckW3nsT1CZsZATcXaZLzzBjT3Iq7HI7nJdzz49ULmnul0cnoryH4GghEFkvlsBG69hmnsV2nZjVZubTJg59o8uH8eHdS~fCZtNDW-MOesgv5Rg__"
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