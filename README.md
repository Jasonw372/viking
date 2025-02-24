# Viking Design

## 简介

Viking Design 是一个基于 React 的现代化 UI 组件库，专注于提供简洁、易用且功能强大的 PC 端组件解决方案。本项目采用 TypeScript 开发，提供类型支持，并使用 Storybook 进行组件展示和文档管理。

## 特性

- 🎨 现代化的设计风格
- 📦 基于 TypeScript 开发，提供完整的类型定义
- 🔧 支持按需引入
- 📚 详细的文档和示例
- 🎯 高度可定制的主题
- ✨ 丰富的组件类型

## 安装

// TODO：目前暂未发布到 npm 上
```bash
pnpm install viking-design
```

## 使用

```jsx
import { Button } from 'viking-design'
import 'viking-design/dist/index.css'

function App() {
  return <Button btnType="primary">Hello Viking</Button>
}
```

## 组件列表

- Alert - 警告提示
- AutoComplete - 自动完成
- Avatar - 头像
- Button - 按钮
- Checkbox - 复选框
- Flex - 弹性布局
- Form - 表单
- Grid - 栅格
- Icon - 图标
- Input - 输入框
- Menu - 导航菜单
- Progress - 进度条
- Slider - 滑块
- Space - 间距
- Switch - 开关
- Tab - 标签页
- Tooltip - 文字提示
- Upload - 上传

## 开发指南

### 环境准备

```bash
# 克隆项目
git clone https://github.com/Jasonw372/viking.git

# 安装依赖
pnpm install

# 启动 Storybook
pnpm run storybook

# 运行测试
pnpm test
```

### 目录结构

```
├── src/
│   ├── components/     # 组件源码
│   ├── styles/         # 样式文件
│   ├── hooks/          # 自定义 Hooks
│   └── utils/          # 工具函数
├── .storybook/        # Storybook 配置
├── dist/              # 构建输出目录
├── package.json       # 项目配置文件
```

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交你的改动 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 开启一个 Pull Request

## 许可证

本项目基于 MIT 许可证开源。

## 联系方式

如果你有任何问题或建议，欢迎提出 Issue 或 PR。
