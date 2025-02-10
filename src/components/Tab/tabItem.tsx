import React from 'react';
import type { PropsWithChildren } from 'react';

// 定义 TabItemProps 接口，用于描述 TabItem 组件的属性
export interface TabItemProps {
  // 标签的文本
  label: string;
  // 是否禁用标签，默认为 false
  disabled?: boolean;
  // 子组件
  children: React.ReactNode;
}

export const TabItem: React.FC<PropsWithChildren<TabItemProps>> = ({ children }) => {
  return children;
};

TabItem.displayName = 'Tab.Item';

export default TabItem;
