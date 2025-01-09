import type { Meta, StoryFn } from '@storybook/react';
import Icon from './index';
import Button from '../Button';
import Flex from '../Flex';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Icon组件，优化展示效果',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export const DefaultIcons: StoryFn = _args => (
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
);

export const ThemeIcons: StoryFn = _args => (
  <Flex gap={20}>
    <Icon icon="coffee" size="2x" theme="primary" />
    <Icon icon="info-circle" size="2x" theme="info" />
    <Icon icon="check" size="2x" theme="success" />
    <Icon icon="exclamation-circle" size="2x" theme="warning" />
    <Icon icon="times" size="2x" theme="danger" />
    <Icon icon="question-circle" size="2x" theme="secondary" />
    <Icon icon="moon" size="2x" theme="dark" />
  </Flex>
);

export const CustomIcons: StoryFn = _args => (
  <Flex gap={20} vertical>
    <Icon icon="spinner" size="2x" theme="primary" spin />
    <Icon icon="spinner" size="2x" theme="success" pulse />
  </Flex>
);

export default meta;
