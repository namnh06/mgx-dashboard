import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Register from '../../../../resources/js/Pages/Auth/Register.svelte';
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

describe('Register component', () => {
  it('renders register form', () => {
    render(Register);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
  });

  it('displays errors when provided', async () => {
    const errors = {
      name: 'Name is required',
      email: 'Email is invalid',
      password: 'Password is too short',
      password_confirmation: 'Passwords do not match',
    };

    render(Register, { props: { errors } });

    expect(screen.getByText(errors.name)).toBeInTheDocument();
    expect(screen.getByText(errors.email)).toBeInTheDocument();
    expect(screen.getByText(errors.password)).toBeInTheDocument();
    expect(screen.getByText(errors.password_confirmation)).toBeInTheDocument();
  });

  it('submits the form with correct values', async () => {
    render(Register);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email address');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const submitButton = screen.getByRole('button', { name: /Register/i });

    await fireEvent.input(nameInput, { target: { value: 'John Doe' } });
    await fireEvent.input(emailInput, { target: { value: 'john@example.com' } });
    await fireEvent.input(passwordInput, { target: { value: 'password123' } });
    await fireEvent.input(confirmPasswordInput, { target: { value: 'password123' } });

    await fireEvent.click(submitButton);

    expect(router.post).toHaveBeenCalledWith('/register', expect.objectContaining({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      password_confirmation: 'password123',
    }));
  });
});