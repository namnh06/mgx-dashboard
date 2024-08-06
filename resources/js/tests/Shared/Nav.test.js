import { render, screen } from '@testing-library/svelte';
import { writable } from 'svelte/store';
import { describe, it, expect } from 'vitest';
import Nav from '../../Shared/Nav.svelte';

describe('Nav component', () => {
    const userStore = writable({ name: 'John Doe' });

    it('renders the navigation links', () => {
        render(Nav, { user: userStore });

        expect(screen.getByText('MGX Insider')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });
});
