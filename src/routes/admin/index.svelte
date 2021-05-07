<script lang="ts">
	import Top from '$lib/components/top.svelte';
	import Login from '$lib/components/login.svelte';
</script>

<div class="container-fluid">
	<Top />
	<div id="form">
		<Login />
	</div>
</div>

<style>
	#form {
		min-height: 80vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
