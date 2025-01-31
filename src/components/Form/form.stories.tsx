import type { Meta, StoryObj } from '@storybook/react';
import Form from '../Form';
import Input from '../Input';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Form组件, 用于表单布局。',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

export const Basic: Story = {
  render: _args => (
    <Form>
      <Form.Item label="姓名">
        <Input type="text" />
      </Form.Item>
      <Form.Item label="年龄">
        <Input type="number" />
      </Form.Item>
    </Form>
  ),
};
