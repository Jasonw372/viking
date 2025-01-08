import type { Meta, StoryObj } from '@storybook/react';
import Flex from './flex';

const meta = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Flex组件，用于布局。',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

// 用于演示的样式
const boxStyle: React.CSSProperties = {
  width: '100px',
  height: '48px',
  backgroundColor: '#1677ff',
  color: '#fff',
  lineHeight: '48px',
  textAlign: 'center',
  margin: '8px 4px',
};

const smallBox: React.CSSProperties = {
  ...boxStyle,
  width: '48px',
  height: '48px',
};

const smallBoxWithOutMargin: React.CSSProperties = {
  ...boxStyle,
  width: '48px',
  height: '48px',
  margin: '0',
};

export const Basic: Story = {
  render: () => (
    <Flex gap="middle">
      <div style={boxStyle}>1</div>
      <div style={boxStyle}>2</div>
      <div style={boxStyle}>3</div>
    </Flex>
  ),
};

export const Direction: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Flex gap="middle" vertical>
        <Flex gap="middle">
          <div style={boxStyle}>1</div>
          <div style={boxStyle}>2</div>
          <div style={boxStyle}>3</div>
        </Flex>
        <Flex gap="middle" direction="row-reverse">
          <div style={boxStyle}>1</div>
          <div style={boxStyle}>2</div>
          <div style={boxStyle}>3</div>
        </Flex>
      </Flex>
    </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Flex gap="middle" wrap="wrap">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} style={boxStyle}>
            {i + 1}
          </div>
        ))}
      </Flex>
    </div>
  ),
};

export const NoWrap: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Flex gap="middle" wrap="nowrap">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} style={boxStyle}>
            {i + 1}
          </div>
        ))}
      </Flex>
    </div>
  ),
};

export const Justify: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Flex gap="middle" vertical>
        <div>justify="start"</div>
        <Flex justify="start" style={{ backgroundColor: 'rgba(0,0,0,.1)', width: '100%' }}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <div>justify="center"</div>
        <Flex justify="center" style={{ backgroundColor: 'rgba(0,0,0,.1)', width: '100%' }}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <div>justify="end"</div>
        <Flex justify="end" style={{ backgroundColor: 'rgba(0,0,0,.1)', width: '100%' }}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <div>justify="space-between"</div>
        <Flex justify="space-between" style={{ backgroundColor: 'rgba(0,0,0,.1)', width: '100%' }}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <div>justify="space-around"</div>
        <Flex justify="space-around" style={{ backgroundColor: 'rgba(0,0,0,.1)', width: '100%' }}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <div>justify="space-evenly"</div>
        <Flex justify="space-evenly" style={{ backgroundColor: 'rgba(0,0,0,.1)', width: '100%' }}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
      </Flex>
    </div>
  ),
};

export const Align: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Flex gap="middle" vertical>
        <Flex align="start" style={{ backgroundColor: 'rgba(0,0,0,.1)', height: '100px' }}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <Flex align="center" style={{ backgroundColor: 'rgba(0,0,0,.1)', height: '100px' }}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <Flex align="end" style={{ backgroundColor: 'rgba(0,0,0,.1)', height: '100px' }}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
      </Flex>
    </div>
  ),
};

export const Gap: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Flex vertical gap={20}>
        <Flex gap="small">
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <Flex gap="middle">
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <Flex gap="large">
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <Flex gap={50}>
          <div style={smallBox}>1</div>
          <div style={smallBox}>2</div>
          <div style={smallBox}>3</div>
        </Flex>
        <Flex
          gap={[10, 20]}
          wrap="wrap"
          style={{
            width: '200px',
            backgroundColor: 'rgba(0,0,0,.1)',
          }}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} style={smallBoxWithOutMargin}>
              {i + 1}
            </div>
          ))}
        </Flex>
      </Flex>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Flex vertical gap="middle" style={{ width: '50%' }}>
      <div style={boxStyle}>1</div>
      <div style={boxStyle}>2</div>
      <div style={boxStyle}>3</div>
    </Flex>
  ),
};
