import classNames from 'classnames';
import React from 'react';
import { createContext, useState, type PropsWithChildren } from 'react';
import type { MenuItemProps } from './menuItem';
export type MenuMode = 'horizontal' | 'vertical';

type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string; // 默认选中的菜单项索引
  selectedIndex?: string; // 当前选中的菜单项索引
  mode?: MenuMode; // 菜单的显示模式：水平或垂直
  onSelect?: SelectCallback; // 选择菜单项时的回调函数
  onClick?: (index: string) => void; // 点击菜单项时的回调函数
  className?: string; // 自定义样式类名
  style?: React.CSSProperties; // 自定义样式
  defaultOpenSubMenus?: string[]; // 默认展开的子菜单项索引数组
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  onClick?: (index: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0' });

const renderChildren = (children: React.ReactNode) => {
  return React.Children.map(children, (child, index) => {
    const childElement = child as React.FunctionComponentElement<MenuItemProps>;
    const { displayName } = childElement.type;
    if (displayName === 'Menu.Item' || displayName === 'Menu.SubMenu') {
      return React.cloneElement(childElement, {
        index: index.toString(),
      });
    } else {
      console.error('Warning: Menu has a child which is not a MenuItem or SubMenu component');
    }
  });
};
export const Menu: React.FC<PropsWithChildren<MenuProps>> = props => {
  const {
    className,
    mode = 'horizontal',
    style,
    children,
    defaultIndex = '0',
    selectedIndex,
    defaultOpenSubMenus = [],
    onSelect,
    onClick,
    ...restProps
  } = props;

  const [active, setActive] = useState(defaultIndex);

  const currentActive = selectedIndex !== undefined ? selectedIndex : active;

  const handleSelect = (index: string) => {
    if (selectedIndex === undefined) {
      setActive(index);
    }
    onSelect?.(index);
  };

  const passedContext: IMenuContext = {
    index: currentActive,
    onSelect: handleSelect,
    onClick,
    mode,
    defaultOpenSubMenus,
  };

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal',
  });

  return (
    <ul className={classes} style={style} data-testid="test-menu" {...restProps}>
      <MenuContext.Provider value={passedContext}>{renderChildren(children)}</MenuContext.Provider>
    </ul>
  );
};

Menu.displayName = 'Menu';

export default Menu;
