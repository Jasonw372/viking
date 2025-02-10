import type { Meta, StoryObj } from '@storybook/react';
import Icon from './index';
import Button from '../Button';
import Flex from '../Flex';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Icon组件，优化展示效果',
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export const DefaultIcons: StoryObj<typeof meta> = {
  name: '默认图标',
  render: _args => (
    <Flex gap={20} align="center">
      <Icon icon="check" size="2x" />
      <Icon icon="times" size="2x" />
      <Icon icon="anchor" size="2x" />
      <Icon icon="trash" size="2x" />
      <Button size="lg" btnType="primary">
        <Icon
          icon="check"
          style={{
            paddingRight: 5,
          }}
        />{' '}
        check{' '}
      </Button>
    </Flex>
  ),
};

export const ThemeIcons: StoryObj<typeof meta> = {
  name: '主题图标',
  render: _args => (
    <Flex gap={20}>
      <Icon icon="coffee" size="2x" theme="primary" />
      <Icon icon="info-circle" size="2x" theme="info" />
      <Icon icon="check" size="2x" theme="success" />
      <Icon icon="exclamation-circle" size="2x" theme="warning" />
      <Icon icon="times" size="2x" theme="danger" />
      <Icon icon="question-circle" size="2x" theme="secondary" />
      <Icon icon="moon" size="2x" theme="dark" />
      <Icon icon="sun" size="2x" theme="light" />
    </Flex>
  ),
};

export const CustomIcons: StoryObj<typeof meta> = {
  name: '自定义图标',
  render: _args => (
    <Flex gap={20} vertical>
      <Icon icon="spinner" size="2x" theme="primary" spin />
      <Icon icon="spinner" size="2x" theme="success" pulse />
    </Flex>
  ),
};

export default meta;
