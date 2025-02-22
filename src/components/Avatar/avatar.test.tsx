import { describe, expect, test, vitest } from 'vitest';
import Avatar from './index';
import type { RenderResult } from '@testing-library/react';
import { fireEvent, render } from '@testing-library/react';

let wrapper: RenderResult;
describe('Avatar Component', () => {
  test('renders with image source', () => {
    wrapper = render(
      <Avatar className="avatar" src="https://example.com/image.png" alt="User Avatar" />,
    );
    const imgElement = wrapper.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'https://example.com/image.png');
  });

  test('renders with fallback text when image fails to load', () => {
    const handleError = vitest.fn();
    wrapper = render(
      <Avatar src="invalid-image.png" onError={handleError}>
        Fallback
      </Avatar>,
    );
    fireEvent.error(wrapper.getByRole('img'));

    const fallbackElement = wrapper.getByText('Fallback');
    expect(fallbackElement).toBeInTheDocument();

    expect(handleError).toHaveBeenCalled();
  });

  test('renders with different sizes', () => {
    wrapper = render(<Avatar size="large" src="https://example.com/image.png" />);
    let imgElement = wrapper.container.querySelector('.avatar');
    expect(imgElement).toHaveClass('avatar-large');

    wrapper = render(<Avatar size="small" src="https://example.com/image.png" />);
    imgElement = wrapper.container.querySelector('.avatar');
    expect(imgElement).toHaveClass('avatar-small');
  });

  test('renders with different shapes', () => {
    wrapper = render(<Avatar shape="circle" src="https://example.com/image.png" />);
    const avatarElement = wrapper.container.querySelector('.avatar');
    expect(avatarElement).toHaveClass('avatar-circle');

    wrapper.rerender(<Avatar shape="square" src="https://example.com/image.png" />);
    expect(avatarElement).toHaveClass('avatar-square');
  });

  test('renders children when no src is provided', () => {
    wrapper = render(<Avatar>U</Avatar>);
    const textElement = wrapper.getByText('U');
    expect(textElement).toBeInTheDocument();
  });
});
