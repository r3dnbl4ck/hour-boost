<script>
    export let form
    export let data
</script>

{#if form?.data?.started}
    <button class="primary" formaction="?/stop">Stop</button>
{:else}
    <button class="primary" formaction="?/start">Start</button>
{/if}