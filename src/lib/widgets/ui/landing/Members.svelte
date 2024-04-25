<script>
	import { MemberCard } from '$lib/entities';

	const members = [
		{
			nickName: 'Jane',
			desc: 'just set a new record in Cycling: 30km!',
			data: []
		},
		{
			nickName: 'Jane',
			desc: 'just set a new record in Cycling: 30km!',
			data: []
		},
		{
			nickName: 'Jane',
			desc: 'just set a new record in Cycling: 30km!',
			data: []
		},
		{
			nickName: 'Jane',
			desc: 'just set a new record in Cycling: 30km!',
			data: []
		},
		{
			nickName: 'Jane',
			desc: 'just set a new record in Cycling: 30km!',
			data: []
		},
		{
			nickName: 'Jane',
			desc: 'just set a new record in Cycling: 30km!',
			data: []
		},
		{
			nickName: 'Jane',
			desc: 'just set a new record in Cycling: 30km!',
			data: []
		}
	];
</script>

<section class="section-2 w-full bg-turquoise py-10">
	<div class="mx-auto max-w-4xl">
		<h2 class="text-center text-4xl font-bold text-black">Uczestni_cy turnieju</h2>

		<a name="riders" />
			{#each members as member}
				<MemberCard {member} />
			{/each}

		<!-- <button class="btn-primary bg-black">See all</button> -->
	</div>
</section>
