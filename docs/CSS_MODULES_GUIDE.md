# CSS 模块化指南

本项目使用 **CSS Modules** 来分离样式和组件逻辑，使用纯 CSS 编写样式。

## 📁 文件结构

```
app/
├── components/
│   ├── PatternCards.tsx          # React 组件
│   └── PatternCards.module.css   # 对应的 CSS 模块
```

## 🎨 使用方式

### 1. 创建 CSS Module 文件

创建 `.module.css` 文件（与组件同名），使用纯 CSS 语法：

```css
/* ComponentName.module.css */

.wrapper {
  width: 100%;
  padding: 1rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.card {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
```

**注意**：CSS Modules 不支持 Tailwind 的 `@apply` 指令，请使用标准 CSS 属性。

### 2. 在组件中导入

```tsx
import styles from './ComponentName.module.css';

export default function ComponentName() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>标题</h2>
      <div className={styles.card}>卡片内容</div>
    </div>
  );
}
```

## ✅ 优势

### 1. **样式隔离**
- CSS 类名会自动生成唯一标识，避免全局冲突
- 每个组件的样式完全独立

### 2. **代码清晰**
- TSX 文件专注于组件逻辑和结构
- CSS 文件专注于样式定义
- 更易于维护和协作

### 3. **标准 CSS**
- 使用原生 CSS 属性，无需学习额外语法
- 更好的 IDE 支持和代码补全
- 更容易被团队成员理解

### 4. **类型安全**
- TypeScript 自动补全样式名称
- 编译时检查样式类是否存在

## 🔧 高级用法

### 组合多个类名

```tsx
import styles from './Card.module.css';

function Card({ isActive }) {
  return (
    <div className={`${styles.card} ${isActive ? styles.active : ''}`}>
      内容
    </div>
  );
}
```

### 混合使用 Tailwind 和 Module CSS

```tsx
// 对于一次性的样式，可以直接使用 Tailwind
<div className={`${styles.card} mt-4 lg:mt-8`}>
  内容
</div>
```

### 响应式设计

```css
.card {
  @apply bg-slate-800 p-4;
}

@media (min-width: 768px) {
  .card {
    @apply p-6;
  }
}

/* 或使用 Tailwind 响应式前缀 */
.card {
  @apply bg-slate-800 p-4 md:p-6 lg:p-8;
}
```

### 伪类和状态

```css
.button {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}

.button:hover {
  @apply bg-blue-600 shadow-lg;
}

.button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
```

## 📝 命名规范

### 推荐的类名结构：

```css
/* 容器类 */
.wrapper {}
.container {}

/* 主要元素 */
.title {}
.content {}
.footer {}

/* 状态类 */
.active {}
.disabled {}
.loading {}

/* 变体类 */
.primary {}
.secondary {}
.large {}
.small {}
```

### BEM 风格（可选）：

```css
.card {}
.cardHeader {}
.cardTitle {}
.cardContent {}
.cardFooter {}
```

## 🚀 示例：重构前后对比

### ❌ 重构前（内联样式）

```tsx
export default function Card() {
  return (
    <div className="bg-slate-800/30 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-4">标题</h3>
      <p className="text-slate-400 leading-relaxed">内容</p>
      <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
        按钮
      </button>
    </div>
  );
}
```

### ✅ 重构后（CSS Modules）

```tsx
// Card.tsx
import styles from './Card.module.css';

export default function Card() {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>标题</h3>
      <p className={styles.content}>内容</p>
      <button className={styles.button}>按钮</button>
    </div>
  );
}
```

```css
/* Card.module.css */
.card {
  @apply bg-slate-800/30 border border-white/10 rounded-2xl p-6 
         hover:border-purple-500/30 transition-all duration-300;
}

.title {
  @apply text-xl font-bold text-white mb-4;
}

.content {
  @apply text-slate-400 leading-relaxed;
}

.button {
  @apply mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg 
         hover:bg-purple-600 transition-colors;
}
```

## 🎯 最佳实践

1. **一个组件对应一个 CSS Module 文件**
2. **使用语义化的类名**（描述作用而非样式）
3. **复用的样式提取到单独的 CSS 文件**
4. **保持 CSS 文件简洁**（每个类不超过 3-5 行）
5. **动画和复杂样式写在 CSS 中**
6. **简单的工具类直接用 Tailwind**

## 🔄 迁移策略

### 逐步迁移现有组件：

1. 选择一个组件开始
2. 创建对应的 `.module.css` 文件
3. 将重复的 Tailwind 类提取到 CSS
4. 更新组件引用
5. 测试确保样式正确
6. 继续下一个组件

### 优先级建议：

- ⭐⭐⭐ 高优先级：大型组件、重复样式多的组件
- ⭐⭐ 中优先级：中等复杂度的组件
- ⭐ 低优先级：简单的展示组件

## 📚 已迁移组件

- ✅ PatternCards - 完整的 CSS Module 重构示例

## 🤝 团队协作

- 新组件默认使用 CSS Modules
- PR 时注意检查样式文件
- 保持统一的命名规范
- 文档化特殊样式的用途
