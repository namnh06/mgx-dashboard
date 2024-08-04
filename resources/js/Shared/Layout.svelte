<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";

    export let title;
</script>

<Header {title}/>
<main class="flex-grow container mx-auto py-8">
    <slot></slot>
</main>
<Footer/>