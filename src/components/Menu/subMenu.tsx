import { useContext, useState, type PropsWithChildren } from 'react';
import { MenuContext } from './menu';
import classNames from 'classnames';
import React from 'react';
import type { MenuItemProps } from './menuItem';
import Icon from '../Icon';
import Transition from '../Transition';

export interface SubMenuProps {
  index?: string; // 可选的索引，用于标识子菜单
  title: string; // 子菜单的标题
  className?: string; // 可选的类名，用于自定义样式
}
export const SubMenu: React.FC<PropsWithChildren<SubMenuProps>> = props => {
  const { index, title, className, children } = props;
  const { mode, index: activatedIndex, defaultOpenSubMenus } = useContext(MenuContext);
  const openedSubMenus = defaultOpenSubMenus as Array<string>;
  const isOpened = index && mode === 'vertical' ? openedSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': activatedIndex.startsWith(index || ''),
    'is-vertical': mode === 'vertical',
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  let timer: ReturnType<typeof setTimeout>;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const clickEvents =
    mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const renderChildren = (children: React.ReactNode) => {
    const subMenuClasses = classNames('submenu-container', {
      'menu-opened': menuOpen,
    });

    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'Menu.Item') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem component');
      }
    });
    return (
      <Transition in={menuOpen} timeout={300} classNames="zoom-in-top" appear unmountOnExit>
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon className="arrow-icon" icon="angle-down" />
      </div>
      {renderChildren(children)}
    </li>
  );
};

SubMenu.displayName = 'Menu.SubMenu';
export default SubMenu;
