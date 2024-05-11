<script>
	import { i } from '@inlang/sdk-js';
	// import {HeadHrefLangs} from '$shared';

	// import { Agenda } from '$lib/entities';
	import { Header, Results, Members, Agenda, Hero } from '$lib/widgets';
</script>

<svelte:head>
	<title>LUTO CUP - bike polo</title>
	<!-- <HeadHrefLangs /> -->
</svelte:head>
<!-- `
<h1 class="text-5xl font-extralight">{i('welcome')}</h1>
<p>{@html i('description')}</p>` -->

<Header />

<main class="bg-black">
	<Hero />

	<Agenda />
</main>

<!-- <Results /> -->

<Members />
