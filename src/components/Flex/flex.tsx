import React from 'react';
import classNames from 'classnames';

export type FlexGap = 'small' | 'middle' | 'large' | number;
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
export type FlexJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  vertical?: boolean;
  wrap?: FlexWrap;
  justify?: FlexJustify;
  align?: FlexAlign;
  flex?: string | number;
  gap?: FlexGap | [FlexGap, FlexGap];
  component?: string;
  direction?: FlexDirection;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const {
    prefixCls = 'flex',
    className,
    style,
    children,
    flex,
    direction,
    wrap,
    align,
    justify,
    gap,
    vertical = false,
    component: Component = 'div',
    ...others
  } = props;

  const mergedStyle: React.CSSProperties = { ...style };

  if (flex) {
    mergedStyle.flex = flex;
  }

  // Handle gap
  if (gap) {
    const getGapSize = (size: FlexGap) => {
      if (typeof size === 'number') {
        return size;
      }
      return (
        {
          small: 8,
          middle: 16,
          large: 24,
        }[size] || 0
      );
    };

    if (Array.isArray(gap)) {
      const [rowGap, columnGap] = gap;
      mergedStyle.rowGap = getGapSize(rowGap);
      mergedStyle.columnGap = getGapSize(columnGap);
    } else {
      mergedStyle.gap = getGapSize(gap);
    }
  }

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${direction}`]: direction,
      [`${prefixCls}-wrap-${wrap}`]: wrap,
      [`${prefixCls}-align-${align}`]: align,
      [`${prefixCls}-justify-${justify}`]: justify,
      [`${prefixCls}-vertical`]: vertical,
    },
    className,
  );

  return React.createElement(
    Component,
    {
      ref,
      className: classes,
      style: mergedStyle,
      ...others,
    },
    children,
  );
});

Flex.displayName = 'Flex';

export default Flex;
