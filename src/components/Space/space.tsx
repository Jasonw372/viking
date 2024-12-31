import React, { type FC, type CSSProperties, type ReactNode } from 'react';
import classNames from 'classnames';

export type SpaceSize = 'small' | 'middle' | 'large' | number;
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export type SpaceDirection = 'vertical' | 'horizontal';

export interface SpaceProps {
  className?: string;
  style?: CSSProperties;
  size?: SpaceSize;
  align?: SpaceAlign;
  direction?: SpaceDirection;
  wrap?: boolean;
  split?: ReactNode;
  children?: ReactNode;
  compact?: boolean;
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
};

export const Space: FC<SpaceProps> = props => {
  const {
    className,
    style,
    size = 'small',
    align,
    direction = 'horizontal',
    wrap = false,
    split,
    children,
    compact = false,
  } = props;

  const getMargin = (size: SpaceSize) => {
    return typeof size === 'string' ? spaceSize[size] : size;
  };

  const margin = getMargin(size);
  const gapStyle = {
    '--space-gap': `${margin}px`,
  } as React.CSSProperties;

  const classes = classNames('space', className, `space-${direction}`, {
    [`space-align-${align}`]: align,
    'space-wrap': wrap,
    'space-compact': compact,
  });

  const childrenList = React.Children.toArray(children).filter(
    child => child !== null && child !== '',
  );

  return (
    <div className={classes} style={{ ...style, ...gapStyle }}>
      {childrenList.map((child, i) => {
        return (
          <div key={i} className="space-item">
            {child}
            {i < childrenList.length - 1 && split && (
              <div className="space-split-wrapper">
                <div className="space-split">{split}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

Space.displayName = 'Space';
export default Space;
