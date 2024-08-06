import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Dropdown from '../../Shared/Dropdown.svelte';

describe('Dropdown component', () => {
  const items = [
    { label: 'Item 1', text: 'Description 1', href: '/item1' },
    { label: 'Item 2', text: 'Description 2', href: '/item2' },
  ];

  it('renders the dropdown label', () => {
    render(Dropdown, { label: 'Test Dropdown', items });

    const labelElement = screen.getByRole('button', { name: /test dropdown/i });
    expect(labelElement).toBeInTheDocument();
  });

  it('shows items when hovered over', async () => {
    render(Dropdown, { label: 'Test Dropdown', items });

    const labelElement = screen.getByRole('button', { name: /test dropdown/i });
    await fireEvent.mouseOver(labelElement);

    const itemElements = screen.getAllByRole('menuitem');
    expect(itemElements.length).toBe(items.length);
  });

  it('renders the correct links', async () => {
    render(Dropdown, { label: 'Test Dropdown', items });

    const labelElement = screen.getByRole('button', { name: /test dropdown/i });
    await fireEvent.mouseOver(labelElement);

    items.forEach((item) => {
      const linkElement = screen.getByText(item.label).closest('a');
      expect(linkElement).toHaveAttribute('href', `https://mygrainexchange.com${item.href}`);
    });
  });
});