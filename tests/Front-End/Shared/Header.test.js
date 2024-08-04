import { render } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';
import Header from '../../../resources/js/Shared/Header.svelte';

describe('Header component', () => {
  test('sets the correct document title', () => {
    render(Header, { title: 'Test Title' });

    expect(document.title).toBe('Test Title - MGX Dashboard');
  });

  test('renders the header element', () => {
    const { container } = render(Header, { title: 'Test Title' });

    const headerElement = container.querySelector('header');
    expect(headerElement).toBeInTheDocument();
  });
});