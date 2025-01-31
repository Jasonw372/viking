import React from 'react';
import classNames from 'classnames';

/**
 * FlexGap - 间距类型
 */
export type FlexGap = 'sm' | 'md' | 'lg' | number;
/**
 * FlexWrap - 换行类型
 */
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
/**
 * FlexAlign - 对齐类型
 */
export type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
/**
 * FlexJustify - 间距类型
 */
export type FlexJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

/**
 * FlexDirection - 排列类型
 */
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

/**
 * Flex属性
 */
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

/**
 * Flex组件
 */
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
          sm: 8,
          md: 16,
          lg: 24,
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
