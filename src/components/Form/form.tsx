import type { FormEvent, FormHTMLAttributes } from 'react';
import React, { createContext } from 'react';
import useStore from './useStore.ts';
import type { ValidateError } from 'async-validator';
export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  name?: string;
  initialValues?: Record<string, any>;
  onFinish?: (values: Record<string, any>) => void;
  onFinishFailed?: (values: Record<string, any>, errors: Record<string, ValidateError[]>) => void;
}

export type IFormContext = Pick<
  ReturnType<typeof useStore>,
  'dispatch' | 'fields' | 'validateField'
> &
  Pick<FormProps, 'initialValues'>;
export const FormContext = createContext<IFormContext>({} as IFormContext);
export const Form: React.FC<React.PropsWithChildren<FormProps>> = props => {
  const { name = 'form', children, initialValues, onFinish, onFinishFailed, ...reset } = props;
  const { form, fields, dispatch, validateField, validateAllFields } = useStore();
  const passedContext: IFormContext = { dispatch, fields, initialValues, validateField };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { isValid, errors, values } = await validateAllFields();
    if (isValid && onFinish) {
      onFinish(values);
    } else if (!isValid && onFinishFailed) {
      onFinishFailed(values, errors);
    }
  };

  return (
    <>
      <FormContext.Provider value={passedContext}>
        <form name={name} {...reset} className="form" onSubmit={submitForm}>
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
