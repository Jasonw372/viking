import classNames from 'classnames';
import React, { useContext, useEffect } from 'react';
import { FormContext } from './form';
import type { CustomRule } from './useStore';

export interface FormItemProps {
  name: string;
  label?: string;
  valuePropName?: string; // 需要监听的属性名
  trigger?: string; // 触发时机
  rules?: CustomRule[];
  validateTrigger?: string; // 验证时机
  getValueFromEvent?: (event: React.ChangeEvent<any>) => any; // 获取值的函数
}

export const FormItem: React.FC<React.PropsWithChildren<FormItemProps>> = props => {
  const {
    label,
    name,
    children,
    valuePropName = 'value',
    trigger = 'onChange',
    getValueFromEvent = e => e.target.value,
    rules = [],
    validateTrigger = 'onBlur',
  } = props;
  const { dispatch, fields, initialValues, validateField } = useContext(FormContext);
  const classes = classNames('row', {
    'no-label': !label,
  });

  const fieldState = fields[name];
  const value = fieldState?.value;
  const errors = fieldState?.errors;
  const isRequired = rules?.some(rule => typeof rule !== 'function' && rule.required);
  const hasError = errors && errors.length > 0;

  const labelClass = classNames({
    'form-item-required': isRequired,
  });
  const itemClass = classNames('form-item-control', {
    'form-item-has-error': hasError,
  });

  const controlProps: Record<string, any> = {};
  controlProps[valuePropName] = value ?? '';
  controlProps[trigger] = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = getValueFromEvent(e);
    dispatch({ type: 'updateValue', payload: { name, value } });
  };
  if (rules.length > 0) {
    controlProps[validateTrigger] = async () => {
      await validateField(name);
    };
  }

  const childList = React.Children.toArray(children);

  if (childList.length > 1) {
    console.warn('FormItem only accepts one child.');
    return null;
  }

  if (!childList.length) {
    console.error('FormItem must have one child.');
    return null;
  }

  const child = childList[0] as React.ReactElement;

  if (!React.isValidElement(child)) {
    console.error('Child Component must be a valid React element.');
  }

  const returnChildNode = React.cloneElement(child, {
    ...child.props,
    ...controlProps,
  });

  const defaultValue = initialValues?.[name] ?? '';

  useEffect(() => {
    dispatch({
      type: 'addField',
      payload: {
        name,
        value: {
          label,
          name,
          value: defaultValue,
          rules,
          errors: [],
          isValid: true,
        },
      },
    });
  }, []);

  return (
    <div className={classes}>
      <div className="form-item-label">
        {label && (
          <label title={label} className={labelClass}>
            {label}
          </label>
        )}
      </div>
      <div className="form-item">
        <div className={itemClass}>{returnChildNode}</div>
        {hasError && (
          <div className="form-item-explain">
            <span>{errors[0].message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormItem;
