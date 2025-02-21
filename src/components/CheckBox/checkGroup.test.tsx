import { describe, test, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CheckboxGroup from './checkGroup';
import Checkbox from './checkBox';

describe('CheckboxGroup Component', () => {
  const defaultOptions = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];

  describe('rendering', () => {
    test('renders empty group correctly', () => {
      const { container } = render(<CheckboxGroup />);
      expect(container.querySelector('.check-group')).toBeInTheDocument();
    });

    test('renders options correctly', () => {
      const { getAllByRole, getByText } = render(<CheckboxGroup options={defaultOptions} />);
      const checkboxes = getAllByRole('checkbox');
      expect(checkboxes).toHaveLength(3);
      expect(getByText('Apple')).toBeInTheDocument();
      expect(getByText('Banana')).toBeInTheDocument();
      expect(getByText('Orange')).toBeInTheDocument();
    });

    test('renders with children correctly', () => {
      const { getAllByRole } = render(
        <CheckboxGroup>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
        </CheckboxGroup>,
      );
      expect(getAllByRole('checkbox')).toHaveLength(2);
    });

    test('renders disabled state correctly', () => {
      const { getAllByRole } = render(<CheckboxGroup options={defaultOptions} disabled />);
      const checkboxes = getAllByRole('checkbox');
      checkboxes.forEach(checkbox => {
        expect(checkbox).toBeDisabled();
      });
    });

    test('applies custom className and style', () => {
      const { container } = render(
        <CheckboxGroup
          className="custom-class"
          style={{ width: '200px' }}
          options={defaultOptions}
        />,
      );
      const groupElement = container.firstChild as HTMLElement;
      expect(groupElement).toHaveClass('custom-class');
      expect(groupElement).toHaveStyle({ width: '200px' });
    });
  });

  describe('functionality', () => {
    test('controlled mode works correctly', () => {
      const onChange = vi.fn();
      const { getAllByRole } = render(
        <CheckboxGroup options={defaultOptions} value={['apple']} onChange={onChange} />,
      );
      const checkboxes = getAllByRole('checkbox');
      expect(checkboxes[0]).toBeChecked();

      fireEvent.click(checkboxes[1]);
      expect(onChange).toHaveBeenCalledWith(['apple', 'banana']);
    });

    test('uncontrolled mode works correctly', () => {
      const onChange = vi.fn();
      const { getAllByRole } = render(
        <CheckboxGroup options={defaultOptions} defaultValue={['apple']} onChange={onChange} />,
      );
      const checkboxes = getAllByRole('checkbox');

      fireEvent.click(checkboxes[1]);
      expect(onChange).toHaveBeenCalledWith(['apple', 'banana']);
    });

    test('handles individual disabled options', () => {
      const optionsWithDisabled = [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana', disabled: true },
      ];
      const onChange = vi.fn();
      const { getAllByRole } = render(
        <CheckboxGroup options={optionsWithDisabled} onChange={onChange} />,
      );
      const checkboxes = getAllByRole('checkbox');

      fireEvent.click(checkboxes[1]);
      expect(onChange).not.toHaveBeenCalled();
    });

    test('handles multiple selections correctly', () => {
      const onChange = vi.fn();
      const { getAllByRole } = render(
        <CheckboxGroup options={defaultOptions} onChange={onChange} />,
      );
      const checkboxes = getAllByRole('checkbox');

      fireEvent.click(checkboxes[0]);
      fireEvent.click(checkboxes[1]);

      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenLastCalledWith(['apple', 'banana']);
    });
  });
});
