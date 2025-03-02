---
sidebar_position: 3
title: Space 间距
---

import { Space, Button } from 'viking-design'

# Space 间距

`Space` 组件用于在组件之间添加间距。

## 使用

```ts
import { Space } from 'viking-design';
```

## 代码演示

### 基础用法

```tsx
import { Space, Button } from 'viking-design';

<Space>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>;
```

<Space>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>

### 带有间隔大小

```tsx
import { Space, Button } from 'viking-design';

<Space size="lg">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>;
```

<Space size="lg">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>

### 垂直间隔

```tsx
import { Space, Button } from 'viking-design';

<Space direction="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>;
```

<Space direction="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>

### 带有分隔符

```tsx
import { Space, Button } from 'viking-design';

<Space split="|">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>;
```

<Space split="|">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>

### 紧凑间隔

```tsx
import { Space, Button } from 'viking-design';

<Space compact>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>;
```

<Space compact>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>

### 垂直紧凑间隔

```tsx
import { Space, Button } from 'viking-design';

<Space compact direction="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>;
```

<Space compact direction="vertical">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
  <Button>Button 3</Button>
</Space>

## API

### Space Props

| 属性      | 说明           | 类型                                         | 默认值         |
| --------- | -------------- | -------------------------------------------- | -------------- |
| size      | 间距大小       | `'sm' \| 'md' \| 'lg' \| number`             | `'sm'`         |
| align     | 对齐方式       | `'start' \| 'end' \| 'center' \| 'baseline'` | -              |
| direction | 间距方向       | `'vertical' \| 'horizontal'`                 | `'horizontal'` |
| wrap      | 是否自动换行   | `boolean`                                    | `false`        |
| split     | 分隔符         | `ReactNode`                                  | -              |
| compact   | 是否为紧凑模式 | `boolean`                                    | `false`        |
| className | 自定义类名     | `string`                                     | -              |
| style     | 自定义样式     | `CSSProperties`                              | -              |

`Space` 组件还支持 `div` 元素的所有原生属性。
