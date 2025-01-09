import type React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useState, forwardRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  size?: 'lg' | 'sm';
  icon?: IconProp;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    onChange,
    value,
    defaultValue,
    ...restProps
  } = props;
  const [inputValue, setInputValue] = useState(defaultValue || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    if (value === undefined) {
      setInputValue(e.target.value);
    }
  };

  const classes = classNames('input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  });

  return (
    <div className={classes} style={style}>
      {prepend && <div className="nested-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} />
        </div>
      )}
      <input
        ref={ref}
        className="input-inner"
        disabled={disabled}
        value={value !== undefined ? value : inputValue}
        onChange={handleChange}
        {...restProps}
      />
      {append && <div className="nested-append">{append}</div>}
    </div>
  );
});

export default Input;
