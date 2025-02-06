import type { FC, PropsWithChildren } from 'react';
import type { FormProps } from './form';
import Form from './form';
import type { FormItemProps } from './formItem';
import FormItem from './formItem';

export type IFormComponent = FC<FormProps> & {
  Item: FC<PropsWithChildren<FormItemProps>>;
};

const TransForm: IFormComponent = Form as IFormComponent;
TransForm.Item = FormItem;

export default TransForm;
