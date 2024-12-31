import classNames from 'classnames';
import React from 'react';
import { createContext, useState, type PropsWithChildren } from 'react';
import type { MenuItemProps } from './menuItem';
export type MenuMode = 'horizontal' | 'vertical';

type SelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  mode?: MenuMode;
  onSelect?: SelectCallback; // 选择菜单项
  onClick?: (index: string) => void; // 点击菜单项
  className?: string;
  style?: React.CSSProperties;
  defaultOpenSubMenus?: string[];
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
    defaultOpenSubMenus = [],
    onSelect,
    onClick,
    ...restProps
  } = props;

  const [activte, setActive] = useState(defaultIndex);

  const handleSelect = (index: string) => {
    setActive(index);
    onSelect?.(index);
  };

  const passedContext: IMenuContext = {
    index: activte,
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
