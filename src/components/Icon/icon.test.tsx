import { render } from '@testing-library/react';
import Icon from './index';
import { describe, expect, it } from 'vitest';

describe('test Icon component', () => {
  it('should render the correct icon based on different props', () => {
    const wrapper = render(<Icon icon="search" />);
    // data-icon="search"
    const element = wrapper.getByTestId('icon');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('icon');
    expect(element).toHaveClass('fa-search');
    expect(element).not.toHaveClass('icon-primary');
  });

  it('should render the correct icon based on different props', () => {
    const wrapper = render(<Icon icon="search" theme="primary" />);
    const element = wrapper.getByTestId('icon');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('icon');
    expect(element).toHaveClass('fa-search');
    expect(element).toHaveClass('icon-primary');
  });
});
