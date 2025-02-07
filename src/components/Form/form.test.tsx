import type { FormProps } from './form.tsx';
import { beforeEach, describe, vitest, it, expect } from 'vitest';
import Form from './index.tsx';
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import Button from '../Button';
import Input from '../Input';
import type { IFormRef } from './form.tsx';
import { createRef } from 'react';

const testProps: FormProps = {
  name: 'test-form',
  initialValues: {
    username: 'viking',
    password: '12345',
    repassword: '23456',
    remember: false,
  },
  onFinish: vitest.fn(),
  onFinishFailed: vitest.fn(),
};

let nameInput: HTMLInputElement,
  pwdInput: HTMLInputElement,
  submitButton: HTMLButtonElement,
  rePwdInput: HTMLInputElement;
describe('testing Form component', () => {
  beforeEach(() => {
    render(
      <Form {...testProps}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { type: 'string', required: true, message: 'name error' },
            { type: 'string', min: 3, message: 'less than 3' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { type: 'string', required: true, message: 'password error' },
            { type: 'string', min: 4, message: 'less then 4' },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label="rePassword"
          name="repassword"
          rules={[
            {
              type: 'string',
              required: true,
              message: 'confirm password error',
            },
            { type: 'string', min: 4, message: 'less then 4' },
            ({ getFieldValue }) => ({
              asyncValidator(_, value) {
                return new Promise((resolve, reject) => {
                  if (value !== getFieldValue('password')) {
                    reject('Do not match!');
                  }
                  resolve();
                });
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Button type="submit" btnType="primary">
          Log in
        </Button>
      </Form>,
    );

    const { getByDisplayValue, getByText } = screen;
    nameInput = getByDisplayValue('viking');
    pwdInput = getByDisplayValue('12345');
    rePwdInput = getByDisplayValue('23456');
    submitButton = getByText('Log in');
  });

  it('should render the correct Form component', () => {
    const { getByText } = screen;
    expect(getByText('Username')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
    expect(getByText('rePassword')).toBeInTheDocument();

    expect(nameInput).toBeInTheDocument();
    expect(pwdInput).toBeInTheDocument();
    expect(rePwdInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submit form with invaild values should show the error message', () => {
    const { getByText } = screen;
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(pwdInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    waitFor(() => {
      expect(getByText('name error')).toBeInTheDocument();
      expect(getByText('password error')).toBeInTheDocument();
      expect(testProps.onFinishFailed).toHaveBeenCalled();
    });
  });

  it('change single input to invalid values should trigger the validate', () => {
    const { getByText } = screen;
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.click(submitButton);
    waitFor(() => {
      expect(getByText('name error')).toBeInTheDocument();
    });

    fireEvent.change(nameInput, { target: { value: '12' } });
    fireEvent.click(submitButton);
    waitFor(() => {
      expect(getByText('less than 3')).toBeInTheDocument();
    });
  });
  it('custom rules should work', () => {
    const { getByText } = screen;
    // change and blur comfirmPwd
    fireEvent.change(rePwdInput, { target: { value: '23456' } });
    fireEvent.blur(rePwdInput);
    waitFor(() => {
      expect(getByText('Do not match!')).toBeInTheDocument();
    });
    // change to the same
    fireEvent.change(rePwdInput, { target: { value: '12345' } });
    fireEvent.blur(rePwdInput);
    waitFor(() => {
      expect(getByText('Do not match!')).not.toBeInTheDocument();
    });
    fireEvent.click(submitButton);
    // submit the form with the right data
    waitFor(() => {
      expect(testProps.onFinish).toHaveBeenCalled();
    });
  });

  it('test form ref methods', async () => {
    const formRef = createRef<IFormRef>();
    render(
      <Form {...testProps} ref={formRef}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ type: 'string', required: true, message: 'name error' }]}
        >
          <Input />
        </Form.Item>
        <Button type="submit">Submit</Button>
      </Form>,
    );

    const { getByText } = screen;
    await act(async () => {
      // Test getFieldValue
      expect(formRef.current?.getFieldValue('username')).toBe('viking');

      // Test setFieldValue
      formRef.current?.setFieldValue('username', 'new value');
    });

    expect(formRef.current?.getFieldValue('username')).toHaveProperty('value', 'new value');

    await act(async () => {
      // Test validateField
      await formRef.current?.validateField('username');
    });

    expect(getByText('name error')).toBeInTheDocument();

    await act(async () => {
      // Test resetFields
      formRef.current?.resetFields();
    });
    expect(formRef.current?.getFieldValue('username')).toBe('viking');
  });
});
