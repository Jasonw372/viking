---
sidebar_position: 1
title: Button 按钮
---
import { Button, Flex, Icon, Space } from 'viking-design'

# Button 按钮

按钮用于开始一个即时操作

## 使用
```ts
import { Button } from 'viking-design'
```

## 代码演示

### 不同类型的Button

```tsx
import { Button, Flex } from 'viking-design'

<Flex gap={20} align="center">
  <Button>Default</Button>
  <Button btnType="primary">Primary</Button>
  <Button btnType="success">Success</Button>
  <Button btnType="info">Info</Button>
  <Button btnType="warning">Warning</Button>
  <Button btnType="danger">Danger</Button>
  <Button btnType="link" href="#">Link</Button>
</Flex>
```

<Flex gap={20} align="center">
  <Button>Default</Button>
  <Button btnType="primary">Primary</Button>
  <Button btnType="success">Success</Button>
  <Button btnType="info">Info</Button>
  <Button btnType="warning">Warning</Button>
  <Button btnType="danger">Danger</Button>
  <Button btnType="link" href="#">Link</Button>
</Flex>


### 不同大小的Button
```tsx
import { Button, Flex } from 'viking-design'

<Flex gap={20} align="center">
  <Button btnType="primary" size="lg">大号按钮</Button>
  <Button btnType="primary">默认按钮</Button>
  <Button btnType="primary" size="sm">小号按钮</Button>
</Flex>
```

<Flex gap={20} align="center">
  <Button btnType="primary" size="lg">大号按钮</Button>
  <Button btnType="primary">默认按钮</Button>
  <Button btnType="primary" size="sm">小号按钮</Button>
</Flex>

### 朴素样式的Button

```tsx
import { Button, Flex } from 'viking-design'

<Flex gap={20} align="center">
  <Button>Default</Button>
  <Button btnType="primary" plain>Primary</Button>
  <Button btnType="success" plain>Success</Button>
  <Button btnType="info" plain>Info</Button>
  <Button btnType="warning" plain>Warning</Button>
  <Button btnType="danger" plain>Danger</Button>
  <Button btnType="link" href="#" plain>Link</Button>
</Flex>
```

<Flex gap={20} align="center">
  <Button>Default</Button>
  <Button btnType="primary" plain>Primary</Button>
  <Button btnType="success" plain>Success</Button>
  <Button btnType="info" plain>Info</Button>
  <Button btnType="warning" plain>Warning</Button>
  <Button btnType="danger" plain>Danger</Button>
  <Button btnType="link" href="#" plain>Link</Button>
</Flex>

### 圆角样式的Button
```tsx
import { Button, Flex } from 'viking-design'

<Flex gap={20} align="center">
  <Button circle>Default</Button>
  <Button btnType="primary" circle>Primary</Button>
  <Button btnType="success" circle>Success</Button>
  <Button btnType="info" circle>Info</Button>
  <Button btnType="warning" circle>Warning</Button>
  <Button btnType="danger" circle>Danger</Button>
</Flex>
```
<Flex gap={20} align="center">
  <Button circle>Default</Button>
  <Button btnType="primary" circle>Primary</Button>
  <Button btnType="success" circle>Success</Button>
  <Button btnType="info" circle>Info</Button>
  <Button btnType="warning" circle>Warning</Button>
  <Button btnType="danger" circle>Danger</Button>
</Flex>

### 禁用状态的Button
```tsx
import { Button, Flex } from 'viking-design'

<Flex gap={20} align="center">
  <Button disabled>Default</Button>
  <Button btnType="primary" disabled>Primary</Button>
  <Button btnType="success" disabled>Success</Button>
  <Button btnType="info" disabled>Info</Button>
  <Button btnType="warning" disabled>Warning</Button>
  <Button btnType="danger" disabled>Danger</Button>
  <Button btnType="link" href="#" disabled>Link</Button>
</Flex>
```

<Flex gap={20} align="center">
  <Button disabled>Default</Button>
  <Button btnType="primary" disabled>Primary</Button>
  <Button btnType="success" disabled>Success</Button>
  <Button btnType="info" disabled>Info</Button>
  <Button btnType="warning" disabled>Warning</Button>
  <Button btnType="danger" disabled>Danger</Button>
  <Button btnType="link" href="#" disabled>Link</Button>
</Flex>

### 带有Icon的Button
```tsx
import { Button, Flex, Icon, Space } from 'viking-design'

<Flex gap={20} align="center">
  <Button size="lg">
    <Icon icon="coffee" />
  </Button>
  <Button>
    <Space><Icon icon="spinner" spin/>加载中</Space>
  </Button>
</Flex>
```

<Flex gap={20} align="center">
  <Button size="lg">
    <Icon icon="coffee" />
  </Button>
  <Button>
    <Space><Icon icon="spinner" spin/>加载中</Space>
  </Button>
</Flex>

## API

### Button Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| btnType | 按钮类型 | `'default' \| 'primary' \| 'info' \| 'success' \| 'danger' \| 'warning' \| 'link'` | `'default'` |
| size | 按钮大小 | `'lg' \| 'sm'` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| circle | 是否为圆形按钮 | `boolean` | `false` |
| plain | 是否为朴素样式 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| href | 链接按钮的目标地址，仅在 `btnType="link"` 时有效 | `string` | - |

除了上述属性外，Button 组件还支持原生 `button` 元素或 `a` 元素（当 `btnType="link"` 时）的所有属性。

