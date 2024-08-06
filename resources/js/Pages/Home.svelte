<script>
    import LayoutNav from "@/Shared/Layout-Nav.svelte";
    import Banner from "./Home/Banner.svelte";
    import { page } from "@inertiajs/svelte";
    import { derived } from "svelte/store";

    export let title = "Home";

    let user = derived(page, ($page) => $page.props.user);
</script>

<LayoutNav {title} {user}>
    <Banner></Banner>
</LayoutNav>
