<script lang="ts">
	export let title: String;
	export let body: String;
	export let eventTitle: String;
</script>

<div class="card text-center col-4 col-md-12">
	<div class="card-body">
		<h5 class="card-title">{title}</h5>
		<p class="card-text">{body}</p>
		<a href="/{eventTitle}" class="btn btn-primary">Register</a>
	</div>
</div>

<style>
	.card {
		max-width: 25%;
		min-height: 300px;
	}

	.card-body {
		height: 100%;
		padding-top: 25px;
	}

	.card-text {
		height: 65%;
		padding-top: 10px;
	}
</style>
