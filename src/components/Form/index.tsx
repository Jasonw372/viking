import Form from './form';
import FormItem from './formItem';

export type IFormComponent = typeof Form & {
  Item: typeof FormItem;
};

const TransForm: IFormComponent = Form as IFormComponent;
TransForm.Item = FormItem;

export default TransForm;
