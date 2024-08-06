<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    export let title;
</script>

<Header {title}/>
<main class="flex flex-col">
    <slot></slot>
</main>
<Footer/>
