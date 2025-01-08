import type { Meta, StoryObj } from '@storybook/react';
import Space from './space';
import Button from '../Button/index';

const meta = {
  title: 'Components/Space',
  component: Space,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '间距组件，用于在组件之间添加间距。',
      },
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Space>;

export default meta;
type Story = StoryObj<typeof Space>;

export const Basic: Story = {
  args: {
    children: [<Button>Button 1</Button>, <Button>Button 2</Button>, <Button>Button 3</Button>],
    align: 'baseline',
    direction: 'horizontal',
    wrap: true,
    split: '',
    style: { height: '100px' },
  },
};

export const WithSize: Story = {
  args: {
    size: 'large',
    children: [<Button>Button 1</Button>, <Button>Button 2</Button>, <Button>Button 3</Button>],
    style: { height: '100px' },
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    children: [<Button>Button 1000</Button>, <Button>Button 2</Button>, <Button>Button 3</Button>],
    style: { height: '100px' },
  },
};

export const WithSplit: Story = {
  args: {
    split: '|',
    children: [<Button>Button 1</Button>, <Button>Button 2</Button>, <Button>Button 3</Button>],
    size: 20,
    style: { height: '100px' },
  },
};

export const Compact: Story = {
  args: {
    children: [<Button>Button 0001</Button>, <Button>Button 2</Button>, <Button>Button 3</Button>],
    compact: true,
  },
};

export const CompactVertical: Story = {
  args: {
    children: [<Button>Button 0001</Button>, <Button>Button 2</Button>, <Button>Button 3</Button>],
    compact: true,
    direction: 'vertical',
  },
};
