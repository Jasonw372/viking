import { render } from '@testing-library/react';
import Space from './index';
import { describe, expect, it } from 'vitest';

describe('Space component', () => {
  it('should render the correct default Space', () => {
    const { container } = render(
      <Space>
        <div>item1</div>
        <div>item2</div>
      </Space>,
    );
    const spaceElement = container.querySelector('.space');
    expect(spaceElement).toBeInTheDocument();
    expect(spaceElement).toHaveClass('space-horizontal');
    expect(container.querySelectorAll('.space-item').length).toBe(2);
  });

  it('should render vertical Space when direction is vertical', () => {
    const { container } = render(
      <Space direction="vertical">
        <div>item1</div>
        <div>item2</div>
      </Space>,
    );
    expect(container.querySelector('.space')).toHaveClass('space-vertical');
  });

  it('should render correct alignment', () => {
    const { container } = render(
      <Space align="center">
        <div>item1</div>
        <div>item2</div>
      </Space>,
    );
    expect(container.querySelector('.space')).toHaveClass('space-align-center');
  });

  it('should render with different sizes', () => {
    const { container } = render(
      <Space size="lg">
        <div>item1</div>
        <div>item2</div>
      </Space>,
    );
    const spaceElement = container.querySelector('.space') as HTMLElement;
    expect(spaceElement.style.getPropertyValue('--space-gap')).toBe('24px');
  });

  it('should render with custom number size gap', () => {
    const { container } = render(
      <Space size={20}>
        <div>item1</div>
        <div>item2</div>
      </Space>,
    );
    const spaceElement = container.querySelector('.space') as HTMLElement;
    expect(spaceElement.style.getPropertyValue('--space-gap')).toBe('20px');
  });

  it('should render with split', () => {
    const { container } = render(
      <Space split="|">
        <div>item1</div>
        <div>item2</div>
      </Space>,
    );
    expect(container.querySelector('.space-split')).toHaveTextContent('|');
  });

  it('should render in compact mode', () => {
    const { container } = render(
      <Space compact>
        <div>item1</div>
        <div>item2</div>
      </Space>,
    );
    expect(container.querySelector('.space')).toHaveClass('space-compact');
  });
});
