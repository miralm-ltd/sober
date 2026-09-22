# Split Button Trigger

该组件用于定义分割按钮的触发部分。

```html preview
<s-split-button>
  <s-split-button-trigger>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"></path></svg>
    <s-tooltip>Tooltip</s-tooltip>
  </s-split-button-trigger>
</s-split-button>
```

## 属性

| 名称     | 类型      | 默认值  | 同步 | 说明   |
| -------- | --------- | ------- | ---- | ------ |
| disabled | `boolean` | `false` | √    | 禁用的 |
| checked  | `boolean` | `false` | √    | 选中的 |

## 事件

| 名称   | 参数  | 冒泡 | 可取消 | 说明                   |
| ------ | ----- | ---- | ------ | ---------------------- |
| change | Event | ×    | ×      | 在点击了切换按钮后触发 |

## 插槽

| 名称 | 说明                                                                              |
| ---- | --------------------------------------------------------------------------------- |
| 匿名 | 按钮内容                                                                          |
| icon | 切换图标，默认支持  `.icon`, `svg`, `s-icon`, `ms-icon`，在选中时会旋转 `-180deg` |
