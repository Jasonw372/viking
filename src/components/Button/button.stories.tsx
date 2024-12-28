import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import './_styles.scss';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    btnType: {
      control: 'select',
      options: ['default', 'primary', 'info', 'success', 'danger', 'warning', 'link'],
      description: '按钮类型',
    },
    size: {
      control: 'select',
      options: ['lg', 'sm'],
      description: '按钮尺寸',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    circle: {
      control: 'boolean',
      description: '是否为圆角按钮',
    },
    plain: {
      control: 'boolean',
      description: '是否为朴素按钮',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 按钮展示页
export const ButtonDisplay: Story = {
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: { disable: true },
  },
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}>
      {/* 基础按钮组 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button>默认按钮</Button>
        <Button btnType="primary">主要按钮</Button>
        <Button btnType="info">信息按钮</Button>
        <Button btnType="success">成功按钮</Button>
        <Button btnType="warning">警告按钮</Button>
        <Button btnType="danger">危险按钮</Button>
        <Button btnType="link" href="#">链接按钮</Button>
      </div>

      {/* 朴素按钮组 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button plain>朴素默认</Button>
        <Button plain btnType="primary">朴素主要</Button>
        <Button plain btnType="info">朴素信息</Button>
        <Button plain btnType="success">朴素成功</Button>
        <Button plain btnType="warning">朴素警告</Button>
        <Button plain btnType="danger">朴素危险</Button>
      </div>

      {/* 圆角按钮组 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button circle>Default</Button>
        <Button circle btnType="primary">Primary</Button>
        <Button circle btnType="info">Info</Button>
        <Button circle btnType="success">Success</Button>
        <Button circle btnType="warning">Warning</Button>
        <Button circle btnType="danger">Danger</Button>
      </div>

      {/* 禁用状态 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button disabled>禁用按钮</Button>
        <Button disabled btnType="primary">禁用主要</Button>
        <Button disabled btnType="info">禁用信息</Button>
        <Button disabled btnType="success">禁用成功</Button>
        <Button disabled btnType="warning">禁用警告</Button>
        <Button disabled btnType="danger">禁用危险</Button>
        <Button disabled btnType="link" href="#">禁用链接</Button>
      </div>

      {/* 不同尺寸 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button size="lg" btnType="primary">大号按钮</Button>
        <Button btnType="primary">默认按钮</Button>
        <Button size="sm" btnType="primary">小号按钮</Button>
      </div>
    </div>
  ),
};

// 默认按钮
export const Default: Story = {
  args: {
    children: '默认按钮',
  },
};

// 主要按钮
export const Primary: Story = {
  args: {
    btnType: 'primary',
    children: '主要按钮',
  },
};

// 信息按钮
export const Info: Story = {
  args: {
    btnType: 'info',
    children: '信息按钮',
  },
};

// 成功按钮
export const Success: Story = {
  args: {
    btnType: 'success',
    children: '成功按钮',
  },
};

// 警告按钮
export const Warning: Story = {
  args: {
    btnType: 'warning',
    children: '警告按钮',
  },
};

// 危险按钮
export const Danger: Story = {
  args: {
    btnType: 'danger',
    children: '危险按钮',
  },
};

// 链接按钮
export const Link: Story = {
  args: {
    btnType: 'link',
    children: '链接按钮',
    href: '#',
  },
};

// 大号按钮
export const Large: Story = {
  args: {
    size: 'lg',
    children: '大号按钮',
  },
};

// 小号按钮
export const Small: Story = {
  args: {
    size: 'sm',
    children: '小号按钮',
  },
};

// 禁用按钮
export const Disabled: Story = {
  args: {
    disabled: true,
    children: '禁用按钮',
  },
};

// 圆角按钮
export const Circle: Story = {
  args: {
    circle: true,
    children: '圆角按钮',
  },
};

// 朴素按钮
export const Plain: Story = {
  args: {
    plain: true,
    btnType: 'primary',
    children: '朴素按钮',
  },
};

