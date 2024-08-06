import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Button from '../../Shared/Button.svelte';
import { router } from '@inertiajs/svelte';

// Mock the `router` post function
vi.mock('@inertiajs/svelte', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    router: {
      post: vi.fn(),
    }
  };
});

describe('Button component', () => {
  it('renders a link when method is GET', () => {
    render(Button, { href: '/test-link', label: 'Test Link', method: 'GET' });

    const linkElement = screen.getByRole('link', { name: 'Test Link' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute('href')).toContain('/test-link');
  });

  it('renders a button when method is POST', () => {
    render(Button, { href: '/test-action', label: 'Test Action', method: 'POST' });

    const buttonElement = screen.getByRole('button', { name: 'Test Action' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('triggers router post when button is clicked with method POST', async () => {
    render(Button, { href: '/test-action', label: 'Test Action', method: 'POST' });

    const buttonElement = screen.getByRole('button', { name: 'Test Action' });

    await fireEvent.click(buttonElement);

    expect(router.post).toHaveBeenCalledWith('/test-action');
  });
});