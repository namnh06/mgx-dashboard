<script>
    import { Link } from "@inertiajs/svelte";
    import Button from "./Button.svelte";
    import Dropdown from "./Dropdown.svelte";
    export let user;

    const listingItems = [
        {
            label: "Current Listings",
            text: "View live actions",
            href: "/auctions",
        },
        {
            label: "Inventory",
            text: "View current inventory",
            href: "/inventory",
        },
        {
            label: "Current Buyers",
            text: "Learn about who is buying",
            href: "/current-buyers",
        },
    ];

    const aboutItems = [
        {
            label: "How MGX Works",
            text: "Learn more about how MGX works",
            href: "/how-mgx-works",
        },
        {
            label: "Why MGX Works",
            text: "Discover why MGX works",
            href: "/why-mgx-works",
        },
        { label: "Our Team", text: "Meet our team", href: "/our-team" },
    ];
</script>

<nav class="fixed w-full bg-transparent z-20 mt-5 flex items-center justify-between py-3">
    <div class="flex items-center justify-center w-1/5">
        <Link href="/">
            <img
                class="w-auto h-12"
                src="/images/logo-light.svg"
                alt="My Grain Exchange"
            />
        </Link>
    </div>
    <div class="flex items-center justify-center w-3/5 space-x-5">
        <Link
            class="text-white hover:text-red-600 flex flex-row font-bold items-center transition duration-150 cursor-pointer whitespace-nowrap header-nav-item"
            target="_blank"
            href="https://insider.mygrainexchange.com"
        >
            MGX Insider
        </Link>
        <Dropdown label="About" items={aboutItems} />
        <Dropdown label="Listings" items={listingItems} />
        <Link
            href="https://mygrainexchange.com/contact-us"
            class="text-white hover:text-red-600 flex flex-row font-bold items-center transition duration-150 cursor-pointer whitespace-nowrap header-nav-item"
            aria-current="page"
        >
            Contact
        </Link>
    </div>
    <div class="flex items-center justify-center w-1/5 space-x-2">
        {#if $user !== null}
            <Button href="/dashboard" label="Dashboard" />
            <Button href="/logout" label="Logout" method="POST" />
        {:else}
            <Button href="/register" label="Register" />
            <Button href="/login" label="Login" />
        {/if}
    </div>
</nav>
