import classNames from 'classnames';
import React, { useContext, useEffect } from 'react';
import { FormContext } from './form';
export interface FormItemProps {
  name: string;
  label?: string;
}

export const FormItem: React.FC<React.PropsWithChildren<FormItemProps>> = props => {
  const { label, name, children } = props;
  const { dispatch, fields } = useContext(FormContext);
  const classes = classNames('form-item', {
    'no-label': !label,
  });

  const fieldState = fields[name];
  const value = fieldState?.value;

  const controlProps: Record<string, any> = {};
  // todo: 需要优化
  controlProps.value = value;
  controlProps.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch({ type: 'updateField', payload: { name, value: e.target.value } });
  };

  const childList = React.Children.toArray(children);
  // todo: 判断children类型，显示警告
  const child = childList[0] as React.ReactElement;
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
