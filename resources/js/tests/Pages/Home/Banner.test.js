import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Banner from '../../../Pages/Home/Banner.svelte';

describe('Banner component', () => {
    it('renders the banner content', () => {
        render(Banner);

        expect(screen.getByText(/The next/i)).toBeInTheDocument();
        expect(screen.getByText(/evolution/i)).toBeInTheDocument();
        expect(screen.getByText(/grain marketing/i)).toBeInTheDocument();
        expect(screen.getByText(/Saskatchewan's first online grain auction/i)).toBeInTheDocument();
        expect(screen.getByText(/There's no apps or downloads/i)).toBeInTheDocument();
        expect(screen.getByText(/Send your samples to MGX for analysis/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Details/i })).toHaveAttribute('href', 'https://mygrainexchange.com/free-shipping');
    });
});
