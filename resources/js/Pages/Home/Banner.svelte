<script>
    import { ArrowRight, Info } from 'lucide-svelte';
</script>

<div class="banner-container relative flex flex-col items-center justify-center bg-cover bg-no-repeat min-h-[768px] bg-blend-darken bg-black bg-opacity-50">
    <div class="w-50">
            <div class="flex flex-col gap-4 w-25">
                <div class="text-4xl font-black text-white">
                    <p class="pb-3">The next <span class="bg-red-600 uppercase px-2">evolution</span> in</p>
                    <p>
                        <span class="bg-red-600 uppercase px-2">
                            grain marketing
                        </span>
                        is here.
                    </p>
                </div>
                <div class="text-lg text-white">
                    <p>Saskatchewan's first online grain auction is now listing all commodities, conventional and organic.</p>
                    <p class="mt-2">There's no apps or downloads - just a user-friendly online portal backed by excellent customer support.</p>
                </div>
                <div class="p-4 bg-blue-50 rounded-md">
                    <div class="flex justify-between">
                        <p class="flex items-center text-sm text-blue-600">
                            <Info size="13" class="mr-1"/> 
                            Send your samples to MGX for analysis and we’ll cover the cost of shipping!
                        </p>
                        <p class="flex items-center text-sm">
                            <a href="https://mygrainexchange.com/free-shipping" class="font-medium text-blue-600 hover:text-blue-900 flex items-center">
                                Details <ArrowRight size="16" class="ml-1"/>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
</div>

<style>
.banner-container {
    background-image: url('/images/frontend/website-cover.webp');
}
</style>