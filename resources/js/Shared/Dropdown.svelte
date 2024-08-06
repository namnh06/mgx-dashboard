<script>
    import { ChevronDown, ChevronUp } from "lucide-svelte";
    export let label;
    export let items = [];
    let isOpen = false;

    function openDropdown() {
        isOpen = true;
    }

    function closeDropdown() {
        isOpen = false;
    }
</script>

<div class="relative group" role="menu" tabindex="0" on:mouseover={openDropdown} on:mouseout={closeDropdown} on:focus={openDropdown} on:blur={closeDropdown}>
    <div 
        role="button" 
        aria-haspopup="true"
        aria-expanded={isOpen}
        class="text-white hover:text-red-600 flex flex-row font-bold items-center transition duration-150 cursor-pointer whitespace-nowrap header-nav-item"
        tabindex="0"
    >
        {label}
        {#if items.length > 0}
            {#if isOpen}
                <ChevronUp class="w-5 h-5 duration-75" />
            {:else}
                <ChevronDown class="w-5 h-5 duration-75" />
            {/if}
        {/if}
    </div>
    <ul class="dropdown-content absolute hidden group-hover:block bg-white z-[1] w-64 p-4 shadow" role="menu" tabindex="0" on:mouseover={openDropdown} on:mouseout={closeDropdown} on:focus={openDropdown} on:blur={closeDropdown}>
        {#each items as item}
            <li class="mb-2" role="menuitem">
                <a
                    href={`https://mygrainexchange.com${item.href}`}
                    class="block px-4 py-2 hover:bg-gray-200 transition duration-150"
                >
                    <p class="text-base font-bold text-red-600">{item.label}</p>
                    <p class="text-sm text-gray-600">{item.text}</p>
                </a>
            </li>
        {/each}
    </ul>
</div>