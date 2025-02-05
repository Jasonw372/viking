import { render, fireEvent } from '@testing-library/react';

import type { InputProps } from './input';
import Input from './input';
import { describe, expect, it, vitest } from 'vitest';

const defaultProps: InputProps = {
  onChange: vitest.fn(),
  placeholder: 'test-input',
};
describe('test Input component', () => {
  it('should render the correct default Input', () => {
    const wrapper = render(<Input {...defaultProps} />);
    const testNode = wrapper.getByPlaceholderText('test-input') as HTMLInputElement;
    expect(testNode).toBeInTheDocument();
    expect(testNode).toHaveClass('input-inner');
    fireEvent.change(testNode, { target: { value: '23' } });
    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(testNode.value).toEqual('23');
  });
  it('should render the disabled Input on disabled property', () => {
    const wrapper = render(<Input disabled placeholder="disabled" />);
    const testNode = wrapper.getByPlaceholderText('disabled') as HTMLInputElement;
    expect(testNode.disabled).toBeTruthy();
  });
  it('should render different input sizes on size property', () => {
    const wrapper = render(<Input placeholder="sizes" size="lg" />);
    const testContainer = wrapper.container.querySelector('.input-wrapper');
    expect(testContainer).toHaveClass('input-size-lg');
  });
  it('should render prepend and append element on prepend/append property', () => {
    const { queryByText, container } = render(
      <Input placeholder="pend" prepend="https://" append=".com" />,
    );
    const testContainer = container.querySelector('.input-wrapper');
    expect(testContainer).toHaveClass('input-group input-group-append input-group-prepend');
    expect(queryByText('https://')).toBeInTheDocument();
    expect(queryByText('.com')).toBeInTheDocument();
  });

  it('should render the icon component on prefixIcon/suffixIcon property', () => {
    const wrapper = render(<Input placeholder="icon" prefixIcon="search" suffixIcon="search" />);
    const testContainer = wrapper.container.querySelector('.input-wrapper');
    expect(testContainer).toHaveClass('input-wrapper input-prefix input-suffix');
  });
});
