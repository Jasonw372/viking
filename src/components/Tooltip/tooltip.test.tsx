import { render, screen, waitFor } from '@testing-library/react';
import Tooltip from './index';
import { describe, expect, test, vi } from 'vitest';

describe('Tooltip Component', () => {
  test('Basic shallow rendering functions', () => {
    const { container } = render(
      <Tooltip title="测试提示" trigger="hover">
        <button>Hover me</button>
      </Tooltip>,
    );

    // 验证 DOM 结构
    expect(container.querySelector('.tooltip-content')).toBeNull(); // 初始不显示
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  test('Trigger Attribute control', () => {
    render(
      <Tooltip title="测试提示" trigger="click">
        <button>Click me</button>
      </Tooltip>,
    );

    waitFor(() => {
      expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    screen.getByText('Click me').click();
    waitFor(() => {
      expect(screen.getByText('测试提示')).toBeInTheDocument();
    });
  });

  test('visible Attribute control', () => {
    render(
      <Tooltip title="测试提示" visible={true}>
        <button>Test</button>
      </Tooltip>,
    );

    waitFor(() => {
      expect(screen.getByText('测试提示')).toBeInTheDocument();
    });
  });

  test('color Attribute control', () => {
    render(
      <Tooltip title="测试提示" color="#000">
        <button>Test</button>
      </Tooltip>,
    );
    waitFor(() => {
      expect(screen.getByText('测试提示')).toBeInTheDocument();
    });
  });

  test('onVisibleChange Callback', () => {
    const onVisibleChangeMock = vi.fn();
    render(
      <Tooltip title="测试提示" trigger="click" onVisibleChange={onVisibleChangeMock}>
        <button>Click me</button>
      </Tooltip>,
    );
    screen.getByText('Click me').click();
  });
});
