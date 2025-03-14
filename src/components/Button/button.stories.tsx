import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import Icon from '../Icon';
import Space from '../Space';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {},
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      description: '是否禁用',
      control: 'boolean',
      defaultValue: false,
    },
    btnType: {
      description: '按钮类型',
      control: {
        type: 'select',
        options: ['default', 'primary', 'info', 'success', 'danger', 'warning', 'link'],
      },
      defaultValue: 'default',
    },
    size: {
      description: '按钮尺寸',
      control: {
        type: 'select',
        options: ['lg', 'sm'],
      },
    },
    circle: {
      description: '是否为圆形按钮',
      control: 'boolean',
      defaultValue: false,
    },
    plain: {
      description: '是否为朴素样式',
      control: 'boolean',
      defaultValue: false,
    },
    href: {
      description: '链接地址（当btnType为link时使用）',
      control: 'text',
    },
    children: {
      description: '按钮内容',
      control: 'text',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 默认按钮
export const Default: Story = {
  name: '默认按钮',
  args: {
    children: '默认按钮',
  },
};

// 主要按钮
export const Primary: Story = {
  name: '主要按钮',
  args: {
    btnType: 'primary',
    children: '主要按钮',
  },
};

// 信息按钮
export const Info: Story = {
  name: '信息按钮',
  args: {
    btnType: 'info',
    children: '信息按钮',
  },
};

// 成功按钮
export const Success: Story = {
  name: '成功按钮',
  args: {
    btnType: 'success',
    children: '成功按钮',
  },
};

// 警告按钮
export const Warning: Story = {
  name: '警告按钮',
  args: {
    btnType: 'warning',
    children: '警告按钮',
  },
};

// 危险按钮
export const Danger: Story = {
  name: '危险按钮',
  args: {
    btnType: 'danger',
    children: '危险按钮',
  },
};

// 链接按钮
export const Link: Story = {
  name: '链接按钮',
  args: {
    btnType: 'link',
    children: '链接按钮',
    href: '#',
  },
};

// 大号按钮
export const Large: Story = {
  name: '大号按钮',
  args: {
    size: 'lg',
    children: '大号按钮',
  },
};

// 小号按钮
export const Small: Story = {
  name: '小号按钮',
  args: {
    size: 'sm',
    children: '小号按钮',
  },
};

// 禁用按钮
export const Disabled: Story = {
  name: '禁用按钮',
  args: {
    disabled: true,
    children: '禁用按钮',
  },
};

// 圆角按钮
export const Circle: Story = {
  name: '圆角按钮',
  args: {
    circle: true,
    children: '圆角按钮',
  },
};

// 朴素按钮
export const Plain: Story = {
  name: '朴素按钮',
  args: {
    plain: true,
    btnType: 'primary',
    children: '朴素按钮',
  },
};

// 自定义按钮
export const CustomButton: Story = {
  name: '自定义按钮',
  args: {
    children: '自定义按钮',
  },
  render: _args => (
    <Button>
      <Space size="sm">
        <Icon icon="spinner" spin />
        加载中
      </Space>
    </Button>
  ),
};

// 按钮展示页
export const ButtonDisplay: Story = {
  name: '按钮展示页',
  render: _args => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {/* 基础按钮组 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button>默认按钮</Button>
        <Button btnType="primary">主要按钮</Button>
        <Button btnType="info">信息按钮</Button>
        <Button btnType="success">成功按钮</Button>
        <Button btnType="warning">警告按钮</Button>
        <Button btnType="danger">危险按钮</Button>
        <Button btnType="link" href="#">
          链接按钮
        </Button>
      </div>

      {/* 朴素按钮组 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button plain>朴素默认</Button>
        <Button plain btnType="primary">
          朴素主要
        </Button>
        <Button plain btnType="info">
          朴素信息
        </Button>
        <Button plain btnType="success">
          朴素成功
        </Button>
        <Button plain btnType="warning">
          朴素警告
        </Button>
        <Button plain btnType="danger">
          朴素危险
        </Button>
      </div>

      {/* 圆角按钮组 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button circle>Default</Button>
        <Button circle btnType="primary">
          Primary
        </Button>
        <Button circle btnType="info">
          Info
        </Button>
        <Button circle btnType="success">
          Success
        </Button>
        <Button circle btnType="warning">
          Warning
        </Button>
        <Button circle btnType="danger">
          Danger
        </Button>
      </div>

      {/* 禁用状态 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button disabled>禁用按钮</Button>
        <Button disabled btnType="primary">
          禁用主要
        </Button>
        <Button disabled btnType="info">
          禁用信息
        </Button>
        <Button disabled btnType="success">
          禁用成功
        </Button>
        <Button disabled btnType="warning">
          禁用警告
        </Button>
        <Button disabled btnType="danger">
          禁用危险
        </Button>
        <Button disabled btnType="link" href="#">
          禁用链接
        </Button>
      </div>

      {/* 不同尺寸 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button size="lg" btnType="primary">
          大号按钮
        </Button>
        <Button btnType="primary">默认按钮</Button>
        <Button size="sm" btnType="primary">
          小号按钮
        </Button>
      </div>

      {/* 自定义按钮 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button size="lg">
          <Icon icon="coffee"></Icon>
        </Button>
        <Button>
          <Space size="sm">
            <Icon icon="spinner" spin />
            加载中
          </Space>
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: { source: { type: '' } },
  },
};
