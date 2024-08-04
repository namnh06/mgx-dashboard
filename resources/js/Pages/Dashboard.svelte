<script>
    import Layout from "@/Shared/Layout.svelte";
    import { router } from '@inertiajs/svelte';

    export let title = "Dashboard";
    function logout() {
        router.post('/logout');
    }
</script>

<Layout {title}>
    <button on:click={logout} class="flex justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
        Logout
    </button>
</Layout>
