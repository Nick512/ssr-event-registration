<script lang="ts">
	import Top from '../components/top.svelte';
	import Card from '../components/card.svelte';
</script>

<div class="container-fluid">
	<Top />
	<div class="row pt-5 card-wrap">
		<Card
			title={'Event Title'}
			body={'Short paragrph about the event. asufdhuihuein. uisdhfguinhweriuv. swefuihsdiuvfbn.'}
			eventTitle=""
		/>
		<Card
			title={'Event Title'}
			body={'Short paragrph about the event. asufdhuihuein. uisdhfguinhweriuv. swefuihsdiuvfbn.'}
		/>
		<Card
			title={'Event Title'}
			body={'Short paragrph about the event. asufdhuihuein. uisdhfguinhweriuv. swefuihsdiuvfbn.'}
		/>
	</div>
	<div class="row pt-5 card-wrap">
		<Card
			title={'Event Title'}
			body={'Short paragrph about the event. asufdhuihuein. uisdhfguinhweriuv. swefuihsdiuvfbn.'}
		/>
		<Card
			title={'Event Title'}
			body={'Short paragrph about the event. asufdhuihuein. uisdhfguinhweriuv. swefuihsdiuvfbn.'}
		/>
		<Card
			title={'Event Title'}
			body={'Short paragrph about the event. asufdhuihuein. uisdhfguinhweriuv. swefuihsdiuvfbn.'}
		/>
	</div>
	<div class="row mt-5">
		<button class="btn btn-primary col-12 w-25 mx-auto">Load More</button>
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
