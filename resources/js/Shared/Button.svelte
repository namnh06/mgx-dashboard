<script>
    import { Link, router } from '@inertiajs/svelte';
    export let href;
    export let label;
    export let method = 'GET';

    function handleClick() {
        if (method === 'POST') {
            router.post(href);
        }
    }
</script>

{#if method === 'POST'}
    <button on:click={handleClick} class="flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
        {label}
    </button>
{:else}
    <Link href={href} class="flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
        {label}
    </Link>
{/if}