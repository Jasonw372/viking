import type { Meta, StoryObj } from '@storybook/react';
import Menu from './index';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    // layout: 'centered',
    docs: {
      description: {
        component: '菜单组件，支持水平/垂直模式，支持下拉菜单。',
      },
    },
  },
  argTypes: {
    defaultIndex: {
      description: '默认选中的菜单项索引',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0' },
      },
    },
    mode: {
      description: '菜单类型',
      control: 'radio',
      options: ['horizontal', 'vertical'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    defaultOpenSubMenus: {
      description: '默认展开的子菜单索引数组',
      control: 'object',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    onSelect: {
      description: '点击菜单项触发的回调函数',
      action: 'selected',
      table: {
        type: { summary: '(selectedIndex: string) => void' },
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
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMenu: Story = {
  args: {
    defaultIndex: '0',
  },
  render: args => (
    <Menu {...args}>
      <Menu.Item>首页</Menu.Item>
      <Menu.Item>关于我们</Menu.Item>
      <Menu.Item>联系我们</Menu.Item>
    </Menu>
  ),
};

export const VerticalMenu: Story = {
  args: {
    defaultIndex: '0',
    mode: 'vertical',
  },
  render: args => (
    <Menu {...args}>
      <Menu.Item>首页</Menu.Item>
      <Menu.Item>关于我们</Menu.Item>
      <Menu.Item>联系我们</Menu.Item>
    </Menu>
  ),
};

export const WithSubMenu: Story = {
  args: {
    defaultIndex: '0',
  },
  render: args => (
    <Menu {...args}>
      <Menu.Item>首页</Menu.Item>
      <Menu.SubMenu title="产品介绍">
        <Menu.Item>产品1</Menu.Item>
        <Menu.Item>产品2</Menu.Item>
        <Menu.Item>产品3</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>联系我们</Menu.Item>
    </Menu>
  ),
};

export const DisabledMenuItem: Story = {
  args: {
    defaultIndex: '0',
  },
  render: args => (
    <Menu {...args}>
      <Menu.Item>可点击项</Menu.Item>
      <Menu.Item disabled>禁用项</Menu.Item>
      <Menu.Item>可点击项</Menu.Item>
    </Menu>
  ),
};

export const VerticalWithSubMenu: Story = {
  args: {
    defaultIndex: '0',
    mode: 'vertical',
    defaultOpenSubMenus: ['0'],
  },
  render: args => (
    <Menu {...args}>
      <Menu.Item>首页</Menu.Item>
      <Menu.SubMenu title="产品介绍">
        <Menu.Item>产品1</Menu.Item>
        <Menu.Item>产品2</Menu.Item>
        <Menu.Item>产品3</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item>联系我们</Menu.Item>
    </Menu>
  ),
};

export const MenuDisplay: Story = {
  render: _args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
      {/* 默认水平菜单 */}
      <div>
        <h3>默认水平菜单</h3>
        <Menu defaultIndex="0">
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>关于我们</Menu.Item>
          <Menu.Item disabled>禁用项</Menu.Item>
          <Menu.SubMenu title="产品介绍">
            <Menu.Item>产品1</Menu.Item>
            <Menu.Item>产品2</Menu.Item>
            <Menu.Item>产品3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>联系我们</Menu.Item>
        </Menu>
      </div>

      {/* 垂直菜单 */}
      <div style={{ width: '256px' }}>
        <h3>垂直菜单</h3>
        <Menu defaultIndex="0" mode="vertical">
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>关于我们</Menu.Item>
          <Menu.Item disabled>禁用项</Menu.Item>
          <Menu.SubMenu title="产品介绍">
            <Menu.Item>产品1</Menu.Item>
            <Menu.Item>产品2</Menu.Item>
            <Menu.Item>产品3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>联系我们</Menu.Item>
        </Menu>
      </div>

      {/* 默认展开的垂直菜单 */}
      <div style={{ width: '256px' }}>
        <h3>默认展开的垂直菜单</h3>
        <Menu defaultIndex="0" mode="vertical" defaultOpenSubMenus={['3']}>
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>关于我们</Menu.Item>
          <Menu.Item disabled>禁用项</Menu.Item>
          <Menu.SubMenu title="产品介绍">
            <Menu.Item>产品1</Menu.Item>
            <Menu.Item>产品2</Menu.Item>
            <Menu.Item>产品3</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>联系我们</Menu.Item>
        </Menu>
      </div>

      {/* 不同状态的菜单项 */}
      <div>
        <h3>不同状态的菜单项</h3>
        <Menu defaultIndex="1">
          <Menu.Item>普通菜单项</Menu.Item>
          <Menu.Item disabled>禁用菜单项</Menu.Item>
          <Menu.SubMenu title="带子菜单">
            <Menu.Item>子菜单项1</Menu.Item>
            <Menu.Item>子菜单项2</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>

      {/* 多层嵌套的菜单 */}
      <div style={{ width: '256px' }}>
        <h3>多层嵌套的垂直菜单</h3>
        <Menu defaultIndex="0" mode="vertical" defaultOpenSubMenus={['1', '1-1']}>
          <Menu.Item>首页</Menu.Item>
          <Menu.SubMenu title="产品服务">
            <Menu.Item>产品列表</Menu.Item>
            <Menu.SubMenu title="解决方案">
              <Menu.Item>企业级</Menu.Item>
              <Menu.Item>个人级</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item>产品介绍</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title="关于我们">
            <Menu.Item>公司简介</Menu.Item>
            <Menu.Item>联系方式</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>

      {/* 自定义样式的菜单 */}
      <div>
        <h3>自定义样式的菜单</h3>
        <Menu
          defaultIndex="0"
          style={{
            backgroundColor: '#f0f2f5',
            borderRadius: '4px',
          }}
        >
          <Menu.Item>首页</Menu.Item>
          <Menu.Item>关于我们</Menu.Item>
          <Menu.SubMenu title="产品服务">
            <Menu.Item>产品1</Menu.Item>
            <Menu.Item>产品2</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>联系我们</Menu.Item>
        </Menu>
      </div>
    </div>
  ),

  parameters: {
    controls: { disable: true },
    actions: { disable: true },
    docs: { source: { type: '' } },
  },
};
