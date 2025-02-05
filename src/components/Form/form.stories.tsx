import type { Meta, StoryObj } from '@storybook/react';
import Form from '../Form';
import Input from '../Input';

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
  render: _args => (
    <Form>
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
      <Form.Item name="password" label="密码">
        <Input type="password" />
      </Form.Item>
      <div className="agreement-section" style={{ display: 'flex', justifyContent: 'center' }}>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          getValueFromEvent={e => e.target.checked}
        >
          <Input type="checkbox" />
        </Form.Item>
        <span className="agree-text">
          &nbsp;注册即代表你同意<a href="#">用户协议</a>
        </span>
      </div>
    </Form>
  ),
};
