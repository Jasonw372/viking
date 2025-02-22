import { Meta, StoryObj } from '@storybook/react';
import Tooltip from './tooltip';
import Button from '../Button';
import Flex from '../Flex';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args: {
    title: '这是一个提示文本',
    children: <Button>鼠标悬停查看提示</Button>,
  },
};

export const Placement: Story = {
  render: () => (
    <Flex direction="column" gap={50}>
      <Flex gap={30}>
        <Tooltip placement="top" title="顶部提示">
          <Button>上</Button>
        </Tooltip>
        <Tooltip placement="bottom" title="底部提示">
          <Button>下</Button>
        </Tooltip>
      </Flex>
      <Flex gap={30}>
        <Tooltip placement="left" title="左侧提示">
          <Button>左</Button>
        </Tooltip>
        <Tooltip placement="right" title="右侧提示">
          <Button>右</Button>
        </Tooltip>
      </Flex>
    </Flex>
  ),
};

export const TriggerTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tooltip trigger="hover" title="悬停触发">
        <Button>悬停</Button>
      </Tooltip>
      <Tooltip trigger="click" title="点击触发">
        <Button>点击</Button>
      </Tooltip>
      <Tooltip trigger="focus" title="聚焦触发">
        <Button>聚焦</Button>
      </Tooltip>
    </div>
  ),
};

export const CustomStyle: Story = {
  render: () => (
    <Tooltip
      title="自定义样式"
      style={{
        backgroundColor: 'red',
        color: 'yellow',
        border: '1px solid #f50',
        borderRadius: '4px',
      }}
      placement="top"
    >
      <Button>自定义样式</Button>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip
      title="这是一段很长的提示文本，用来测试文本换行的情况。这是一段很长的提示文本，用来测试文本换行的情况。"
      placement="top"
    >
      <Button>长文本</Button>
    </Tooltip>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Tooltip title="默认颜色" placement="top">
        <Button>默认</Button>
      </Tooltip>
      <Tooltip title="自定义红色" placement="top" color="#ff4d4f">
        <Button>红色</Button>
      </Tooltip>
      <Tooltip title="自定义蓝色" placement="top" color="#1890ff">
        <Button>蓝色</Button>
      </Tooltip>
      <Tooltip title="自定义绿色" placement="top" color="#52c41a">
        <Button>绿色</Button>
      </Tooltip>
    </div>
  ),
};
