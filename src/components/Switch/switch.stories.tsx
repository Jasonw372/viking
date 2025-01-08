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
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const WithChildren: Story = {
  args: {
    checkedChildren: '开',
    unCheckedChildren: '关',
  },
};

export const Controled: Story = {
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
Controled.storyName = '受控组件';
Controled.parameters = {
  docs: {
    source: {
      code: `const [checked, setChecked] = useState(false);

<Switch
  checked={checked}
  onChange={checked => {
    alert(\`switch to:\${checked}\`);
    setChecked(checked);
  }}
/>`,
    },
  },
};
