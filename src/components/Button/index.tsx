import Button from './button';

export type IButtonComponent = typeof Button;

const TransButton = Button as IButtonComponent;

export default TransButton;
