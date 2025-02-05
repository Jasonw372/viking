import type { RenderResult } from '@testing-library/react';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Menu from './index';
import type { MenuProps } from './menu';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: vi.fn(),
  className: 'test',
};

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: ['3'],
};

const testVerPropsWithoutOpen: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: [],
};

const generateMenu = (props: MenuProps) => {
  return render(
    <Menu {...props}>
      <Menu.Item>item1</Menu.Item>
      <Menu.Item disabled>item2</Menu.Item>
      <Menu.Item>item3</Menu.Item>
      <Menu.SubMenu title="dropdown">
        <Menu.Item>drop1</Menu.Item>
        <Menu.Item>drop2</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>item4</Menu.Item>
    </Menu>,
  );
};

const createStyleFile = () => {
  const cssFile: string = `
    .submenu-container {
      display: none !important;
      transition: none !important;
    }
    .submenu-container.menu-opened {
      display: block !important;
    }
  `;
  const style = document.createElement('style');
  style.innerHTML = cssFile;
  return style;
};

describe('Menu Component', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    cleanup();
    wrapper = generateMenu(testProps);
    wrapper.container.append(createStyleFile());
  });

  it('should render correct Menu and MenuItem based on default props', () => {
    const menuElement = wrapper.getByTestId('test-menu');
    const activeElement = wrapper.getByText('item1');
    const disabledElement = wrapper.getByText('item2');
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });

  it('click items should change active and call the right callback', () => {
    const activeElement = wrapper.getByText('item1');
    const thirdItem = wrapper.getByText('item3');
    const disabledElement = wrapper.getByText('item2');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });

  it('should render vertical mode when mode is set to vertical', () => {
    cleanup();
    const wrapper = generateMenu(testVerProps);
    const menuElement = wrapper.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  });

  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeInTheDocument();
    const dropdownElement = wrapper.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement);
    await waitFor(
      () => {
        expect(wrapper.queryByText('drop1')).toBeVisible();
      },
      { timeout: 1000 },
    );
    fireEvent.mouseLeave(dropdownElement);
    await waitFor(
      () => {
        expect(wrapper.queryByText('drop1')).not.toBeVisible();
      },
      { timeout: 1000 },
    );
  });
});

describe('test Menu and MenuItem component in vertical mode', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    cleanup();
    wrapper = generateMenu(testVerProps);
  });

  it('should render vertical mode when mode is set to vertical', () => {
    const menuElement = wrapper.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  });

  it('should show dropdown items when click on subMenu for vertical mode', () => {
    const dropDownItem = wrapper.queryByText('drop1');
    fireEvent.click(wrapper.getByText('dropdown'));
    expect(dropDownItem).toBeVisible();
  });

  it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
    expect(wrapper.queryByText('drop1')).toBeVisible();
  });
});

describe('test SubMenu component', () => {
  let wrapper: RenderResult;
  beforeEach(() => {
    cleanup();
    wrapper = generateMenu(testProps);
  });

  it('should render SubMenu component', () => {
    const subMenuElement = wrapper.getByText('dropdown').parentElement;
    expect(subMenuElement).toHaveClass('submenu-item');
  });

  it('should toggle submenu when clicking in vertical mode', () => {
    cleanup();
    wrapper = generateMenu(testVerPropsWithoutOpen);
    wrapper.container.append(createStyleFile());
    const dropdownElement = wrapper.getByText('dropdown');
    let submenuContainer = wrapper.queryByText('drop1')?.parentElement;

    // 确保初始状态
    expect(submenuContainer).equal(undefined);

    // 点击切换状态
    fireEvent.click(dropdownElement);
    submenuContainer = wrapper.queryByText('drop1')?.parentElement;
    expect(submenuContainer).toBeVisible();

    // 再次点击
    fireEvent.click(dropdownElement);
    expect(submenuContainer).not.toBeVisible();
  });

  it('should handle click events on submenu items', async () => {
    const dropdownElement = wrapper.getByText('dropdown');
    fireEvent.mouseEnter(dropdownElement);

    await waitFor(() => fireEvent.click(wrapper.getByText('drop1')));
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0');
  });
});

describe('test Menu with invalid children', () => {
  it('should warn when using invalid child component', () => {
    const consoleError = vi.spyOn(console, 'error');
    render(
      <Menu>
        <Menu.Item>valid item</Menu.Item>
        <div>invalid child</div>
      </Menu>,
    );
    expect(consoleError).toHaveBeenCalled();
  });

  it('should warn when using invalid child in SubMenu', () => {
    const consoleError = vi.spyOn(console, 'error');
    render(
      <Menu>
        <Menu.SubMenu title="test">
          <Menu.Item>valid item</Menu.Item>
          <div>invalid child</div>
        </Menu.SubMenu>
      </Menu>,
    );
    expect(consoleError).toHaveBeenCalled();
  });
});
