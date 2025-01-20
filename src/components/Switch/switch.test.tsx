import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import type { SwitchRef } from './switch';
import Switch from './index';
import React from 'react';

describe('Switch Component', () => {
  test('renders default switch correctly', () => {
    const wrapper = render(<Switch />);
    const switchElement = wrapper.getByRole('switch');

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveClass('switch');
    expect(switchElement).not.toBeDisabled();
    expect(switchElement.getAttribute('aria-checked')).toBe('false');
  });

  test('handles controlled state correctly', () => {
    const onChange = vi.fn();
    const wrapper = render(<Switch checked={true} onChange={onChange} />);
    const switchElement = wrapper.getByRole('switch');

    expect(switchElement).toHaveClass('switch-checked');
    expect(switchElement.getAttribute('aria-checked')).toBe('true');

    fireEvent.click(switchElement);
    expect(onChange).toHaveBeenCalledWith(false);
  });

  test('handles uncontrolled state correctly', () => {
    const wrapper = render(<Switch defaultChecked />);
    const switchElement = wrapper.getByRole('switch');

    expect(switchElement).toHaveClass('switch-checked');
    fireEvent.click(switchElement);
    expect(switchElement).not.toHaveClass('switch-checked');
  });

  test('renders different sizes correctly', () => {
    const sizes: ('sm' | 'lg')[] = ['sm', 'lg'];

    sizes.forEach(size => {
      const wrapper = render(<Switch size={size} />);
      const switchElement = wrapper.container.querySelector('.switch');
      expect(switchElement).toHaveClass(`switch-${size}`);
    });
  });

  test('handles disabled state correctly', () => {
    const onChange = vi.fn();
    const wrapper = render(<Switch disabled onChange={onChange} />);
    const switchElement = wrapper.getByRole('switch');

    expect(switchElement).toHaveClass('switch-disabled');
    expect(switchElement).toBeDisabled();

    fireEvent.click(switchElement);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('handles loading state correctly', () => {
    const onChange = vi.fn();
    const wrapper = render(<Switch loading onChange={onChange} />);
    const switchElement = wrapper.getByRole('switch');
    const loadingIcon = wrapper.container.querySelector('.switch-loading-icon');

    expect(switchElement).toHaveClass('switch-loading');
    expect(loadingIcon).toBeInTheDocument();

    fireEvent.click(switchElement);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('renders children content correctly', () => {
    const wrapper = render(<Switch checkedChildren="ON" unCheckedChildren="OFF" />);
    const switchElement = wrapper.getByRole('switch');

    expect(wrapper.getByText('OFF')).toBeInTheDocument();

    fireEvent.click(switchElement);
    expect(wrapper.getByText('ON')).toBeInTheDocument();
  });

  test('handles ref operations correctly', () => {
    const ref = React.createRef<SwitchRef>();
    render(<Switch ref={ref} />);

    const switchElement = screen.getByRole('switch');
    const focusSpy = vi.spyOn(switchElement, 'focus');
    const blurSpy = vi.spyOn(switchElement, 'blur');

    ref.current?.focus();
    expect(focusSpy).toHaveBeenCalled();

    ref.current?.blur();
    expect(blurSpy).toHaveBeenCalled();
  });
});
