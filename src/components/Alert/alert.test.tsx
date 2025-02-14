import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect, vi, vitest } from 'vitest';
import Alert from './index';

vitest.mock('../Icon/icon', () => {
  return {
    default: ({ icon, onClick }: { icon: React.ReactNode; onClick?: () => void }) => {
      return <span onClick={onClick}>{icon}</span>;
    },
  };
});

describe('Alert Component', () => {
  test('renders default alert correctly', () => {
    const message = '这是一条测试消息';
    render(<Alert type="info" message={message} />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test('renders alert with title', () => {
    const title = '标题';
    const message = '消息内容';
    render(<Alert type="info" title={title} message={message} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test('renders different types of alerts', () => {
    const types = ['success', 'info', 'warning', 'error'] as const;
    const message = '测试消息';

    types.forEach(type => {
      const { container } = render(<Alert type={type} message={message} />);
      expect(
        container.querySelector(`.alert-${type === 'error' ? 'danger' : type}`),
      ).toBeInTheDocument();
    });
  });

  test('shows icon when showIcon is true', () => {
    const { container } = render(<Alert type="success" message="成功消息" showIcon={true} />);
    expect(container.querySelector('.alert-icon')).toBeInTheDocument();
  });

  test('hides icon when showIcon is false', () => {
    const { container } = render(<Alert type="success" message="成功消息" showIcon={false} />);
    expect(container.querySelector('.alert-icon')).not.toBeInTheDocument();
  });

  test('calls onClose handler when close button is clicked', () => {
    const onClose = vi.fn();
    render(<Alert type="info" message="可关闭的消息" closable={true} onClose={onClose} />);

    const closeButton = screen.getByText('times');
    if (closeButton) {
      fireEvent.click(closeButton);
      expect(onClose).toHaveBeenCalled();
    }
  });

  test('alert disappears after clicking close button', () => {
    const message = '可关闭的消息';
    render(<Alert type="info" message={message} closable={true} />);

    const closeButton = screen.getByText('times');
    if (closeButton) {
      fireEvent.click(closeButton);
      expect(screen.queryByText(message)).not.toBeInTheDocument();
    }
  });

  test('renders with action buttons', () => {
    const actionText = '操作按钮';
    render(<Alert type="info" message="带操作按钮的消息" action={<button>{actionText}</button>} />);

    expect(screen.getByText(actionText)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
