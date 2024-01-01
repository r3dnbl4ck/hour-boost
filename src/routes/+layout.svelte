<script>
	import { invalidateAll } from '$app/navigation'
	import '@picocss/pico';
	import '../app.css';
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase' 

	onMount(() => {
		const { data : { subscription }} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll()
		})

		return () => {
			subscription.unsubscribe()
		}
	})
</script>

<nav aria-label="breadcrumb" style="--pico-nav-breadcrumb-divider: '/';">
	<!-- svelte-ignore a11y-invalid-attribute -->
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">Booster</a></li>
		<li><a href="#">My Account</a></li>
	</ul>
</nav>

<slot />
