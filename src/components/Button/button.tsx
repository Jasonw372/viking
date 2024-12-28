import classNames from "classnames";
import React, { PropsWithChildren } from "react";

export type ButtonSize = "lg" | "sm";
export type ButtonType =
  | "default"
  | "primary"
  | "info"
  | "success"
  | "danger"
  | "warning"
  | "link";

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  circle?: boolean;
  plain?: boolean;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {
    className,
    disabled = false,
    size,
    btnType = "default",
    circle = false,
    plain = false,
    children,
    href,
    ...restProps
  } = props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`btn-circle`]: circle,
    [`btn-plain`]: plain,
    disabled: btnType === "link" && disabled,
  });

  if (btnType === "link") {
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
