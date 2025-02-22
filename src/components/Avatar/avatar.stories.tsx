import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    controls: { disabled: false },
    actions: { disable: true },
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
    <Avatar src="invalid-image.png" onError={() => console.warn('图片加载失败')}>
      err
    </Avatar>
  </div>
);
FallbackAvatar.storyName = '图片加载失败';
