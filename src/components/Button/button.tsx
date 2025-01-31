import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import React from 'react';

export type ButtonSize = 'lg' | 'sm';

export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'link';

interface BaseButtonProps {
  className?: string; // 自定义类名
  disabled?: boolean; // 是否禁用
  size?: ButtonSize; // 按钮尺寸
  btnType?: ButtonType; // 按钮类型
  circle?: boolean; // 是否为圆形按钮
  plain?: boolean; // 是否为朴素样式
}

/**
 * 原生按钮属性
 */
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;

/**
 * 链接按钮属性
 */
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

/**
 * 按钮组件属性
 */
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * 按钮组件
 */
export const Button: React.FC<PropsWithChildren<ButtonProps>> = props => {
  const {
    className,
    disabled = false,
    size,
    btnType = 'default',
    circle = false,
    plain = false,
    children,
    href,
    ...restProps
  } = props;

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    ['btn-circle']: circle,
    ['btn-plain']: plain,
    disabled: btnType === 'link' && disabled,
  });

  if (btnType === 'link') {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
