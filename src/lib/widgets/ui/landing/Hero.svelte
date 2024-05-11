<script>
	const description = [
		`Turniej na zasadach ABC, na podstawie autooceny zawodników.`,
		'Poza głównym boiskiem na czas turnieju dostępne będzie mniejsze, na pickupy. A w piątek wpadajcie na biforowy alley cat, pickupy i ognisko!',
		'Boisko w otulinie Trójmiejskiego Parku Krajobrazowego pod drzewkiem.'
	];
</script>

<!--
		'Obiad w sobotę i niedzielę w pakiecie. W okolicy sklepy, na miejscu do kupienia *napoje*.',

 -->

<section class="w-full shrink-0 snap-start snap-always px-20 pb-20">
	<a name="about" />
	<div class="h-32  " />
	<div
		class="flex lg:w-10/12 md:w-10/12 w-full mx-auto h-full bg-neutral-100 flex-col items-center  bg-greenB wrap justify-between pb-10 lg:px-5 md:px-2  pt-10 text-black md:flex-row"
	>
		<div class="mb-12 flex-1 md:mb-0 md:mr-12 ">
			<h2 class="mb-12 text-6xl font-bold tracking-tight md:text-7xl">Siemka!</h2>
			<div class="mb-4 flex">
				<p class="ml-3 text-2xl">
					Przed nami pierwszy turniej bike polo w Polsce w tym roku. Nie dali nam boiska (jeszcze),
					to sami sobie wzięliśmy 😉
				</p>
			</div>
			{#each description as text}
				<div class="mb-4 flex">
					<p class="ml-3 text-2xl">
						{text}
					</p>
				</div>
			{/each}
		</div>
		<div
			class="h-[60vh] max-h-[600px] flex-1 ]"
		>
			<iframe
				class="map h-full w-full "
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"
				src="https://www.openstreetmap.org/export/embed.html?bbox=18.547909855842594%2C54.46001700833452%2C18.550592064857486%2C54.46113953783808&amp;layer=mapnik&amp;marker=54.46057827693473%2C18.549250960350037"
			/>
		</div>
	</div>
</section>

<style>
	.map {
		border: 2px solid #000;
		box-shadow: 5px 5px 0 #000;
		transition: all 0.2s;
	}

	.wrap {
		border: 2px solid #8cffcf;
		box-shadow: 5px 5px 0 #8cffcf;
		transition: all 0.2s;
	}
</style>
