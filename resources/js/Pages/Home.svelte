<script>
    import Layout from "@/Shared/Layout.svelte";
    import {router, page} from "@inertiajs/svelte";

    export let title = "Welcome";

    let user = $page.props.user;
    let authenticated = user !== null;

    function toLoginPage() {
        router.get('/login');
    }

    function toDashboardPage() {
        router.get('/dashboard');
    }
</script>
<Layout {title}>
    {#if authenticated}
        <h1 class="text-2xl text-black mb-5">Welcome, {user.name}!</h1>
        <button on:click|preventDefault={toDashboardPage} class="flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Dashboard</button>
    {:else}
        <h1 class="text-2xl text-black mb-5">Welcome!</h1>
        <button on:click|preventDefault={toLoginPage} class="flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Login</button>
    {/if}
</Layout>
