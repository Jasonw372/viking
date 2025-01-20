import { useContext, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string; // 菜单项的索引，可选
  disabled?: boolean; // 是否禁用菜单项，可选
  className?: string; // 自定义类名，可选
  style?: React.CSSProperties; // 自定义样式，可选
}

export const MenuItem: React.FC<PropsWithChildren<MenuItemProps>> = props => {
  const { className, index, disabled, style, children } = props;
  const { index: currentActive, onSelect, onClick } = useContext(MenuContext);

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': index === currentActive,
  });

  const handleClick = () => {
    if (onSelect && !disabled && typeof index === 'string') {
      onSelect(index);
    }

    if (onClick && index) {
      onClick(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'Menu.Item';

export default MenuItem;
