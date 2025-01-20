import React, { type CSSProperties, useRef, forwardRef } from 'react';
import classNames from 'classnames';

export type SwitchSize = 'sm' | 'lg' | 'default';

export interface SwitchProps {
  className?: string;
  style?: CSSProperties;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  size?: SwitchSize;
  loading?: boolean;
  onChange?: (checked: boolean) => void;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  autoFocus?: boolean;
}

export interface SwitchRef {
  focus: () => void;
  blur: () => void;
}

export const Switch = forwardRef<SwitchRef, SwitchProps>((props, ref) => {
  const {
    className,
    style,
    checked,
    defaultChecked = false,
    disabled = false,
    size = 'default',
    loading = false,
    onChange,
    checkedChildren,
    unCheckedChildren,
    autoFocus = false,
  } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [innerChecked, setInnerChecked] = React.useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : innerChecked;

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      buttonRef.current?.focus();
    },
    blur: () => {
      buttonRef.current?.blur();
    },
  }));

  const handleClick = () => {
    if (disabled || loading) return;

    if (checked === undefined) {
      setInnerChecked(!innerChecked);
    }

    onChange?.(!isChecked);
  };

  const classes = classNames('switch', className, {
    'switch-checked': isChecked,
    'switch-disabled': disabled,
    'switch-loading': loading,
    [`switch-${size}`]: size !== 'default',
  });

  return (
    <button
      ref={buttonRef}
      autoFocus={autoFocus}
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      className={classes}
      style={style}
      onClick={handleClick}
    >
      <div className="switch-handle">{loading && <div className="switch-loading-icon" />}</div>
      <div className="switch-inner">{isChecked ? checkedChildren : unCheckedChildren}</div>
    </button>
  );
});

Switch.displayName = 'Switch';
export default Switch;
