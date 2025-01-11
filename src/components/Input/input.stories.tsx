import type { Meta, StoryObj } from '@storybook/react';

import Input from './input';
import { useState } from 'react';
import Button from '../Button';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'sm', undefined],
    },
    prefixIcon: {
      control: 'text',
    },
    suffixIcon: {
      control: 'text',
    },
    prepend: {
      control: 'text',
    },
    append: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '请输入内容',
    disabled: false,
  },
  name: '默认输入框',
};

export const Password: Story = {
  args: {
    placeholder: '请输入内容',
    disabled: false,
    type: 'password',
  },
  name: '密码输入框',
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  name: '不可用的输入框',
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  name: '大号输入框',
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  name: '小号输入框',
};

export const WithIcons: Story = {
  args: {
    prefixIcon: 'search',
    suffixIcon: 'times',
    placeholder: '请输入搜索内容',
  },
  name: '带前缀和后缀图标的输入框',
};

export const WithSuffixIcon: Story = {
  args: {
    suffixIcon: 'search',
    placeholder: '带后缀图标的输入框',
  },
  name: '带后缀图标的输入框',
};

export const WithPrefixIcon: Story = {
  args: {
    prefixIcon: 'user',
    placeholder: '带前缀图标的输入框',
  },
  name: '带前缀图标的输入框',
};

export const P: Story = {
  args: {
    prepend: 'https://',
    append: '.com',
  },
  name: '前后缀的输入框',
};

export const ComplexAddons: Story = {
  args: {
    prepend: <Button size="lg">Click</Button>,
    append: 'Status',
  },
  name: '复杂前后缀的输入框',
};

export const Controlled = () => {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={e => setValue(e.target.value)} />;
};
Controlled.storyName = '受控输入框';

// 带前后缀和图标的
export const WithIconsAndAddons: Story = {
  args: {
    prefixIcon: 'search',
    suffixIcon: 'keyboard',
    prepend: 'https://',
    append: '.com',
    placeholder: '请输入搜索内容',
  },
  name: '带前后缀和图标的输入框',
};
export default meta;
