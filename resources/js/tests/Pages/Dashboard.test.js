import { render, screen } from '@testing-library/svelte';
import { expect, test, describe, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Dashboard from '../../Pages/Dashboard.svelte';
import { router } from '@inertiajs/svelte';

// Mock the `router` from `@inertiajs/svelte`
vi.mock('@inertiajs/svelte', () => ({
  router: {
    post: vi.fn(),
  },
}));

describe('Dashboard component', () => {
  beforeEach(() => {
    // Clear mocks before each test
    vi.clearAllMocks();
  });

  test('renders with the correct title', () => {
    render(Dashboard, { title: 'Dashboard' });

    // Check if the document title is correctly set
    expect(document.title).toContain('Dashboard');
  });

  test('displays the Logout button', () => {
    render(Dashboard, { title: 'Dashboard' });

    const logoutButton = screen.getByRole('button', { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();
  });

  test('triggers logout on button click', async () => {
    const user = userEvent.setup();

    render(Dashboard, { title: 'Dashboard' });

    const logoutButton = screen.getByRole('button', { name: /logout/i });
    await user.click(logoutButton);

    expect(router.post).toHaveBeenCalledWith('/logout');
  });
});
