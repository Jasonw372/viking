import classNames from 'classnames';
import React, { useState, type PropsWithChildren } from 'react';
import type { TabItemProps } from './tabItem';

type SelectCallback = (selectedIndex: number) => void; // 选择回调函数类型

export type TabType = 'card' | 'line'; // 标签类型

export interface TabProps {
  defaultIndex?: number; // 默认选中的标签索引
  activeIndex?: number; // 当前活动的标签索引
  onSelect?: SelectCallback; // 选择标签时的回调函数
  className?: string; // 自定义样式类名
  style?: React.CSSProperties; // 自定义样式
  type?: TabType; // 标签类型
}

export const Tab: React.FC<PropsWithChildren<TabProps>> = props => {
  const {
    defaultIndex = 0,
    activeIndex,
    onSelect,
    className,
    style,
    type = 'line',
    children,
  } = props;
  const [internalActiveIndex, setInternalActiveIndex] = useState(defaultIndex);

  const currentActiveIndex = activeIndex !== undefined ? activeIndex : internalActiveIndex;

  const handleSelect = (index: number) => {
    if (activeIndex === undefined) {
      setInternalActiveIndex(index);
    }
    onSelect?.(index);
  };

  const renderNav = (children: React.ReactNode) => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childElement.props;

      return (
        <li
          className={classNames('tabs-nav-item', {
            'is-active': currentActiveIndex === index,
            'is-disabled': disabled,
          })}
          onClick={() => {
            if (!disabled) {
              handleSelect(index);
            }
          }}
        >
          {label}
        </li>
      );
    });
  };

  function renderContent(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, (child, index) => {
      if (index === currentActiveIndex) {
        const childElement = child as React.FunctionComponentElement<TabItemProps>;
        if (React.isValidElement(childElement)) {
          return <div className="tabs-content">{childElement}</div>;
        }
        return null;
      }
      return null;
    });
  }

  return (
    <div className={`tabs ${className}`} data-testid="test-tab">
      <ul
        className={classNames('tabs-nav', {
          'nav-line': type === 'line',
          'nav-card': type === 'card',
        })}
        style={style}
      >
        {renderNav(children)}
      </ul>

      {renderContent(children)}
    </div>
  );
};

export default Tab;
