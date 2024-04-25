<script>
	export let link, title;
</script>

<!-- x -->
<a href={link} target="_blank" class="btn-primary my-6 px-8 py-10">{title}</a>

<style>
	.btn-primary {
		border: 2px solid black;
		background-color: rgba(243, 159, 78, 1);

		font-family: inherit;
		font-size: 2rem;
		font-weight: 600;
		box-shadow: 5px 5px 0 black;
		cursor: pointer;
		transition: all 0.2s;
	}
	.btn-primary:hover {
		transform: scale(1.05);
		box-shadow: 8px 8px 0 black;
	}
</style>
