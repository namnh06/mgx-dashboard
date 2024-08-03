<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header/>
<div class="container mx-auto">
    <slot></slot>
</div>
<Footer/>

