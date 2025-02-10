import type { Meta, StoryObj } from '@storybook/react';
import Tab from './index';
import './_styles.scss';
import { useState } from 'react';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    docs: {
      description: {
        component: '标签页组件，支持卡片/线条模式。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultIndex: {
      description: '默认选中的标签索引',
      control: 'number',
    },
    type: {
      description: '标签类型',
      control: 'radio',
      options: ['line', 'card'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'line' },
      },
    },
    onSelect: {
      description: '点击标签项触发的回调函数',
      action: 'selected',
      table: {
        type: { summary: '(selectedIndex: number) => void' },
      },
    },
    className: {
      description: '自定义类名',
      control: 'text',
    },
    style: {
      description: '自定义样式',
      control: 'object',
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTab: Story = {
  name: '默认标签页',
  args: {
    defaultIndex: 0,
  },
  render: args => (
    <Tab {...args}>
      <Tab.Item label="Tab 1">Content 1</Tab.Item>
      <Tab.Item label="Tab 2">Content 2</Tab.Item>
      <Tab.Item label="Tab 3">Content 3</Tab.Item>
    </Tab>
  ),
};

export const CardTypeTab: Story = {
  name: '卡片式标签页',
  args: {
    defaultIndex: 0,
    type: 'card',
  },
  render: args => (
    <Tab {...args}>
      <Tab.Item label="Tab 1">Content 1</Tab.Item>
      <Tab.Item label="Tab 2">Content 2</Tab.Item>
      <Tab.Item label="Tab 3">Content 3</Tab.Item>
    </Tab>
  ),
};

export const DisabledTabItem: Story = {
  name: '禁用标签项',
  args: {
    defaultIndex: 0,
  },
  render: args => (
    <Tab {...args}>
      <Tab.Item label="Tab 1">Content 1</Tab.Item>
      <Tab.Item label="Tab 2" disabled>
        Content 2
      </Tab.Item>
      <Tab.Item label="Tab 3">Content 3</Tab.Item>
    </Tab>
  ),
};

export const CustomStyledTab: Story = {
  name: '自定义样式标签页',
  args: {
    defaultIndex: 0,
    style: {
      backgroundColor: '#f7f7f7',
      borderRadius: '4px',
    },
  },
  render: args => (
    <Tab {...args}>
      <Tab.Item label="Tab 1">Content 1</Tab.Item>
      <Tab.Item label="Tab 2">Content 2</Tab.Item>
      <Tab.Item label="Tab 3">Content 3</Tab.Item>
    </Tab>
  ),
};

// 受控组件
export const ControlledTab: Story = {
  name: '受控组件',
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <Tab activeIndex={activeIndex} onSelect={index => setActiveIndex(index)}>
        <Tab.Item label="Tab 1">Content 1</Tab.Item>
        <Tab.Item label="Tab 2">Content 2</Tab.Item>
        <Tab.Item label="Tab 3">Content 3</Tab.Item>
      </Tab>
    );
  },
};

export const TabDisplay: Story = {
  name: '标签页展示',
  render: _args => (
    <div>
      <h2>标签页展示</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {/* 默认标签页 */}
        <div>
          <Tab defaultIndex={0}>
            <Tab.Item label="用户管理">用户管理内容</Tab.Item>
            <Tab.Item label="配置管理">配置管理内容</Tab.Item>
            <Tab.Item label="角色管理">角色管理内容</Tab.Item>
          </Tab>
        </div>

        {/* 卡片式标签页 */}
        <div>
          <Tab defaultIndex={0} type="card">
            <Tab.Item label="我的音乐">我的音乐列表</Tab.Item>
            <Tab.Item label="最近播放">最近播放记录</Tab.Item>
            <Tab.Item label="推荐歌单">为您推荐的音乐</Tab.Item>
          </Tab>
        </div>

        {/* 禁用标签项 */}
        <div>
          <Tab defaultIndex={0}>
            <Tab.Item label="进行中">当前进行的任务</Tab.Item>
            <Tab.Item label="已完成" disabled>
              已完成的任务
            </Tab.Item>
            <Tab.Item label="待处理">待处理的任务</Tab.Item>
          </Tab>
        </div>

        {/* 自定义样式标签页 */}
        <div>
          <Tab
            defaultIndex={0}
            style={{
              backgroundColor: '#f7f7f7',
              color: 'red',
              borderRadius: '8px',
              // padding: '1rem',
            }}
          >
            <Tab.Item label="项目概览">
              <div
                style={{
                  background: 'red',
                }}
              >
                自定义样式
              </div>
            </Tab.Item>
            <Tab.Item label="团队成员">团队成员列表</Tab.Item>
            <Tab.Item label="项目进度">项目进度追踪</Tab.Item>
          </Tab>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: { source: { type: '' } },
  },
};
