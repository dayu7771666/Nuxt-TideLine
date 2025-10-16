# 代码格式化配置说明

## 概述

本项目使用 Prettier 作为代码格式化工具，确保代码风格一致。

## 配置特性

- **每个属性单独一行**: `"singleAttributePerLine": true`
- **Vue 脚本和样式缩进**: `"vueIndentScriptAndStyle": true`
- **单引号**: `"singleQuote": true`
- **分号**: `"semi": true`
- **制表符宽度**: 2 个空格
- **最大行宽**: 80 字符

## 使用方法

### 1. 自动格式化（推荐）

- 在 VS Code 中保存文件时自动格式化
- 复制粘贴代码时自动格式化
- 使用快捷键 `Shift + Alt + F` 手动格式化

### 2. 命令行格式化

```bash
# 格式化所有文件
npm run format

# 检查格式化状态（不修改文件）
npm run format:check

# 格式化特定文件
npx prettier --write app.vue
```

### 3. VS Code 设置

- 已配置 `.vscode/settings.json`
- Prettier 作为默认格式化工具
- 支持 Vue、JavaScript、TypeScript、HTML、CSS 等文件类型

## 文件类型支持

- `.vue` - Vue 单文件组件
- `.js` - JavaScript 文件
- `.ts` - TypeScript 文件
- `.json` - JSON 文件
- `.html` - HTML 文件
- `.css` - CSS 文件

## 忽略文件

以下文件和目录不会被格式化：

- `node_modules/`
- `.nuxt/`
- `.output/`
- 构建输出目录
- 日志文件
- IDE 配置文件

## 示例

格式化前：

```vue
<div
  class="container"
  id="main"
  data-test="example"
  @click="handleClick"
  :class="{ active: isActive }"
  v-if="show"
></div>
```

格式化后：

```vue
<div
  class="container"
  id="main"
  data-test="example"
  @click="handleClick"
  :class="{ active: isActive }"
  v-if="show"
></div>
```

## 故障排除

如果格式化没有生效：

1. 确保安装了 Prettier VS Code 扩展
2. 重启 VS Code
3. 检查文件是否在 `.prettierignore` 中
4. 运行 `npm run format:check` 检查配置
