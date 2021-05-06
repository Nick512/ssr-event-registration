<script lang="ts">
	import Card from './card.svelte';
	export let first: Object;
	export let second: Object;
	export let third: Object;
</script>

<div class="row pt-5 card-wrap">
	<Card title={first.title} body={first.summary} eventTitle={first.eventTitle} />
	<Card title={second.title} body={second.body} eventTitle={second.eventTitle} />
	<Card title={third.title} body={third.body} eventTitle={third.eventTitle} />
</div>

<style>
	.card-wrap {
		width: 100%;
		justify-content: space-evenly;
	}
	.row {
		--bs-gutter-x: 0rem !important;
	}
</style>
