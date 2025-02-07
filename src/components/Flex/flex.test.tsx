import { render } from '@testing-library/react';
import Flex from './index';
import { describe, expect, test } from 'vitest';

describe('Flex Component', () => {
  test('renders basic flex correctly', () => {
    const { container } = render(<Flex>Flex Content</Flex>);
    expect(container.firstChild).toHaveClass('flex');
  });

  test('renders with different directions', () => {
    const directions = ['row', 'row-reverse', 'column', 'column-reverse'] as const;
    directions.forEach(direction => {
      const { container } = render(<Flex direction={direction}>Content</Flex>);
      expect(container.firstChild).toHaveClass(`flex-${direction}`);
    });
  });

  test('renders with different justify content', () => {
    const justifyValues = [
      'start',
      'end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
    ] as const;
    justifyValues.forEach(justify => {
      const { container } = render(<Flex justify={justify}>Content</Flex>);
      expect(container.firstChild).toHaveClass(`flex-justify-${justify}`);
    });
  });

  test('renders with different align items', () => {
    const alignValues = ['start', 'end', 'center', 'baseline', 'stretch'] as const;
    alignValues.forEach(align => {
      const { container } = render(<Flex align={align}>Content</Flex>);
      expect(container.firstChild).toHaveClass(`flex-align-${align}`);
    });
  });

  test('renders with different wrap values', () => {
    const wrapValues = ['nowrap', 'wrap', 'wrap-reverse'] as const;
    wrapValues.forEach(wrap => {
      const { container } = render(<Flex wrap={wrap}>Content</Flex>);
      expect(container.firstChild).toHaveClass(`flex-wrap-${wrap}`);
    });
  });

  test('renders with gap as number', () => {
    const { container } = render(<Flex gap={16}>Content</Flex>);
    expect(container.firstChild).toHaveStyle({ gap: '16px' });
  });

  test('renders with gap as an invalid value', () => {
    const { container } = render(<Flex gap={'pp' as 'sm'}>Content</Flex>);
    expect(container.firstChild).toHaveStyle({ gap: '0' });
  });

  test('renders with gap as preset size', () => {
    const gapSizes = ['sm', 'md', 'lg'] as const;
    const gapValues = { sm: '8px', md: '16px', lg: '24px' };

    gapSizes.forEach(size => {
      const { container } = render(<Flex gap={size}>Content</Flex>);
      expect(container.firstChild).toHaveStyle({ gap: gapValues[size] });
    });
  });

  test('renders with gap as array', () => {
    const { container } = render(<Flex gap={[8, 16]}>Content</Flex>);
    expect(container.firstChild).toHaveStyle({
      rowGap: '8px',
      columnGap: '16px',
    });
  });

  test('renders with custom className', () => {
    const { container } = render(<Flex className="custom-class">Content</Flex>);
    expect(container.firstChild).toHaveClass('flex', 'custom-class');
  });

  test('renders with flex value', () => {
    const { container } = render(<Flex flex="1">Content</Flex>);
    expect(container.firstChild).toHaveStyle({ flex: '1' });
  });

  test('renders as different component', () => {
    const { container } = render(<Flex component="section">Content</Flex>);
    expect(container.firstChild?.nodeName).toBe('SECTION');
  });

  test('renders in vertical mode', () => {
    const { container } = render(<Flex vertical>Content</Flex>);
    expect(container.firstChild).toHaveClass('flex-vertical');
  });
});
