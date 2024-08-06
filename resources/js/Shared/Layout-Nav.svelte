<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Nav from "./Nav.svelte";
    export let title;
    export let user;
</script>

<Header {title}/>
<Nav {user} />
<main class="flex flex-col">
    <slot></slot>
</main>
<Footer/>
