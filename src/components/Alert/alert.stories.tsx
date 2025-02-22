import type { Meta, StoryObj } from '@storybook/react';
import Alert from './alert';
import Button from '../Button';
import Flex from '../Flex';

// 定义 Meta 配置
const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: {
      description: '关闭按钮的回调函数',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

// 基础 Alert
export const Default: Story = {
  name: '基础提示',
  args: {
    message: '这是一条默认的信息提示',
    type: 'info',
    title: '提示',
  },
};

// 成功类型
export const Success: Story = {
  name: '成功提示',
  args: {
    message: '恭喜！操作成功',
    type: 'success',
    showIcon: true,
  },
};

// 警告类型
export const Warning: Story = {
  name: '警告提示',
  args: {
    title: '警告',
    message: '当前页面存在异常，请刷新',
    type: 'warning',
    showIcon: true,
  },
};

// 错误类型
export const Error: Story = {
  name: '错误提示',
  args: {
    message: '错误！操作失败',
    type: 'error',
    showIcon: true,
  },
};

// 可关闭的 Alert
export const Closable: Story = {
  name: '可关闭提示',
  args: {
    message: '这是一条可以关闭的提示',
    type: 'info',
    closable: true,
    showIcon: true,
    onClose: () => {
      console.log('Alert被关闭了！');
      alert('Alert被关闭了！');
    },
  },
};

// 不带图标
export const WithoutIcon: Story = {
  name: '不带图标提示',
  args: {
    message: '这是一条不带图标的提示',
    type: 'info',
    showIcon: false,
  },
};

// 添加一个新的带关闭回调的示例
export const WithCloseCallback: Story = {
  name: '带关闭回调的提示',
  args: {
    message: '点击关闭按钮试试看,点击关闭按钮试试看,点击关闭按钮试试看',
    type: 'success',
    closable: true,
    showIcon: true,
    title: '提示',
    onClose: () => {
      console.log('触发了onClose回调');
      alert('触发了onClose回调！');
    },
  },
  parameters: {
    docs: {
      description: {
        story: '这个示例展示了如何使用 onClose 回调函数',
      },
    },
  },
};

// 带操作按钮的 Alert
export const WithAction: Story = {
  name: '带操作按钮的提示',
  args: {
    message: '这是一条带操作按钮的提示',
    action: (
      <Flex direction="column" gap="sm">
        <Button size="sm" btnType="primary">
          查看详情
        </Button>
        <Button size="sm" btnType="default">
          关闭
        </Button>
      </Flex>
    ),
    type: 'info',
  },
};
