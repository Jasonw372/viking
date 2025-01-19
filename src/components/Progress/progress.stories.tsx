import { useEffect, useState } from 'react';
import Progress from './index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: '进度条组件',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    percent: { control: 'number', min: 0, max: 100 },
    strokeHeight: { control: 'number', defaultValue: 15 },
    showText: { control: 'boolean', defaultValue: true },
    styles: { control: 'object', defaultValue: {} },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info'],
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '默认进度条',
  args: {
    percent: 10,
    strokeHeight: 15,
    showText: true,
    theme: 'primary',
    styles: {},
  },
  render: args => (
    <div
      style={{
        width: '300px',
      }}
    >
      <Progress {...args}></Progress>
    </div>
  ),
};

// 自动变动的进度条
export const AutoChange: Story = {
  name: '变动的进度条',
  args: {
    percent: 40,
    strokeHeight: 15,
    showText: true,
    theme: 'warning',
    styles: {},
  },
  render: args => {
    const [percent, setPercent] = useState(args.percent);

    useEffect(() => {
      const timer = setInterval(() => {
        setPercent(prevPercent => {
          if (prevPercent >= 100) {
            return 0;
          }
          return prevPercent + 1;
        });
      }, 100);
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
      <div
        style={{
          width: '300px',
        }}
      >
        <Progress {...args} percent={percent}></Progress>
      </div>
    );
  },
};

// 隐藏进度条文字
export const HideText: Story = {
  name: '隐藏进度条文字',
  args: {
    percent: 60,
    strokeHeight: 15,
    showText: false,
    theme: 'success',
    styles: {},
  },
  render: args => (
    <div
      style={{
        width: '300px',
      }}
    >
      <Progress {...args}></Progress>
    </div>
  ),
};
