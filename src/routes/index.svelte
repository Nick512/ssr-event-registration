<script lang="ts">
	import Top from '$lib/components/top.svelte';
	import Card from '$lib/components/card.svelte';

	let start = 3;
	let end = 6;

	let rows = [1];

	const loadMore = () => {
		rows = [...rows, 1];
	};

	const events = [
		{
			title: 'Event 1',
			body: 'sviuenvineviunerv',
			eventTitle: 'event1'
		},
		{
			title: 'Event 2',
			body: 'sviuenvineviunerv',
			eventTitle: 'event2'
		},
		{
			title: 'Event 3',
			body: 'sviuenvineviunerv',
			eventTitle: 'event3'
		},
		{
			title: 'Event 4',
			body: 'sviuenvineviunerv',
			eventTitle: 'event4'
		},
		{
			title: 'Event 5',
			body: 'sviuenvineviunerv',
			eventTitle: 'event5'
		},
		{
			title: 'Event 6',
			body: 'sviuenvineviunerv',
			eventTitle: 'event6'
		},
		{
			title: 'Event 7',
			body: 'sviuenvineviunerv',
			eventTitle: 'event1'
		},
		{
			title: 'Event 8',
			body: 'sviuenvineviunerv',
			eventTitle: 'event2'
		},
		{
			title: 'Event 9',
			body: 'sviuenvineviunerv',
			eventTitle: 'event3'
		},
		{
			title: 'Event 10',
			body: 'sviuenvineviunerv',
			eventTitle: 'event4'
		},
		{
			title: 'Event 11',
			body: 'sviuenvineviunerv',
			eventTitle: 'event5'
		},
		{
			title: 'Event 12',
			body: 'sviuenvineviunerv',
			eventTitle: 'event6'
		}
	];
</script>

<div id="cont" class="container-fluid">
	<Top />
	<div class="row pt-5 card-wrap">
		{#each events.slice(0, 3) as event, i}
			<Card title={event.title} body={event.body} eventTitle={event.eventTitle} />
		{/each}
	</div>
	{#each rows as row}
		<div class="row pt-5 card-wrap">
			{#each events.slice(start, end) as event}
				<Card title={event.title} body={event.body} eventTitle={event.eventTitle} />
			{/each}
		</div>
	{/each}
	<div class="row mt-5">
		<button on:click={loadMore} class="btn btn-primary col-12 w-25 mx-auto">Load More</button>
	</div>
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
