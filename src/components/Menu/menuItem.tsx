import { useContext, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
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
