---
sidebar_position: 1
title: Flex 弹性布局
---

import { Flex, Button, Space } from 'viking-design'

# Flex 弹性布局

`Flex` 组件用于创建灵活的布局容器，支持多种排列、对齐和间距设置。

## 使用

```ts
import { Flex } from 'viking-design';
```

## 代码演示

### 基础用法

```tsx
import { Flex, Button } from 'viking-design';

<Flex style={{ width: '400px', height: '200px', border: '1px solid #ddd' }}>
  <div style={{ padding: '16px', background: '#f0f0f0' }}>Item 1</div>
  <div style={{ padding: '16px', background: '#e0e0e0' }}>Item 2</div>
  <div style={{ padding: '16px', background: '#d0d0d0' }}>Item 3</div>
</Flex>;
```

<Flex style={{ width: '400px', height: '200px', border: '1px solid #ddd' }}>

  <div style={{ padding: '16px', background: '#f0f0f0' }}>Item 1</div>
  <div style={{ padding: '16px', background: '#e0e0e0' }}>Item 2</div>
  <div style={{ padding: '16px', background: '#d0d0d0' }}>Item 3</div>
</Flex>

### 不同方向

```tsx
import { Flex, Button, Space } from 'viking-design';

<Space direction="vertical" size="lg">
  <Flex direction="row" gap={8}>
    <Button>Row</Button>
    <Button>Row</Button>
    <Button>Row</Button>
  </Flex>
  <Flex direction="column" gap={8}>
    <Button>Column</Button>
    <Button>Column</Button>
    <Button>Column</Button>
  </Flex>
</Space>;
```

<Space direction="vertical" size="lg">
  <Flex direction="row" gap={8}>
    <Button>Row</Button>
    <Button>Row</Button>
    <Button>Row</Button>
  </Flex>
  <Flex direction="column" gap={8}>
    <Button>Column</Button>
    <Button>Column</Button>
    <Button>Column</Button>
  </Flex>
</Space>

### 主轴对齐

```tsx
import { Flex, Button, Space } from 'viking-design';

<Space direction="vertical" size="lg">
  {['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'].map(justify => (
    <div key={justify}>
      <div style={{ marginBottom: 8 }}>{justify}</div>
      <Flex
        justify={justify}
        gap={8}
        style={{ width: '400px', border: '1px solid #ddd', padding: 8 }}
      >
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Flex>
    </div>
  ))}
</Space>;
```

<Space direction="vertical" size="lg">
  {['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'].map(justify => (
    <div key={justify}>
      <div style={{ marginBottom: 8 }}>{justify}</div>
      <Flex justify={justify} gap={8} style={{ width: '400px', border: '1px solid #ddd', padding: 8 }}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Flex>
    </div>
  ))}
</Space>

### 交叉轴对齐

```tsx
import { Flex, Button, Space } from 'viking-design';

<Space direction="vertical" size="lg">
  {['start', 'end', 'center', 'stretch', 'baseline'].map(align => (
    <div key={align}>
      <div style={{ marginBottom: 8 }}>{align}</div>
      <Flex align={align} gap={8} style={{ height: '100px', border: '1px solid #ddd', padding: 8 }}>
        <Button style={{ height: align === 'stretch' ? 'auto' : '40px' }}>Button</Button>
        <Button style={{ height: '60px' }}>Button</Button>
        <Button style={{ height: '80px' }}>Button</Button>
      </Flex>
    </div>
  ))}
</Space>;
```

<Space direction="vertical" size="lg">
  {['start', 'end', 'center', 'stretch', 'baseline'].map(align => (
    <div key={align}>
      <div style={{ marginBottom: 8 }}>{align}</div>
      <Flex align={align} gap={8} style={{ height: '100px', border: '1px solid #ddd', padding: 8 }}>
        <Button style={{ height: align === 'stretch' ? 'auto' : '40px' }}>Button</Button>
        <Button style={{ height: '60px' }}>Button</Button>
        <Button style={{ height: '80px' }}>Button</Button>
      </Flex>
    </div>
  ))}
</Space>

### 换行

```tsx
import { Flex, Button, Space } from 'viking-design';

<Space direction="vertical">
  <Flex wrap="wrap" gap={8} style={{ width: '400px', border: '1px solid #ddd', padding: 8 }}>
    {Array.from({ length: 10 }).map((_, i) => (
      <Button key={i}>Button {i + 1}</Button>
    ))}
  </Flex>
</Space>;
```

<Space direction="vertical">
  <Flex wrap="wrap" gap={8} style={{ width: '400px', border: '1px solid #ddd', padding: 8 }}>
    {Array.from({ length: 10 }).map((_, i) => (
      <Button key={i}>Button {i + 1}</Button>
    ))}
  </Flex>
</Space>

### 间距

```tsx
import { Flex, Button, Space } from 'viking-design';

<Space direction="vertical" size="lg">
  {[0, 8, 16, 24, 32].map(gap => (
    <div key={gap}>
      <div style={{ marginBottom: 8 }}>gap: {gap}px</div>
      <Flex gap={gap} style={{ border: '1px solid #ddd', padding: 8 }}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Flex>
    </div>
  ))}
</Space>;
```

<Space direction="vertical" size="lg">
  {[0, 8, 16, 24, 32].map(gap => (
    <div key={gap}>
      <div style={{ marginBottom: 8 }}>gap: {gap}px</div>
      <Flex gap={gap} style={{ border: '1px solid #ddd', padding: 8 }}>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Flex>
    </div>
  ))}
</Space>

## API

### Flex Props

| 属性      | 说明           | 类型                                                                                  | 默认值     |
| --------- | -------------- | ------------------------------------------------------------------------------------- | ---------- |
| direction | 主轴方向       | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'`                              | `'row'`    |
| justify   | 主轴对齐方式   | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'`  |
| align     | 交叉轴对齐方式 | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'`                             | `'start'`  |
| wrap      | 是否换行       | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                                                | `'nowrap'` |
| gap       | 子元素间距     | `FlexGap \| [FlexGap, FlexGap]`                                                       | `0`        |
| flex      | flex属性       | `string \| number`                                                                    | -          |
| className | 自定义类名     | `string`                                                                              | -          |
| style     | 自定义样式     | `CSSProperties`                                                                       | -          |

`Flex` 组件还支持 `div` 元素的所有原生属性。
