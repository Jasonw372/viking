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

  it('should render different size icons', () => {
    const wrapper = render(<Icon icon="search" size="lg" />);
    const element = wrapper.getByTestId('icon');
    expect(element).toHaveClass('fa-lg');
  });

  it('should render spinning icons', () => {
    const wrapper = render(<Icon icon="spinner" spin />);
    const element = wrapper.getByTestId('icon');
    expect(element).toHaveClass('fa-spin');
  });

  it('should render pulse animation', () => {
    const wrapper = render(<Icon icon="spinner" pulse />);
    const element = wrapper.getByTestId('icon');
    expect(element).toHaveClass('fa-pulse');
  });

  it('should render with custom className', () => {
    const wrapper = render(<Icon icon="search" className="custom-class" />);
    const element = wrapper.getByTestId('icon');
    expect(element).toHaveClass('custom-class');
  });

  it('should render with custom style', () => {
    const customStyle = { color: '#fff' };
    const wrapper = render(<Icon icon="search" style={customStyle} />);
    const element = wrapper.getByTestId('icon');
    expect(element).toHaveStyle(customStyle);
  });
});
