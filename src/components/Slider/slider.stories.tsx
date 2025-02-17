import type { Meta, StoryObj } from '@storybook/react';
import Slider from './index';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    defaultValue: 50,
  },
};
