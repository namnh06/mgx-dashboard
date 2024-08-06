import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Login from '../../../Pages/Auth/Login.svelte';
import { router } from '@inertiajs/svelte';

vi.mock('@inertiajs/svelte', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    router: {
      post: vi.fn(),
    },
    useForm: (initialValues) => {
      let values = { ...initialValues, processing: false };
      return new Proxy(values, {
        set(target, prop, value) {
          target[prop] = value;
          return true;
        },
        get(target, prop) {
          return target[prop];
        },
      });
    },
  };
});

describe('Login component', () => {
  it('renders login form', () => {
    render(Login);

    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('displays errors when provided', async () => {
    const errors = {
      email: 'Email is invalid',
      password: 'Password is required',
    };

    render(Login, { props: { errors } });

    expect(screen.getByText(errors.email)).toBeInTheDocument();
    expect(screen.getByText(errors.password)).toBeInTheDocument();
  });

  it('renders the Sign in button', () => {
    render(Login);

    const signInButton = screen.getByRole('button', { name: /Sign in/i });
    expect(signInButton).toBeInTheDocument();
  });

  it('renders the Register link', () => {
    render(Login);

    const registerLinks = screen.getAllByRole('link', { name: /Register/i });
    expect(registerLinks.length).toBeGreaterThan(0);
  });

  it('submits the form with correct values', async () => {
    render(Login);

    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: /Sign in/i });

    await fireEvent.input(emailInput, { target: { value: 'john@example.com' } });
    await fireEvent.input(passwordInput, { target: { value: 'password123' } });

    await fireEvent.click(submitButton);

    expect(router.post).toHaveBeenCalledWith('/login', expect.objectContaining({
      email: 'john@example.com',
      password: 'password123',
    }));
  });
});