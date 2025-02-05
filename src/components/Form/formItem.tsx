import classNames from 'classnames';
import React, { useContext, useEffect } from 'react';
import { FormContext } from './form';
export interface FormItemProps {
  name: string;
  label?: string;
  valuePropName?: string; // 需要监听的属性名
  trigger?: string; // 触发时机
  getValueFromEvent?: (event: React.ChangeEvent<HTMLInputElement>) => any; // 获取值的函数
}

export const FormItem: React.FC<React.PropsWithChildren<FormItemProps>> = props => {
  const {
    label,
    name,
    children,
    valuePropName = 'value',
    trigger = 'onChange',
    getValueFromEvent = e => e.target.value,
  } = props;
  const { dispatch, fields } = useContext(FormContext);
  const classes = classNames('form-item', {
    'no-label': !label,
  });

  const fieldState = fields[name];
  const value = fieldState?.value;

  const controlProps: Record<string, any> = {};
  controlProps[valuePropName] = value;
  controlProps[trigger] = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = getValueFromEvent(e);
    dispatch({ type: 'updateField', payload: { name, value } });
  };

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

  if (React.isValidElement(child)) {
    console.error('Child Component must be a valid React element.');
  }

  const returnChildNode = React.cloneElement(child, {
    ...child.props,
    ...controlProps,
  });

  useEffect(() => {
    dispatch({
      type: 'addField',
      payload: {
        name,
        value: {
          label,
          name,
          value: '',
        },
      },
    });
  }, []);
  return (
    <div className={classes}>
      <div className="form-item-label">{label && <label title={label}>{label}</label>}</div>
      <div className="form-item">{returnChildNode}</div>
    </div>
  );
};

export default FormItem;
