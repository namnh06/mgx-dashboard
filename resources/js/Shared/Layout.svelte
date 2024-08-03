<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header/>
<div class="container">
    <slot></slot>
</div>
<Footer/>

