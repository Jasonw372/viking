import { createContext, ReactNode, useEffect, useState } from 'react';
import Checkbox from './checkBox';
import classNames from 'classnames';

export interface CheckboxGroupProps {
  options?: Array<{ label: string; value: string | number; disabled?: boolean }>; // 预定义选项
  value?: Array<string | number>; // 受控模式下的选中值
  defaultValue?: Array<string | number>; // 非受控模式下的默认选中值
  onChange?: (value: Array<string | number>) => void; // 值变化时的回调
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const CheckboxContext = createContext<{
  value?: Array<string | number>;
  onChange?: (childValue: string | number, checked: boolean) => void;
}>({});

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  children,
  disabled = false,
  className,
  style,
}) => {
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState<Array<string | number>>(defaultValue || []);

  const handleChildChange = (childValue: string | number, checked: boolean) => {
    const newValue = checked
      ? [...(innerValue || []), childValue]
      : (innerValue || []).filter(v => v !== childValue);

    if (!isControlled) {
      setInnerValue(newValue);
    }

    onChange?.(newValue);
  };

  useEffect(() => {
    if (isControlled && value) {
      setInnerValue(value);
    }
  }, [value, isControlled]);

  const contextValue = {
    value: isControlled ? value : innerValue,
    onChange: handleChildChange,
  };

  const classes = classNames('check-group', className);

  return (
    <CheckboxContext.Provider value={contextValue}>
      <div className={classes} style={style}>
        {options
          ? options.map(option => (
              <Checkbox
                key={option.value}
                value={option.value}
                label={option.label}
                disabled={disabled || option.disabled}
                checked={(contextValue.value || []).includes(option.value)}
                onChange={checked => handleChildChange(option.value, checked)}
              />
            ))
          : children}
      </div>
    </CheckboxContext.Provider>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
