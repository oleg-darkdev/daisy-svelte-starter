<script>
    export let member;
</script>

<div
	class="friends mx-auto hover:delay-550 my-6 hover:-translate-y-1 hover:scale-110 hover:transition hover:duration-1000 hover:ease-in-out"
>
	<div class="friends__picture h-20 bg-green" />
	<div class="pl-6 pt-2">
		<h3 class="friends__name text-3xl text-black">{member.nickName}</h3>
		<p class="friends__desc text-xl text-black">{member.desc}</p>
	</div>
	<button class="friends__btn text-2xl text-black"
		>see more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			><path
				fill="none"
				stroke="currentColor"
				d="M16 5c0 .742.733 1.85 1.475 2.78c.954 1.2 2.094 2.247 3.401 3.046C21.856 11.425 23.044 12 24 12m0 0c-.956 0-2.145.575-3.124 1.174c-1.307.8-2.447 1.847-3.401 3.045C16.733 17.15 16 18.26 16 19m8-7H0"
			/></svg
		></button
	>
</div>


<style>
	.friends {
		background-color: #fff;
		display: grid;
		grid-template-columns: auto 1fr auto;
		border: 3px solid black;
		box-shadow: 5px 5px 0 #000;
		max-width: 85vw;
	}
	.friends__picture {
		/* height: 100%; */
		width: 6.5rem;
		border-right: 3px solid black;
		position: relative;
	}
	.friends__picture::after {
		content: '';
		width: 2rem;
		height: 2rem;
		background-color: #000;
		position: absolute;
		border-radius: 1rem 1rem 0 0;
		bottom: 0;
		left: 2rem;
	}
	.friends__picture::before {
		content: '';
		width: 1.6rem;
		height: 1.6rem;
		background-color: #000;
		position: absolute;
		border-radius: 50%;
		bottom: 2.5rem;
		left: 2.3rem;
	}

	.friends__btn {
		padding: 1rem 2rem;
		background-color: transparent;
		border: none;
		border-left: 3px solid #000;
		font-family: inherit;
		/* font-size: rem; */
		display: flex;
		align-items: center;
		line-height: 50%;
		cursor: pointer;
	}
	.friends__btn svg {
		width: 2rem;
		margin-left: 1rem;
	}
</style>
