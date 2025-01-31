import type { Meta, StoryObj } from '@storybook/react';
import type { FlexJustify, FlexAlign } from './flex';
import Flex from './flex';
import Button from '../Button';
import Space from '../Space';

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Flex布局组件，用于创建灵活的布局容器。',
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      description: '主轴方向',
      control: {
        type: 'select',
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
      },
      defaultValue: 'row',
    },
    justify: {
      description: '主轴对齐方式',
      control: {
        type: 'select',
        options: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'],
      },
      defaultValue: 'start',
    },
    align: {
      description: '交叉轴对齐方式',
      control: {
        type: 'select',
        options: ['start', 'end', 'center', 'stretch', 'baseline'],
      },
      defaultValue: 'start',
    },
    wrap: {
      description: '是否换行',
      control: 'boolean',
      defaultValue: false,
    },
    gap: {
      description: '子元素间距',
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 4,
      },
      defaultValue: 0,
    },
    children: {
      description: '子元素内容',
      control: 'text',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// 基础Flex布局
export const Basic: Story = {
  name: '基础Flex布局',
  args: {
    children: '基础Flex布局',
  },
  render: args => (
    <Flex {...args} style={{ width: '400px', height: '200px', border: '1px solid #ddd' }}>
      <div style={{ padding: '16px', background: '#f0f0f0' }}>Item 1</div>
      <div style={{ padding: '16px', background: '#e0e0e0' }}>Item 2</div>
      <div style={{ padding: '16px', background: '#d0d0d0' }}>Item 3</div>
    </Flex>
  ),
};

// 不同方向
export const Directions: Story = {
  name: '不同方向',
  render: () => (
    <Space direction="vertical" size="lg">
      <Flex direction="row" gap={8}>
        <Button>Row</Button>
        <Button>Row</Button>
        <Button>Row</Button>
      </Flex>
      <Flex direction="column" gap={8}>
        <Button>Column</Button>
        <Button>Column</Button>
        <Button>Column</Button>
      </Flex>
      <Flex direction="row-reverse" gap={8}>
        <Button>Row Reverse</Button>
        <Button>Row Reverse</Button>
        <Button>Row Reverse</Button>
      </Flex>
      <Flex direction="column-reverse" gap={8}>
        <Button>Column Reverse</Button>
        <Button>Column Reverse</Button>
        <Button>Column Reverse</Button>
      </Flex>
    </Space>
  ),
};

// 主轴对齐
export const JustifyContent: Story = {
  name: '主轴对齐',
  render: () => (
    <Space direction="vertical" size="lg">
      {['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'].map(justify => (
        <div key={justify}>
          <div style={{ marginBottom: 8 }}>{justify}</div>
          <Flex
            justify={justify as FlexJustify}
            gap={8}
            style={{ width: '400px', border: '1px solid #ddd', padding: 8 }}
          >
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Flex>
        </div>
      ))}
    </Space>
  ),
};

// 交叉轴对齐
export const AlignItems: Story = {
  name: '交叉轴对齐',
  render: () => (
    <Space direction="vertical" size="lg">
      {['start', 'end', 'center', 'stretch', 'baseline'].map(align => (
        <div key={align}>
          <div style={{ marginBottom: 8 }}>{align}</div>
          <Flex
            align={align as FlexAlign}
            gap={8}
            style={{ height: '100px', border: '1px solid #ddd', padding: 8 }}
          >
            <Button style={{ height: align === 'stretch' ? 'auto' : '40px' }}>Button</Button>
            <Button style={{ height: '60px' }}>Button</Button>
            <Button style={{ height: '80px' }}>Button</Button>
          </Flex>
        </div>
      ))}
    </Space>
  ),
};

// 换行
export const Wrap: Story = {
  name: '换行',
  render: () => (
    <Space direction="vertical">
      <Flex wrap="wrap" gap={8} style={{ width: '400px', border: '1px solid #ddd', padding: 8 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Button key={i}>Button {i + 1}</Button>
        ))}
      </Flex>

      <Flex wrap="nowrap" gap={8} style={{ width: '400px', border: '1px solid #ddd', padding: 8 }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Button key={i}>Button {i + 1}</Button>
        ))}
      </Flex>

      <Flex
        wrap="wrap-reverse"
        gap={8}
        style={{ width: '400px', border: '1px solid #ddd', padding: 8 }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Button key={i}>Button {i + 1}</Button>
        ))}
      </Flex>
    </Space>
  ),
};

// 间距
export const Gap: Story = {
  name: '间距',
  render: () => (
    <Space direction="vertical" size="lg">
      {[0, 8, 16, 24, 32].map(gap => (
        <div key={gap}>
          <div style={{ marginBottom: 8 }}>gap: {gap}px</div>
          <Flex gap={gap} style={{ border: '1px solid #ddd', padding: 8 }}>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Flex>
        </div>
      ))}
    </Space>
  ),
};
