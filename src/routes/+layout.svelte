<script>
	import '../app.css';
	// import { onMount } from 'svelte';
	// onMount(() => {	});
</script>

<main class="scrollbar-x-hide overflow-auto">
	<slot />
</main>

<style>

  :global(.font-yourFont) {
		font-family: 'yourFont';
		line-height: 1.2;
	}



	@font-face {
		font-family: 'yourFont';
		font-style: normal;
		font-weight: 500;

		src: local(''), /* Super Modern Browsers */ url('/fonts/yourFont.woff') format('woff'),
			/* Modern Browsers */ url('/fonts/yourFont.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('/fonts/yourFont.svg') format('svg'); /* Legacy iOS */
	}


</style>
