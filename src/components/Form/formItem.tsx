import classNames from 'classnames';
import type React from 'react';

export interface FormItemProps {
  label?: string;
}

export const FormItem: React.FC<React.PropsWithChildren<FormItemProps>> = props => {
  const { label, children } = props;

  const classes = classNames('form-item', {
    'no-label': !label,
  });
  return (
    <div className={classes}>
      <div className="form-item-label">{label && <label title={label}>{label}</label>}</div>
      <div className="form-item">{children}</div>
    </div>
  );
};

export default FormItem;
