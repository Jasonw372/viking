import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import Slider from './slider';

describe('Slider Component', () => {
  beforeEach(() => {
    // Reset DOM before each test
    document.body.innerHTML = '';
  });

  test('renders basic slider component', () => {
    const { getByRole } = render(<Slider />);
    const slider = getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('type', 'range');
  });

  test('sets default value', () => {
    const defaultValue = 50;
    const { getByRole } = render(<Slider defaultValue={defaultValue} />);
    const slider = getByRole('slider');
    expect(slider).toHaveValue(String(defaultValue));
  });

  test('sets min and max values', () => {
    const min = 10;
    const max = 90;
    const { getByRole } = render(<Slider min={min} max={max} />);
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('min', String(min));
    expect(slider).toHaveAttribute('max', String(max));
  });

  test('sets step value', () => {
    const step = 5;
    const { getByRole } = render(<Slider step={step} />);
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('step', String(step));
  });

  test('triggers onChange event when value changes', () => {
    const handleChange = vi.fn();
    const { getByRole } = render(<Slider onChange={handleChange} />);
    const slider = getByRole('slider');

    fireEvent.change(slider, { target: { value: '50' } });
    expect(handleChange).toHaveBeenCalled();
  });

  test('shows tooltip when tooltipVisible is true', () => {
    const { getByText } = render(<Slider defaultValue={50} tooltipVisible={true} />);
    expect(getByText('50')).toBeInTheDocument();
  });

  test('shows tooltip on mouse hover', async () => {
    const { getByRole, findByText } = render(<Slider defaultValue={50} />);
    const slider = getByRole('slider');

    fireEvent.mouseEnter(slider.parentElement!);
    const tooltip = await findByText('50');
    expect(tooltip).toBeInTheDocument();

    fireEvent.mouseLeave(slider.parentElement!);
    expect(tooltip).not.toBeVisible();
  });

  test('updates value on slider drag', () => {
    const { getByRole } = render(<Slider defaultValue={0} />);
    const slider = getByRole('slider');

    fireEvent.change(slider, { target: { value: '75' } });
    expect(slider).toHaveValue('75');
  });

  test('handles disabled state', () => {
    const { getByRole } = render(<Slider disabled={true} />);
    const slider = getByRole('slider');
    expect(slider).toBeDisabled();
  });
});
