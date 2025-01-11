import type React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useState, forwardRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  size?: 'lg' | 'sm';
  prefixIcon?: IconProp;
  suffixIcon?: IconProp;
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
}

const wrapTextWithSpan = (content: React.ReactNode) => {
  if (typeof content === 'string' || typeof content === 'number') {
    return <span>{content}</span>;
  }
  return content;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    disabled,
    size,
    prefixIcon,
    suffixIcon,
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
    'input-prefix': !!prefixIcon,
    'input-suffix': !!suffixIcon,
  });

  return (
    <div className={classes} style={style}>
      {prepend && <div className="nested-prepend">{wrapTextWithSpan(prepend)}</div>}
      <div className="input-inner-wrapper">
        {prefixIcon && (
          <div className="icon-prefix">
            <Icon icon={prefixIcon} />
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
        {suffixIcon && (
          <div className="icon-suffix">
            <Icon icon={suffixIcon} />
          </div>
        )}
      </div>
      {append && <div className="nested-append">{wrapTextWithSpan(append)}</div>}
    </div>
  );
});

export default Input;
