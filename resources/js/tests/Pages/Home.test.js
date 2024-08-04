import { render, screen } from '@testing-library/svelte';
import { writable } from 'svelte/store';
import { expect, test, describe, beforeEach, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Home from '../../Pages/Home.svelte';
import { router, page } from '@inertiajs/svelte';

// Mock the `page` store and `router` from `@inertiajs/svelte`
vi.mock('@inertiajs/svelte', () => {
  const mockPageStore = writable({
    props: {
      user: null,
    },
  });

  return {
    router: {
      get: vi.fn(),
    },
    page: mockPageStore,
  };
});

describe('Home component', () => {
  let mockPageStore;

  beforeEach(() => {
    // Access the mocked `page` store
    mockPageStore = page;

    // Clear mocks before each test
    vi.clearAllMocks();
  });

  test('shows "Welcome!" and Login button when user is not authenticated', () => {
    // Set the mockPageStore to a state where the user is not authenticated
    mockPageStore.set({
      props: {
        user: null,
      },
    });

    render(Home, { title: 'Welcome' });

    const loginButton = screen.getByRole('button', { name: /login/i });
    const welcomeMessage = screen.getByText('Welcome!');

    expect(loginButton).toBeInTheDocument();
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('shows "Welcome, John Doe!" and Dashboard button when user is authenticated', () => {
    // Set the mockPageStore to a state where the user is authenticated
    mockPageStore.set({
      props: {
        user: { name: 'John Doe' },
      },
    });

    render(Home, { title: 'Welcome' });

    const dashboardButton = screen.getByRole('button', { name: /dashboard/i });
    const welcomeMessage = screen.getByText('Welcome, John Doe!');

    expect(dashboardButton).toBeInTheDocument();
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('navigates to login page when Login button is clicked', async () => {
    const user = userEvent.setup();

    // Set the mockPageStore to a state where the user is not authenticated
    mockPageStore.set({
      props: {
        user: null,
      },
    });

    render(Home, { title: 'Welcome' });

    const loginButton = screen.getByRole('button', { name: /login/i });
    await user.click(loginButton);

    expect(router.get).toHaveBeenCalledWith('/login');
  });

  test('navigates to dashboard page when Dashboard button is clicked', async () => {
    const user = userEvent.setup();

    // Set the mockPageStore to a state where the user is authenticated
    mockPageStore.set({
      props: {
        user: { name: 'John Doe' },
      },
    });

    render(Home, { title: 'Welcome' });

    const dashboardButton = screen.getByRole('button', { name: /dashboard/i });
    await user.click(dashboardButton);

    expect(router.get).toHaveBeenCalledWith('/dashboard');
  });
});
