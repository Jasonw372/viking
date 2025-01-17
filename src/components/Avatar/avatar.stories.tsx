import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar.tsx';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: '头像图片的源地址',
    },
    alt: {
      control: 'text',
      description: '头像的替代文本',
    },
    size: {
      control: {
        type: 'text',
      },
      description: '头像的尺寸',
    },
    shape: {
      control: {
        type: 'select',
        options: ['circle', 'square'],
      },
      description: '头像的形状',
    },
    className: {
      control: 'text',
      description: '自定义类名',
    },
    onError: {
      action: '图片加载失败',
      description: '图片加载失败时的回调',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    alt: '用户头像',
  },
  name: '基础头像',
};

// 不同尺寸
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar size="xl" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar size="2xl" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  </div>
);
Sizes.storyName = '不同尺寸';

// 不同形状
export const Shapes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Avatar shape="circle" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <Avatar shape="square" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
  </div>
);
Shapes.storyName = '不同形状';

// 文字头像
export const TextAvatar = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Avatar>BL</Avatar>
    <Avatar>SN</Avatar>
    <Avatar>JL</Avatar>
  </div>
);
TextAvatar.storyName = '文字头像';

// 图片加载失败
export const FallbackAvatar = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Avatar src="invalid-image.png" onError={() => console.log('图片加载失败')}>
      err
    </Avatar>
  </div>
);
FallbackAvatar.storyName = '图片加载失败';
