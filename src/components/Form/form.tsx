import type { FormHTMLAttributes } from 'react';
import React, { createContext } from 'react';
import useStore from './useStore.ts';
export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  name?: string;
  initialValues?: Record<string, any>;
}

export type IFormContext = Pick<ReturnType<typeof useStore>, 'dispatch' | 'fields'> &
  Pick<FormProps, 'initialValues'>;
export const FormContext = createContext<IFormContext>({} as IFormContext);
export const Form: React.FC<React.PropsWithChildren<FormProps>> = props => {
  const { name = 'form', children, initialValues, ...reset } = props;
  const { form, fields, dispatch } = useStore();
  const passedContext: IFormContext = { dispatch, fields, initialValues };

  return (
    <>
      <FormContext.Provider value={passedContext}>
        <form name={name} {...reset}>
          {children}
        </form>
      </FormContext.Provider>
      <div>
        <pre>
          <code>{JSON.stringify(fields, null, 2)}</code>
        </pre>
        <pre>
          <code>{JSON.stringify(form, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export default Form;
