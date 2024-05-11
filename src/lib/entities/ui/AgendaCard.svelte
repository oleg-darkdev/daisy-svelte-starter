<script>
	export let day;
</script>

<div
	class="weekly window mx-auto hover:delay-550 m-2 mb-10 w-[350px] bg-white hover:-translate-y-1 hover:scale-110 hover:transition hover:duration-1000 hover:ease-in-out"
>
	<div class="text-black">
		<h2 style="font-size: 80px;" class=" font-semibold text-black">{day.date}</h2>
		<br />
		<h3 class="mr-2 pl-10 text-start text-4xl">
			{day.title} <span class="text-4xl">({day.day})</span>
		</h3>
	</div>
	<table class="">
		<tbody class="mt-10">
			<tr class="h-8" />
			{#each day.data as agenda}
				<tr class="">
					<td class="w-[250px] pl-10 text-start text-black">{agenda.title}</td>
					<td class="text-black">{agenda.timing}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.window {
		border: 3px solid black;
		box-shadow: 10px 10px 0 black;
	}
	.window h2 {
		border-bottom: 3px solid black;
		padding: 1rem 3rem;
		position: relative;
		padding-right: 7rem;
	}
	/* .window h2::after {
		content: 'x';
		display: block;
		position: absolute;
		width: 5rem;
		height: 100%;
		border-left: 3px solid black;
		top: 0;
		right: 0;
		display: grid;
		place-items: center;
	} */

	table {
		padding: 1rem 3rem 2rem 3rem;
	}
	table td {
		font-size: 2rem;
		font-weight: 500;
		padding-right: 3rem;
		padding-bottom: 1rem;
	}
	table th {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: left;
		padding-right: 1rem;
		padding-bottom: 0.8rem;
	}
</style>
