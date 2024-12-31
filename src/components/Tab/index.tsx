import type { FC, PropsWithChildren } from 'react';
import { Tab, type TabProps } from './tab';
import { TabItem, type TabItemProps } from './tabItem';

export type ITabComponent = FC<PropsWithChildren<TabProps>> & {
  Item: FC<PropsWithChildren<TabItemProps>>;
};

const TransTab = Tab as ITabComponent;
TransTab.Item = TabItem;

export default TransTab;
