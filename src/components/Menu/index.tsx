import type { MenuProps } from './menu';
import Menu from './menu';
import type { MenuItemProps } from './menuItem';
import MenuItem from './menuItem';
import type { FC, PropsWithChildren } from 'react';
import type { SubMenuProps } from './subMenu';
import SubMenu from './subMenu';

export type IMenuComponent = FC<PropsWithChildren<MenuProps>> & {
  Item: FC<PropsWithChildren<MenuItemProps>>;
  SubMenu: FC<PropsWithChildren<SubMenuProps>>;
};

const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
