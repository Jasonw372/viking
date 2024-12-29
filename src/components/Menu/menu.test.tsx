import type { RenderResult } from '@testing-library/react';
import { fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import MenuItem from './menuItem';
import type { MenuProps } from './menu';
import Menu from './menu';

const testProps = {
  defaultIndex: '0',
  onSelect: vi.fn(),
  className: 'test',
};

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical',
};

const generateMenu = (props: MenuProps) => {
  return render(
    <Menu {...props}>
      <MenuItem>item1</MenuItem>
      <MenuItem disabled>item2</MenuItem>
      <MenuItem>item3</MenuItem>
    </Menu>,
  );
};

describe('test Menu and MenuItem component', () => {
  let wrapper: RenderResult,
    menuElement: HTMLElement,
    activeElement: HTMLElement,
    disabledElement: HTMLElement;
  beforeEach(() => {
    wrapper = generateMenu(testProps);
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('item1');
    disabledElement = wrapper.getByText('item2');
  });
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(3);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });

  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('item3');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });
});

describe('test Menu and MenuItem component in vertical mode', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    wrapper = generateMenu(testVerProps);
  });
  it('should render vertical mode when mode is set to vertical', () => {
    const menuElement = wrapper.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  });
});
