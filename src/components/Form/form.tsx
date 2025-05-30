import type { FormEvent, FormHTMLAttributes, ReactNode } from 'react';
import { createContext, forwardRef, useImperativeHandle } from 'react';
import type { FormState } from './useStore';
import useStore from './useStore';
import type { ValidateError } from 'async-validator';

export type RenderProps = (form: FormState) => ReactNode;

export interface FormProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'children'> {
  name?: string;
  initialValues?: Record<string, any>;
  onFinish?: (values: Record<string, any>) => void;
  onFinishFailed?: (values: Record<string, any>, errors: Record<string, ValidateError[]>) => void;
  children?: ReactNode | RenderProps;
}

export type IFormContext = Pick<
  ReturnType<typeof useStore>,
  'dispatch' | 'fields' | 'validateField'
> &
  Pick<FormProps, 'initialValues'>;

export type IFormRef = Omit<ReturnType<typeof useStore>, 'fields' | 'dispatch' | 'form'>;

export const FormContext = createContext<IFormContext>({} as IFormContext);

export const Form = forwardRef<IFormRef, FormProps>((props, ref) => {
  const { name = 'form', children, initialValues, onFinish, onFinishFailed, ...reset } = props;
  const { form, fields, dispatch, ...resetProps } = useStore(initialValues);
  const { validateField, validateAllFields } = resetProps;
  const passedContext: IFormContext = { dispatch, fields, initialValues, validateField };

  let childrenNode: ReactNode;
  if (typeof children === 'function') {
    childrenNode = children(form);
  } else {
    childrenNode = children;
  }

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

  useImperativeHandle(ref, () => {
    return {
      ...resetProps,
    };
  });

  return (
    <>
      <FormContext.Provider value={passedContext}>
        <form name={name} {...reset} className="form" onSubmit={submitForm}>
          {childrenNode}
        </form>
      </FormContext.Provider>
    </>
  );
});

export default Form;
