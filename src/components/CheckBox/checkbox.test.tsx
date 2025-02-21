import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './checkBox';
import { CheckboxRef } from './checkBox';
import React from 'react';

describe('Checkbox Component', () => {
  describe('rendering', () => {
    test('renders basic checkbox correctly', () => {
      const { container } = render(<Checkbox />);
      const checkbox = container.querySelector('input[type="checkbox"]');
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveClass('checkbox-inner');
    });

    test('renders with label', () => {
      const { getByText } = render(<Checkbox label="Test Label" />);
      expect(getByText('Test Label')).toBeInTheDocument();
    });

    test('renders with children', () => {
      const { getByText } = render(<Checkbox>Child Content</Checkbox>);
      expect(getByText('Child Content')).toBeInTheDocument();
    });

    test('renders disabled state correctly', () => {
      const { container } = render(<Checkbox disabled />);
      const wrapper = container.firstChild as HTMLElement;
      const checkbox = container.querySelector('input');
      expect(wrapper).toHaveClass('is-disabled');
      expect(checkbox).toBeDisabled();
    });
  });

  describe('functionality', () => {
    test('handles controlled mode correctly', () => {
      const onChange = vi.fn();
      const { container } = render(<Checkbox checked={true} onChange={onChange} />);
      const checkbox = container.querySelector('input') as HTMLInputElement;

      expect(checkbox.checked).toBe(true);
      fireEvent.click(checkbox);
      expect(onChange).toHaveBeenCalledWith(false);
    });

    test('handles uncontrolled mode correctly', () => {
      const { container } = render(<Checkbox defaultChecked />);
      const checkbox = container.querySelector('input') as HTMLInputElement;

      expect(checkbox.checked).toBe(true);
      fireEvent.click(checkbox);
      expect(checkbox.checked).toBe(false);
    });

    test('disabled checkbox should not trigger onChange', () => {
      const onChange = vi.fn();
      const { container } = render(<Checkbox disabled onChange={onChange} />);
      const checkbox = container.querySelector('input') as HTMLInputElement;

      fireEvent.click(checkbox);
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('ref functionality', () => {
    test('focus and blur methods work correctly', () => {
      const ref = React.createRef<CheckboxRef>();
      const { container } = render(<Checkbox ref={ref} />);
      const checkbox = container.querySelector('input') as HTMLInputElement;

      ref.current?.focus();
      expect(checkbox).toBe(document.activeElement);

      ref.current?.blur();
      expect(checkbox).not.toBe(document.activeElement);
    });
  });

  describe('classNames', () => {
    test('applies custom className correctly', () => {
      const { container } = render(<Checkbox className="custom-class" />);
      const checkbox = container.querySelector('input');
      expect(checkbox).toHaveClass('custom-class');
    });
  });
});
