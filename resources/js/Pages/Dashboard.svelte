<script>
    import LayoutDashboard from "@/Shared/Layout-Dashboard.svelte";
    import Button from "@/Shared/Button.svelte";
    import { page } from "@inertiajs/svelte";
    import { derived } from 'svelte/store';

    export let title = "Dashboard";
    let user = derived(page, $page => $page.props.user);
</script>

<LayoutDashboard {title} {user}>
    <div class="flex flex-col items-center justify-center py-10">
        <h1 class="text-4xl font-extrabold text-gray-900 text-center mb-6">Welcome to your dashboard, {$user.name}!</h1>
        <p class="text-lg text-gray-600 mb-10 text-center">Here's where you can manage all your activities and settings.</p>
        <div class="flex space-x-4">
            <Button href="/" label="Back to Home" />
            <Button href="/logout" label="Logout" method="POST" />
        </div>
    </div>
</LayoutDashboard>
