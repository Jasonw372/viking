import type { Meta, StoryObj } from '@storybook/react';
import Switch from './switch';
import { useState } from 'react';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '开关组件，用于切换状态。',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  name: '默认开关',
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  name: '默认选中开关',
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  name: '已禁用开关',
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  name: '加载中的开关',
  args: {
    loading: true,
  },
};

export const Small: Story = {
  name: '小号开关',
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  name: '大号开关',
  args: {
    size: 'lg',
  },
};

export const WithChildren: Story = {
  name: '带有自定义文案',
  args: {
    checkedChildren: '开',
    unCheckedChildren: '关',
  },
};

export const Controled: Story = {
  name: '受控组件',
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        checked={checked}
        onChange={checked => {
          alert(`switch to:${checked}`);
          setChecked(checked);
        }}
      />
    );
  },
};
