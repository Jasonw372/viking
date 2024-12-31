import type { PropsWithChildren } from 'react';

export interface TabItemProps {
  label: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const TabItem: React.FC<PropsWithChildren<TabItemProps>> = ({ children }) => {
  return <div className="tab-panel">{children}</div>;
};

TabItem.displayName = 'Tab.Item';

export default TabItem;
