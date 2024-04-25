<script lang="ts">
	import '../app.postcss';

	import { language } from '@inlang/sdk-js';
	import { LocaleSwitcher } from '$shared/';

	export let data;
</script>

<!-- <a href="/{language}">
		<h1>Home</h1>
	</a> -->

<!-- <LocaleSwitcher />

	<ThemeSwitcher /> -->
<div class="overflow-hidden">
	<slot />
</div>
<!-- <SvelteTheme attribute="data-theme" /> -->
