import type { Meta, StoryObj } from '@storybook/react';
import Form from '../Form';
import Input from '../Input';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import { useRef } from 'react';
import type { IFormRef } from './form';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    // layout: 'centered',
    docs: {
      description: {
        component: 'Form组件, 用于表单布局。',
      },
      controls: { disable: true },
      actions: { disable: true },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  name: '基本表单',
  render: _args => (
    <Form
      style={{
        width: '500px',
      }}
      onFinish={action('onFinish')}
      onFinishFailed={action('onFinishFailed')}
      initialValues={{
        name: '123@qq.com',
        password: '123456',
        repassword: '123456',
      }}
    >
      <Form.Item
        name="name"
        label="用户名"
        rules={[
          {
            required: true,
            message: '用户名是必填的',
          },
          {
            type: 'email',
            message: '请输入正确的邮箱',
          },
        ]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '密码是必填的',
          },
          {
            min: 6,
            message: '密码长度不能小于6位',
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        name="repassword"
        label="重复密码"
        rules={[
          {
            required: true,
            message: '请再次输入密码',
          },
          ({ getFieldValue }) => ({
            asyncValidator: (_, value) => {
              return new Promise((resolve, reject) => {
                if (value !== getFieldValue('password')) {
                  reject('两次密码输入不一致');
                }
                resolve();
              });
            },
          }),
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <div
        className="agreement-section"
        style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      >
        <Form.Item
          name="agreement"
          valuePropName="checked"
          getValueFromEvent={e => e.target.checked}
          rules={[
            () => ({
              asyncValidator: (_, value) => {
                return new Promise((resolve, reject) => {
                  if (value !== true) {
                    reject('请同意用户协议');
                  }
                  resolve();
                });
              },
            }),
          ]}
        >
          <Input type="checkbox" />
        </Form.Item>
        <span className="agree-text">
          &nbsp;注册即代表你同意<a href="#">用户协议</a>
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="submit" btnType="primary">
          Submit
        </Button>
      </div>
    </Form>
  ),
};

export const RenderProps: Story = {
  name: 'Render Props的表单',
  render: _args => (
    <Form
      style={{
        width: '500px',
      }}
      onFinish={action('onFinish')}
      onFinishFailed={action('onFinishFailed')}
    >
      {({ isValid, isSubmitting }) => (
        <>
          <Form.Item
            name="name"
            label="用户名"
            rules={[
              {
                required: true,
                message: '用户名是必填的',
              },
              {
                type: 'email',
                message: '请输入正确的邮箱',
              },
            ]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '密码是必填的',
              },
              {
                min: 6,
                message: '密码长度不能小于6位',
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item
            name="repassword"
            label="重复密码"
            rules={[
              {
                required: true,
                message: '请再次输入密码',
              },
              ({ getFieldValue }) => ({
                asyncValidator: (_, value) => {
                  return new Promise((resolve, reject) => {
                    if (value !== getFieldValue('password')) {
                      reject('两次密码输入不一致');
                    }
                    resolve();
                  });
                },
              }),
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <div
            className="agreement-section"
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <Form.Item
              name="agreement"
              valuePropName="checked"
              getValueFromEvent={e => e.target.checked}
              rules={[
                () => ({
                  asyncValidator: (_, value) => {
                    return new Promise((resolve, reject) => {
                      if (value !== true) {
                        reject('请同意用户协议');
                      }
                      resolve();
                    });
                  },
                }),
              ]}
            >
              <Input type="checkbox" />
            </Form.Item>
            <span className="agree-text">
              &nbsp;注册即代表你同意<a href="#">用户协议</a>
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" btnType="primary">
              登录 {isSubmitting ? '验证中' : '验证完毕'} {isValid ? '验证通过' : '验证失败'}
            </Button>
          </div>
        </>
      )}
    </Form>
  ),
};

export const BasicRef: Story = {
  name: '基本表单Ref',
  render: _args => {
    const formRef = useRef<IFormRef>(null);
    return (
      <Form
        style={{
          width: '500px',
        }}
        onFinish={action('onFinish')}
        onFinishFailed={action('onFinishFailed')}
        initialValues={{
          name: '123@qq.com',
          password: '123456',
          repassword: '123456',
        }}
        ref={formRef}
      >
        <Form.Item
          name="name"
          label="用户名"
          rules={[
            {
              required: true,
              message: '用户名是必填的',
            },
            {
              type: 'email',
              message: '请输入正确的邮箱',
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '密码是必填的',
            },
            {
              min: 6,
              message: '密码长度不能小于6位',
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          name="repassword"
          label="重复密码"
          rules={[
            {
              required: true,
              message: '请再次输入密码',
            },
            ({ getFieldValue }) => ({
              asyncValidator: (_, value) => {
                return new Promise((resolve, reject) => {
                  if (value !== getFieldValue('password')) {
                    reject('两次密码输入不一致');
                  }
                  resolve();
                });
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <div
          className="agreement-section"
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Form.Item
            name="agreement"
            valuePropName="checked"
            getValueFromEvent={e => e.target.checked}
            rules={[
              () => ({
                asyncValidator: (_, value) => {
                  return new Promise((resolve, reject) => {
                    if (value !== true) {
                      reject('请同意用户协议');
                    }
                    resolve();
                  });
                },
              }),
            ]}
          >
            <Input type="checkbox" />
          </Form.Item>
          <span className="agree-text">
            &nbsp;注册即代表你同意<a href="#">用户协议</a>
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" btnType="primary">
            Submit
          </Button>
        </div>
        <Button
          type="reset"
          onClick={() => {
            formRef.current?.resetFields();
          }}
        >
          Reset
        </Button>
      </Form>
    );
  },
};
