import classNames from 'classnames';
import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

export interface CheckboxProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'defaultValue' | 'onChange'
  > {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children?: ReactNode;
  value?: number | string;
}

export interface CheckboxRef {
  focus: () => void;
  blur: () => void;
}

const Checkbox = forwardRef<CheckboxRef, CheckboxProps>((props, ref) => {
  const { label, checked, defaultChecked, disabled, children, onChange, className, ...restProps } =
    props;
  const isControlled = checked !== undefined;
  const [innerChecked, setInnerChecked] = useState(defaultChecked || false);
  const classes = classNames('checkbox', {
    'is-disabled': disabled,
  });
  const classesInner = classNames('checkbox-inner', className);

  useEffect(() => {
    if (isControlled) {
      setInnerChecked(checked);
    }
  }, [checked, isControlled]);

  const checkRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    if (disabled) {
      return;
    }

    if (!isControlled) {
      setInnerChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  useImperativeHandle(ref, () => ({
    focus: () => {
      checkRef.current?.focus();
    },
    blur: () => {
      checkRef.current?.blur();
    },
  }));

  return (
    <div className={classes}>
      <input
        {...restProps}
        type="checkbox"
        checked={isControlled ? checked : innerChecked}
        onChange={handleChange}
        className={classesInner}
        ref={checkRef}
        disabled={disabled}
      />
      {(children || label) && <div className="checkbox-label">{children ? children : label}</div>}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
export default Checkbox;
