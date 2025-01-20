import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import Progress from './progress';
import { describe, expect, it } from 'vitest';

let wapper: RenderResult;
describe('Progress Component', () => {
  // 测试默认渲染
  it('renders correctly with default props', () => {
    wapper = render(<Progress percent={30} />);
    const progressBar = wapper.getByTestId('test-progress');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar.querySelector('.inner-text')).toHaveTextContent('30%');
  });

  // 测试自定义高度
  it('renders with custom strokeHeight', () => {
    wapper = render(<Progress percent={50} strokeHeight={20} />);
    const outerBar = wapper.getByTestId('test-progress').querySelector('.progress-bar-outer');
    expect(outerBar).toHaveStyle({ height: '20px' });
  });

  // 测试隐藏文字
  it('should not show text when showText is false', () => {
    wapper = render(<Progress percent={50} showText={false} />);
    const innerText = wapper.getByTestId('test-progress').querySelector('.inner-text');
    expect(innerText).not.toBeInTheDocument();
  });

  // 测试不同主题
  it('renders with different themes', () => {
    wapper = render(<Progress percent={50} theme="success" />);
    const innerBar = wapper.getByTestId('test-progress').querySelector('.progress-bar-inner');
    expect(innerBar).toHaveClass('color-success');
  });

  // 测试自定义样式
  it('renders with custom styles', () => {
    const customStyle = {
      backgroundColor: 'rgb(255, 0, 0)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    };
    wapper = render(<Progress percent={50} styles={customStyle} />);
    const progressBar = wapper.getByTestId('test-progress');
    expect(progressBar).toHaveStyle(customStyle);
  });

  // 测试百分比限制
  it('renders correct percentage', () => {
    wapper = render(<Progress percent={120} />);
    const innerText = wapper.getByTestId('test-progress').querySelector('.inner-text');
    expect(innerText).toHaveTextContent('120%');
  });
});
