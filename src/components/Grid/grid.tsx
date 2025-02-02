import React from 'react';
import classNames from 'classnames';

/**
 * 栅格布局行属性
 * @interface
 * @property {number | [number, number]} [gutter] - 栅格间隔
 * @property {'start' | 'end' | 'center' | 'space-around' | 'space-between'} [justify] - 水平排列方式
 * @property {'top' | 'middle' | 'bottom'} [align] - 垂直排列方式
 * @property {React.ReactNode} [children] - 子元素
 */
interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number | [number, number]; // 栅格间隔
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  align?: 'top' | 'middle' | 'bottom';
  children?: React.ReactNode;
}

/**
 * 栅格布局列属性
 * @interface
 * @property {number} [span] - 栅格占据的列数
 * @property {number} [offset] - 栅格左侧的间隔格数
 * @property {number} [pull] - 栅格向左移动格数
 * @property {number} [push] - 栅格向右移动格数
 * @property {number | { span?: number; offset?: number }} [xs] - <576px 响应式栅格
 * @property {number | { span?: number; offset?: number }} [sm] - ≥576px 响应式栅格
 * @property {number | { span?: number; offset?: number }} [md] - ≥768px 响应式栅格
 * @property {number | { span?: number; offset?: number }} [lg] - ≥992px 响应式栅格
 * @property {number | { span?: number; offset?: number }} [xl] - ≥1200px 响应式栅格
 * @property {React.ReactNode} [children] - 子元素
 */
interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number; // 栅格占据的列数
  offset?: number; // 栅格左侧的间隔格数
  pull?: number; // 栅格向左移动格数
  push?: number; // 栅格向右移动格数
  xs?: number | { span?: number; offset?: number };
  sm?: number | { span?: number; offset?: number };
  md?: number | { span?: number; offset?: number };
  lg?: number | { span?: number; offset?: number };
  xl?: number | { span?: number; offset?: number };
  children?: React.ReactNode;
}

/**
 * 栅格布局行组件
 */
export const Row: React.FC<RowProps> = ({
  children,
  gutter = 0,
  justify = 'start',
  align = 'top',
  className,
  ...restProps
}) => {
  const classes = classNames(
    'el-row',
    {
      [`is-justify-${justify}`]: justify,
      [`is-align-${align}`]: align,
    },
    className,
  );

  const rowStyle: React.CSSProperties = {
    ...(restProps.style || {}),
  };

  if (Array.isArray(gutter)) {
    const [horizontalGap, verticalGap] = gutter;
    rowStyle.marginLeft = `-${horizontalGap / 2}px`;
    rowStyle.marginRight = `-${horizontalGap / 2}px`;
    rowStyle.rowGap = `${verticalGap}px`;
  } else if (typeof gutter === 'number') {
    rowStyle.marginLeft = `-${gutter / 2}px`;
    rowStyle.marginRight = `-${gutter / 2}px`;
  }

  return (
    <div className={classes} style={rowStyle} {...restProps}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;

        const childStyle: React.CSSProperties = {
          ...(child.props.style || {}),
        };

        if (Array.isArray(gutter)) {
          const [horizontalGap] = gutter;
          childStyle.paddingLeft = `${horizontalGap / 2}px`;
          childStyle.paddingRight = `${horizontalGap / 2}px`;
        } else if (typeof gutter === 'number') {
          childStyle.paddingLeft = `${gutter / 2}px`;
          childStyle.paddingRight = `${gutter / 2}px`;
        }

        return React.cloneElement(child, {
          ...child.props,
          style: childStyle,
        });
      })}
    </div>
  );
};

export const Col: React.FC<ColProps> = ({
  children,
  span,
  offset,
  pull,
  push,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  ...restProps
}) => {
  const classes = classNames(
    'el-col',
    {
      [`el-col-${span}`]: span,
      [`el-col-offset-${offset}`]: offset,
      [`el-col-pull-${pull}`]: pull,
      [`el-col-push-${push}`]: push,
    },
    className,
  );

  // 响应式布局类名
  const responsiveClasses = ['xs', 'sm', 'md', 'lg', 'xl'].reduce(
    (acc, size) => {
      const prop = { xs, sm, md, lg, xl }[size as keyof typeof xs];
      if (!prop) return acc;

      if (typeof prop === 'number') {
        acc[`el-col-${size}-${prop}`] = true;
      } else if (typeof prop === 'object') {
        const responsiveProp = prop as { span?: number; offset?: number };
        if (responsiveProp.span) acc[`el-col-${size}-${responsiveProp.span}`] = true;
        if (responsiveProp.offset) acc[`el-col-${size}-offset-${responsiveProp.offset}`] = true;
      }
      return acc;
    },
    {} as Record<string, boolean>,
  );

  return (
    <div className={classNames(classes, responsiveClasses)} {...restProps}>
      {children}
    </div>
  );
};
