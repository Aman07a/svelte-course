<script>
	import { goto } from '$app/navigation';

	let name = 'Aman';
</script>

<h1>About {name}</h1>

<button
	on:click={() => {
		goto('/');
	}}>Go to Home</button
>

<style></style>
