<script>
	import { PrimaryBtnLink, Bicycle } from '$lib/shared';

	const navigation = [
		{
			title: 'O turnieju',
			link: '#about'
		},
		{
			title: 'Zawodnicy',
			link: '#riders'
		},

		{
			title: 'Harmonogram turnieju',
			link: '#schedule'
		},
		{
			title: '',
			link: '#'
		}
	];
</script>

<nav class="nav lg:h-20 md:h-20 h-32 bg-white">
	<div class="nav__links">
		{#each navigation as nav}
			<a class="text-2xl hover:border-b-4 hover:border-black" href={nav.link}>{nav.title}</a>
		{/each}
	</div>

	<button class="nav__btn w-3/12 bg-black text-lg text-white">Registration</button>
</nav>

<header class="header w-full bg-yellowH">
	<div class="header__content py-auto max-w-5xl">
		<h1 class=" big-title text-black">LUTA CUP</h1>
		<p class="text-4xl text-black">pierwszy turniej bike polo w Polsce w 2024 roku</p>

		<PrimaryBtnLink title="Registration" link="/" />
	</div>
	<div class="max-h-[40vh]">
		<Bicycle />
	</div>
</header>

<style>
	@media (max-width: 700px) {
		.nav, header {
			padding-left: 10px;
		}
	}

	.nav {
		background-color: #fff;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;
		border-bottom: 3px solid black;
	}
	.nav__btn {
		align-self: stretch;
		border: none;
		outline: transparent;
		font-family: inherit;
		/* padding: 0 4rem; */
		font-size: 2.5rem;
		font-weight: 600;
		cursor: pointer;
		border-left: 2px solid black;
	}
	.nav__links a {
		color: black;
		/* text-decoration: none; */

		letter-spacing: 2px;
		margin-right: 2rem;
		font-weight: 500;
	}

	.header {
		/* background-color: var(--header-yellow); */
		/* padding: 0 auto; */
		height: 30rem;
		overflow: hidden;
		border-bottom: 3px solid black;
	}
	.header__content {
		height: 100%;

		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		position: relative;
	}
	/* .header__content p {
		font-size: 3rem;
	} */
	.header__content * {
		z-index: 1;
	}

	/* .header__content::after {
		content: '';
		position: absolute;
		background-color: var(--green);
		background: repeating-linear-gradient(
			-45deg,
			var(--green),
			var(--green) 10px,
			black 10px,
			black 13px
		);
		height: 25rem;
		width: 25rem;
		border-radius: 50%;
		border: 3px solid black;
		right: 0;
		top: 5rem;
	}
	.header__content::before {
		content: '';
		position: absolute;
		background-color: var(--blue);
		background: repeating-linear-gradient(
			-45deg,
			var(--blue),
			var(--blue) 10px,
			black 10px,
			black 13px
		);
		height: 18rem;
		width: 18rem;
		border-radius: 50%;
		border: 3px solid black;
		right: 20rem;
		bottom: -5rem;
	} */
</style>
