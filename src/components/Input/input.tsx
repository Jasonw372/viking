import type React from 'react';
import Icon from '../Icon';
import classNames from 'classnames';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useState, forwardRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean; // 是否禁用输入框
  size?: 'lg' | 'sm'; // 输入框的大小，可选值为 'lg' 或 'sm'
  prefixIcon?: IconProp; // 输入框前缀图标
  suffixIcon?: IconProp; // 输入框后缀图标
  prepend?: React.ReactNode; // 输入框前置内容
  append?: React.ReactNode; // 输入框后置内容
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // 输入框内容变化时的回调函数
  value?: string; // 输入框的值
  defaultValue?: string; // 输入框的默认值
}

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
      {prepend && <div className="nested-prepend">{prepend}</div>}
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
      {append && <div className="nested-append">{append}</div>}
    </div>
  );
});

export default Input;
