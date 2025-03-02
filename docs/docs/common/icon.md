---
sidebar_position: 2
title: Icon 图标
---
import { Icon, Flex, Button, Space } from 'viking-design'

# Icon 图标

图标组件，基于FontAwesome图标库，提供了丰富的图标选择

## 使用
```ts
import { Icon } from 'viking-design'
```

## 代码演示

### 默认图标

```tsx
import { Icon, Flex, Button } from 'viking-design'

<Flex gap={20} align="center">
  <Icon icon="check" size="2x" />
  <Icon icon="times" size="2x" />
  <Icon icon="anchor" size="2x" />
  <Icon icon="trash" size="2x" />
  <Button btnType="primary">
    <Space><Icon icon="check"></Icon>check</Space>
  </Button>
</Flex>
```

<Flex gap={20} align="center">
  <Icon icon="check" size="2x" />
  <Icon icon="times" size="2x" />
  <Icon icon="anchor" size="2x" />
  <Icon icon="trash" size="2x" />
  <Button btnType="primary">
    <Space><Icon icon="check"></Icon>check</Space>
  </Button>
</Flex>

### 不同主题的图标

```tsx
import { Icon, Flex } from 'viking-design'

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
```

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

### 自定义图标效果

```tsx
import { Icon, Flex } from 'viking-design'

<Flex gap={20}>
  <Icon icon="spinner" size="2x" theme="primary" spin />
  <Icon icon="spinner" size="2x" theme="success" pulse />
</Flex>
```

<Flex gap={20}>
  <Icon icon="spinner" size="2x" theme="primary" spin />
  <Icon icon="spinner" size="2x" theme="success" pulse />
</Flex>

## API

### Icon Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| theme | 图标主题色 | `'primary' \| 'secondary' \| 'success' \| 'info' \| 'warning' \| 'danger' \| 'light' \| 'dark'` | - |
| icon | 图标名称 | `IconProp` | - |
| size | 图标大小 | `'xs' \| 'sm' \| 'lg' \| '1x' \| '2x' \| '3x' \| '4x' \| '5x' \| '6x' \| '7x' \| '8x' \| '9x' \| '10x'` | - |
| spin | 是否旋转图标 | `boolean` | `false` |
| pulse | 是否脉冲式旋转 | `boolean` | `false` |
| flip | 翻转图标 | `'horizontal' \| 'vertical' \| 'both'` | - |
| rotation | 图标旋转角度 | `90 \| 180 \| 270` | - |
| className | 自定义类名 | `string` | - |

除了上述属性外，Icon 组件还支持 FontAwesome 图标库的所有属性。详细信息请参考 [FontAwesome 文档](https://fontawesome.com/docs)。