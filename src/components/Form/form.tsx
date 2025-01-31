import type React from 'react';

export interface FormProps {
  name?: string;
}

export const Form: React.FC<React.PropsWithChildren<FormProps>> = props => {
  const { name = 'form', children } = props;

  return <form name={name}>{children}</form>;
};

export default Form;
