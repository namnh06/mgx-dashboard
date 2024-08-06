import { render } from '@testing-library/svelte';
import { writable } from 'svelte/store';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Home from '../../Pages/Home.svelte';

// Mock the `page` store from `@inertiajs/svelte`
vi.mock('@inertiajs/svelte', async (importOriginal) => {
    const actual = await importOriginal();
    const mockPageStore = writable({
        props: {
            user: { name: 'John Doe' },
        },
    });

    return {
        ...actual,
        page: mockPageStore,
    };
});

describe('Home component', () => {
    beforeEach(() => {
        // Reset mocks before each test
        vi.clearAllMocks();
    });

    it('sets the document title', () => {
        render(Home, { title: 'Home' });

        expect(document.title).toContain('Home');
    });
});
