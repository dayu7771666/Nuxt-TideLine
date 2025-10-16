# 多语言配置系统

这个项目现在支持基于环境变量的动态语言加载，可以在开发环境中选择性加载语言以提高启动速度。

## 快速开始

### 开发环境

1. **只加载英语（推荐，最快启动）**

   ```bash
   npm run dev:en
   # 或者
   DEV_LANGUAGES=en npm run dev
   ```

2. **加载多个语言**

   ```bash
   npm run dev:multi  # 加载英语、法语、西班牙语
   # 或者自定义
   DEV_LANGUAGES=en,fr,de npm run dev
   ```

3. **加载所有语言（与生产环境相同）**
   ```bash
   npm run dev:all
   # 或者
   DEV_LANGUAGES=all npm run dev
   ```

### 生产环境

生产环境始终加载所有语言，无论环境变量如何设置。

```bash
npm run build
npm run generate
```

## 环境变量配置

在项目根目录创建 `.env` 文件：

```bash
# 复制示例文件
cp env.example .env
```

然后编辑 `.env` 文件：

```env
# 开发环境语言配置
DEV_LANGUAGES=en,fr,es
```

## 可用语言代码

| 代码 | 语言     | 域名                    |
| ---- | -------- | ----------------------- |
| ar   | 阿拉伯语 | arar.swimsuitcustom.com |
| de   | 德语     | dede.swimsuitcustom.com |
| en   | 英语     | enen.swimsuitcustom.com |
| es   | 西班牙语 | eses.swimsuitcustom.com |
| fr   | 法语     | frfr.swimsuitcustom.com |
| hi   | 印地语   | hihi.swimsuitcustom.com |
| it   | 意大利语 | itit.swimsuitcustom.com |
| ja   | 日语     | jaja.swimsuitcustom.com |
| ko   | 韩语     | koko.swimsuitcustom.com |
| pt   | 葡萄牙语 | ptpt.swimsuitcustom.com |
| ru   | 俄语     | ruru.swimsuitcustom.com |
| zh   | 中文     | （待配置）              |

## 性能对比

| 配置             | 启动时间 | 内存使用 | 适用场景          |
| ---------------- | -------- | -------- | ----------------- |
| 单语言 (en)      | ~10s     | 低       | 日常开发          |
| 3语言 (en,fr,es) | ~25s     | 中       | 多语言测试        |
| 全语言 (all)     | ~60s+    | 高       | 完整测试/生产环境 |

## 工作原理

1. **配置检测**: `config/languages.ts` 根据环境变量和 NODE_ENV 决定加载哪些语言
2. **动态 i18n**: `nuxt.config.ts` 使用动态语言列表配置 i18n
3. **动态内容**: `content.config.ts` 只为启用的语言创建内容集合
4. **运行时访问**: 客户端可以通过 `$config.public.enabledLanguages` 获取启用的语言列表

## 故障排除

### 问题：启动时出现语言相关错误

**解决方案**: 确保 `DEV_LANGUAGES` 中的语言代码都是有效的，参考上面的语言代码表。

### 问题：某个语言的内容无法访问

**解决方案**: 检查该语言是否在 `DEV_LANGUAGES` 中，或者使用 `DEV_LANGUAGES=all` 加载所有语言。

### 问题：生产环境缺少某些语言

**解决方案**: 生产环境会自动加载所有语言，检查内容文件是否存在于对应的语言目录中。

## 开发建议

1. **日常开发**: 使用 `npm run dev:en` 获得最快的启动速度
2. **多语言测试**: 使用 `npm run dev:multi` 测试几种主要语言
3. **发布前测试**: 使用 `npm run dev:all` 进行完整测试
4. **CI/CD**: 生产构建会自动包含所有语言，无需特殊配置
