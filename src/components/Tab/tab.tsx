import classNames from 'classnames';
import React, { useState, type PropsWithChildren } from 'react';
import type { TabItemProps } from './tabItem';

type SelectCallback = (selectedIndex: number) => void;

export type TabType = 'card' | 'line';

export interface TabProps {
  defaultIndex?: number;
  activeIndex?: number;
  onSelect?: SelectCallback;
  className?: string;
  style?: React.CSSProperties;
  type?: TabType;
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
        return child;
      }
      return null;
    });
  }

  return (
    <div className={`tabs ${className}`} style={style} data-testid="test-tab">
      <ul
        className={classNames('tabs-nav', {
          'nav-line': type === 'line',
          'nav-card': type === 'card',
        })}
      >
        {renderNav(children)}
      </ul>

      <div className="tabs-content">{renderContent(children)}</div>
    </div>
  );
};

export default Tab;
