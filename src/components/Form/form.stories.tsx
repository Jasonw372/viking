import type { Meta, StoryObj } from '@storybook/react';
import Form from '../Form';
import Input from '../Input';
import Flex from '../Flex';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
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
    <Form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <Form.Item name="name" label="用户名">
        <Input type="text" />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input type="password" />
      </Form.Item>
      <Flex align="center" gap={10}>
        <Form.Item name="agreement">
          <Input type="checkbox" />
        </Form.Item>
        <span>
          注册即表示同意
          <a href="#">用户协议</a>
        </span>
      </Flex>
    </Form>
  ),
};
