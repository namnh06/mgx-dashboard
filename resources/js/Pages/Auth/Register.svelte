<script>
    import Layout from "@/Shared/Layout.svelte";
    import {router, Link, useForm} from '@inertiajs/svelte';

    export let title = "Register";
    export let errors = {};

    let form = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    function submit() {
        router.post('/register', form);
    }
</script>

<Layout {title}>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link href="/">
                <img class="mx-auto h-10 w-auto" src="https://mygrainexchange.com/images/logo.svg" alt="Your Company">
            </Link>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your
                account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" on:submit|preventDefault={submit}>
                <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div class="mt-2">
                        <input bind:value={form.name} placeholder="Name" id="name" name="name" type="text"
                               required
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                    </div>
                    {#if errors.name}
                        <div class="text-red-600">{errors.name}</div>
                    {/if}
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input bind:value={form.email} placeholder="Email" id="email" name="email" type="email"
                               autocomplete="email" required
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                    </div>
                    {#if errors.email}
                        <div class="text-red-600">{errors.email}</div>
                    {/if}
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="mt-2">
                        <input bind:value={form.password} placeholder="Password" id="password" name="password"
                               type="password" autocomplete="new-password" required
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                    </div>
                    {#if errors.password}
                        <div class="text-red-600">{errors.password}</div>
                    {/if}
                </div>

                <div>
                    <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Confirm
                        Password</label>
                    <div class="mt-2">
                        <input bind:value={form.password_confirmation} placeholder="Confirm Password"
                               id="password_confirmation" name="password_confirmation"
                               type="password" autocomplete="new-password" required
                               class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6">
                    </div>
                    {#if errors.password_confirmation}
                        <div class="text-red-600">{errors.password_confirmation}</div>
                    {/if}
                </div>

                <div>
                    <button type="submit"
                            class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                        Register
                    </button>
                </div>

                <!-- Link to login page -->
                <p class="mt-6 text-center text-sm text-gray-500">
                    Already have an account?
                    <Link href="/login" class="font-semibold text-red-600 hover:text-red-500">Sign in</Link>
                </p>
            </form>
        </div>
    </div>
</Layout>
