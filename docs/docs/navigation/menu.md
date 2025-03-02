---
sidebar_position: 1
title: Menu 菜单
---

import { Menu } from 'viking-design';

# Menu 菜单

`Menu` 组件用于创建导航菜单，支持水平和垂直模式，并支持下拉子菜单。

## 使用

```ts
import { Menu } from 'viking-design';
```

## 代码演示

### 水平菜单

```tsx
import { Menu } from 'viking-design';

<Menu defaultIndex="0">
  <Menu.Item>首页</Menu.Item>
  <Menu.Item>关于我们</Menu.Item>
  <Menu.Item>产品介绍</Menu.Item>
  <Menu.Item>联系我们</Menu.Item>
</Menu>;
```

<Menu defaultIndex="0">
  <Menu.Item>首页</Menu.Item>
  <Menu.Item>关于我们</Menu.Item>
  <Menu.Item>产品介绍</Menu.Item>
  <Menu.Item>联系我们</Menu.Item>
</Menu>

### 垂直菜单

```tsx
import { Menu } from 'viking-design';

<Menu defaultIndex="0" mode="vertical">
  <Menu.Item>首页</Menu.Item>
  <Menu.Item>关于我们</Menu.Item>
  <Menu.SubMenu title="产品介绍">
    <Menu.Item>产品1</Menu.Item>
    <Menu.Item>产品2</Menu.Item>
  </Menu.SubMenu>
  <Menu.Item>联系我们</Menu.Item>
</Menu>;
```

<!-- TODO: 子菜单无法显示bug -->

<Menu defaultIndex="0" mode="vertical">
  <Menu.Item>首页</Menu.Item>
  <Menu.Item>关于我们</Menu.Item>
  <Menu.SubMenu title="产品介绍">
    <Menu.Item>产品1</Menu.Item>
    <Menu.Item>产品2</Menu.Item>
  </Menu.SubMenu>
  <Menu.Item>联系我们</Menu.Item>
</Menu>

### 带子菜单的菜单

```tsx
import { Menu } from 'viking-design';

<Menu defaultIndex="0">
  <Menu.Item>首页</Menu.Item>
  <Menu.SubMenu title="产品介绍">
    <Menu.Item>产品1</Menu.Item>
    <Menu.Item>产品2</Menu.Item>
    <Menu.Item>产品3</Menu.Item>
  </Menu.SubMenu>
  <Menu.Item>联系我们</Menu.Item>
</Menu>;
```

<div style={{ width: '100%', height: '200px', border: '1px solid #ccc' }}>
    <Menu defaultIndex="0">
    <Menu.Item>首页</Menu.Item>
    <Menu.SubMenu title="产品介绍">
        <Menu.Item>产品1</Menu.Item>
        <Menu.Item>产品2</Menu.Item>
        <Menu.Item>产品3</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item>联系我们</Menu.Item>
    </Menu>
</div>
### 禁用菜单项

```tsx
import { Menu } from 'viking-design';

<Menu defaultIndex="0">
  <Menu.Item>可点击项</Menu.Item>
  <Menu.Item disabled>禁用项</Menu.Item>
  <Menu.Item>可点击项</Menu.Item>
</Menu>;
```

<Menu defaultIndex="0">
  <Menu.Item>可点击项</Menu.Item>
  <Menu.Item disabled>禁用项</Menu.Item>
  <Menu.Item>可点击项</Menu.Item>
</Menu>
## API

### Menu Props

| 属性                | 说明                       | 类型                              | 默认值         |
| ------------------- | -------------------------- | --------------------------------- | -------------- |
| defaultIndex        | 默认选中的菜单项索引       | `string`                          | `'0'`          |
| selectedIndex       | 当前选中的菜单项索引       | `string`                          | -              |
| mode                | 菜单的显示模式：水平或垂直 | `'horizontal' \| 'vertical'`      | `'horizontal'` |
| onSelect            | 选择菜单项时的回调函数     | `(selectedIndex: string) => void` | -              |
| onClick             | 点击菜单项时的回调函数     | `(index: string) => void`         | -              |
| className           | 自定义样式类名             | `string`                          | -              |
| style               | 自定义样式                 | `CSSProperties`                   | -              |
| defaultOpenSubMenus | 默认展开的子菜单项索引数组 | `string[]`                        | `[]`           |

### MenuItem Props

| 属性      | 说明           | 类型            | 默认值  |
| --------- | -------------- | --------------- | ------- |
| index     | 菜单项的索引   | `string`        | -       |
| disabled  | 是否禁用菜单项 | `boolean`       | `false` |
| className | 自定义类名     | `string`        | -       |
| style     | 自定义样式     | `CSSProperties` | -       |

### SubMenu Props

| 属性      | 说明         | 类型     | 默认值 |
| --------- | ------------ | -------- | ------ |
| index     | 子菜单的索引 | `string` | -      |
| title     | 子菜单的标题 | `string` | -      |
| className | 自定义类名   | `string` | -      |

`Menu` 组件还支持 `ul` 元素的所有原生属性，`MenuItem` 和 `SubMenu` 支持 `li` 元素的所有原生属性。
