import { render, screen } from '@testing-library/svelte';
import { writable } from 'svelte/store';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Dashboard from '../../Pages/Dashboard.svelte';

// Mock the `page` store and `Link` component from `@inertiajs/svelte`
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

describe('Dashboard component', () => {
    beforeEach(() => {
        // Reset mocks before each test
        vi.clearAllMocks();
    });

    it('renders the welcome message', () => {
        render(Dashboard, { title: 'Dashboard' });

        const welcomeMessage = screen.getByText('Welcome to your dashboard, John Doe!');
        expect(welcomeMessage).toBeInTheDocument();
    });

    it('renders the buttons', () => {
        render(Dashboard, { title: 'Dashboard' });

        const backButton = screen.getByRole('link', { name: /Back to Home/i });
        const logoutButton = screen.getByRole('button', { name: /Logout/i });

        expect(backButton).toBeInTheDocument();
        expect(logoutButton).toBeInTheDocument();
    });
});
