<script>
	import { AgendaCard } from '$lib/entities';

	const tournejAgenda = [
		{
			day: 'piątek',
			date: '14.06',
			title: 'Dzień 0',
			data: [
				{
					title: 'pickupy',
					timing: ''
				},
				{
					title: 'alley cat',
					timing: ''
				},
				{
					title: 'ognisko',
					timing: ''
				},
				{
					title: '',
					timing: ''
				}
			]
		},
		{
			day: 'sobota',
			date: '15.06',
			title: 'Dzień 1',
			data: [
				{
					title: 'Losowanie uczestników',
					timing: '9:00'
				},
				{
					title: 'turniej',
					timing: '9:00'
				},
				{
					title: 'after party',
					timing: '21:00'
				}
			]
		},
		{
			day: 'niedziela',
			date: '16.06',
			title: 'Dzień 2',
			data: [
				{
					title: 'turniej',
					timing: '9:00'
				},
				{
					title: 'nagrodzenie zwycięzców',
					timing: '16:00'
				},
				{
					title: '',
					timing: ''
				}
			]
		}
	];

	const preparingAgenda = [
		{
			day: 'piątek',
			date: '14.06',
			title: 'Start turnieju',
			data: [
				{
					title: 'Koniec rejestracji',
					timing: '9:00'
				}
			]
		}
	];
</script>

<section class="bg--grey pt-20 bg-blueB">
	<div class="mx-auto max-w-6xl text-center">
		<!-- <div class="mb-10 flex w-full flex-row"> -->
		<!-- <div class="w-2/12" /> -->
		<h2 class="text-4xl font-bold mb-6 w-full text-center text-black">
			Harmonogram
			<br />
			turnieju
		</h2>

		<a name="schedule" />

		<!-- </div> -->
		<div class="mb-10 flex flex-row flex-wrap">
			{#each preparingAgenda as day}
				<AgendaCard {day} />
			{/each}
		</div>
		<div class="flex flex-row flex-wrap justify-between mb-10">
			{#each tournejAgenda as day}
				<AgendaCard {day} />
			{/each}
		</div>
	</div>
</section>

<style>
</style>
