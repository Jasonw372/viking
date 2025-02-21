import Checkbox from './checkBox';
import CheckGroup from './checkGroup';
import CheckBox from './checkBox';

export type ICheckBoxComponent = typeof Checkbox & {
  Group: typeof CheckGroup;
};

const TransCheckBox: ICheckBoxComponent = CheckBox as ICheckBoxComponent;
TransCheckBox.Group = CheckGroup;

export default TransCheckBox;
