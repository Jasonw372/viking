import { useContext, useState, type PropsWithChildren } from 'react';
import { MenuContext } from './menu';
import classNames from 'classnames';
import React from 'react';
import type { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

export const SubMenu: React.FC<PropsWithChildren<SubMenuProps>> = props => {
  const { index, title, className, children } = props;
  const { mode, index: activedIndex, defaultOpenSubMenus } = useContext(MenuContext);
  const openedSubMenus = defaultOpenSubMenus as Array<string>;
  const isOpened = index && mode === 'vertical' ? openedSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': activedIndex.startsWith(index || ''),
    'is-opened': menuOpen,
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
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren(children)}
    </li>
  );
};

SubMenu.displayName = 'Menu.SubMenu';
export default SubMenu;
