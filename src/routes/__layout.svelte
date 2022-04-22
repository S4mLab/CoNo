<script>
	import '../styles/app.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Header />
<main class="dark:bg-[#949CB8] h-[100vh] pt-5">
	<slot />
</main>

<Footer />
