<script lang="ts">
	import '../app.postcss';

	import { language } from '@inlang/sdk-js';
	import {ThemeSwitcher, SvelteTheme, LocaleSwitcher} from '$shared/';

	export let data;
</script>

	<!-- <a href="/{language}">
		<h1>Home</h1>
	</a> -->

	<LocaleSwitcher />

	<ThemeSwitcher />

<slot />

<SvelteTheme attribute="data-theme" />


