import { render, fireEvent } from '@testing-library/react';
import Button from './button';
import { describe, expect, test, vi } from 'vitest';

describe('Button Component', () => {
  test('renders default button correctly', () => {
    const wrapper = render(<Button>Default Button</Button>);
    const element = wrapper.getByText('Default Button');

    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('BUTTON');
    expect(element).toHaveClass('btn', 'btn-default');

    fireEvent.click(element);
  });

  test('renders different button types correctly', () => {
    const types = ['primary', 'danger', 'warning', 'success', 'info', 'link'] as const;

    types.forEach(type => {
      const wrapper = render(<Button btnType={type}>{type} button</Button>);
      const element = wrapper.getByText(`${type} button`);

      expect(element).toHaveClass(`btn-${type}`);

      // Link button should be rendered as <a> tag
      if (type === 'link') {
        expect(element.tagName).toBe('A');
      }
    });
  });

  test('renders different sizes correctly', () => {
    const sizes = ['lg', 'sm'] as const;

    sizes.forEach(size => {
      const wrapper = render(<Button size={size}>{size} button</Button>);
      const element = wrapper.getByText(`${size} button`);

      expect(element).toHaveClass(`btn-${size}`);
    });
  });

  test('renders disabled button correctly', () => {
    const wrapper = render(<Button disabled>Disabled Button</Button>);
    const element = wrapper.getByText('Disabled Button') as HTMLButtonElement;
    expect(element).toBeDisabled();
    const mockClick = vi.fn();
    fireEvent.click(element);
    expect(mockClick).not.toHaveBeenCalled();
  });

  test('renders disabled link button correctly', () => {
    const wrapper = render(
      <Button btnType="link" disabled href="http://example.com">
        Disabled Link
      </Button>,
    );
    const element = wrapper.getByText('Disabled Link');

    expect(element).toHaveClass('disabled');
    expect(element.tagName).toBe('A');
  });

  test('handles click events', () => {
    const mockClick = vi.fn();
    const wrapper = render(<Button onClick={mockClick}>Clickable</Button>);
    const element = wrapper.getByText('Clickable');

    fireEvent.click(element);
    expect(mockClick).toHaveBeenCalled();
    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test('renders circle button correctly', () => {
    const wrapper = render(<Button circle>Circle</Button>);
    const element = wrapper.getByText('Circle');

    expect(element).toHaveClass('btn-circle');
  });

  test('renders plain button correctly', () => {
    const wrapper = render(
      <Button plain btnType="primary">
        Plain
      </Button>,
    );
    const element = wrapper.getByText('Plain');

    expect(element).toHaveClass('btn-plain');
  });

  test('renders custom className correctly', () => {
    const wrapper = render(<Button className="custom-class">Custom</Button>);
    const element = wrapper.getByText('Custom');

    expect(element).toHaveClass('custom-class');
  });

  test('combines multiple properties correctly', () => {
    const wrapper = render(
      <Button btnType="primary" size="lg" disabled className="custom">
        Complex Button
      </Button>,
    );
    const element = wrapper.getByText('Complex Button');

    expect(element).toHaveClass('btn-primary', 'btn-lg', 'custom');
    expect(element).toBeDisabled();
  });
});
