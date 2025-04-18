import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slider from './slider'; // 假设 Slider 组件在同一目录下
import { describe, expect, test, vi } from 'vitest';

// Mock ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

describe('Slider Component', () => {
  test('renders correctly with default props', () => {
    render(<Slider />);
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toBeInTheDocument();
    // 直接检查 DOM 属性值
    expect(sliderElement.getAttribute('aria-valuenow')).toBe('0');
  });

  test('renders correctly with specific default value', () => {
    render(<Slider defaultValue={30} />);
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toHaveAttribute('aria-valuenow', '30');
  });

  test('renders vertically when vertical prop is true', () => {
    const { container } = render(<Slider vertical={true} />);
    // react-slider 会添加 'vertical' 类名
    const sliderContainer = container.querySelector('.viking-slider');
    expect(sliderContainer).toHaveClass('vertical');
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toHaveAttribute('aria-orientation', 'vertical');
  });

  test('renders horizontally by default', () => {
    const { container } = render(<Slider />);
    const sliderContainer = container.querySelector('.viking-slider');
    expect(sliderContainer).not.toHaveClass('vertical');
    const sliderElement = screen.getByRole('slider');
    expect(sliderElement).toHaveAttribute('aria-orientation', 'horizontal');
  });

  test('is disabled when disabled prop is true', () => {
    render(<Slider disabled={true} />);
    const sliderElement = screen.getByRole('slider');
    // react-slider 会给容器添加 'disabled' 类名
    expect(sliderElement.parentElement).toHaveClass('disabled');
  });

  test('applies custom className', () => {
    const customClass = 'my-custom-slider';
    const { container } = render(<Slider className={customClass} />);
    const sliderContainer = container.querySelector('.viking-slider');
    expect(sliderContainer).toHaveClass(customClass);
  });

  test('shows tooltip on hover when showTooltip is true', async () => {
    render(<Slider showTooltip={true} defaultValue={50} />);
    const thumb = screen.getByRole('slider');

    // Tooltip 初始不可见
    expect(screen.queryByText('50')).not.toBeInTheDocument();

    // 模拟鼠标悬停
    fireEvent.mouseEnter(thumb);

    // Tooltip 现在应该可见
    // 注意：tooltip 的内容可能需要更精确的定位，这里用文本内容查找
    // react-slider 的实现细节可能会影响此测试，如果失败需要调整选择器
    const tooltip = await screen.findByText('50');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveClass('viking-slider-tooltip');

    // 模拟鼠标离开
    fireEvent.mouseLeave(thumb);

    // Tooltip 应该再次隐藏
    expect(screen.queryByText('50')).not.toBeInTheDocument();
  });

  test('hides tooltip when showTooltip is false', () => {
    render(<Slider showTooltip={false} defaultValue={50} />);
    const thumb = screen.getByRole('slider');

    // 模拟鼠标悬停
    fireEvent.mouseEnter(thumb);

    // Tooltip 不应该显示
    expect(screen.queryByText('50')).not.toBeInTheDocument();
  });

  // TODO: 添加更多测试，例如 onChange 回调、受控模式、拖拽交互等
});
