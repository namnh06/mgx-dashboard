import { render, screen } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';
import Footer from '../../../resources/js/Shared/Footer.svelte';

describe('Footer component', () => {
  test('renders the footer with correct text', () => {
    render(Footer);

    const footerText = screen.getByText(/Made with/i);
    expect(footerText).toBeInTheDocument();
  });

  test('renders the heart emoji', () => {
    render(Footer);

    const heartEmoji = screen.getByText('❤️');
    expect(heartEmoji).toBeInTheDocument();
    expect(heartEmoji).toHaveClass('text-red-500');
  });

  test('renders the Canada flag image', () => {
    render(Footer);

    const canadaFlag = screen.getByAltText('Canada Flag');
    expect(canadaFlag).toBeInTheDocument();
    expect(canadaFlag).toHaveAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg');
    expect(canadaFlag).toHaveClass('inline w-5 h-5');
  });
});