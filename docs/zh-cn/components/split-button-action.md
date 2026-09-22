# Split Button Action

该组件用于定义按钮的操作部分，它支持 `start` 和 `end` 插槽放置前后内容。

```html preview
<s-split-button>
  <s-split-button-action>
    <s-loading slot="start"></s-loading>
    label
    <s-spinner slot="end" indeterminate></s-spinner>
  </s-split-button-action>
</s-split-button>
```

## 属性

| 名称     | 类型      | 默认值  | 同步 | 说明   |
| -------- | --------- | ------- | ---- | ------ |
| disabled | `boolean` | `false` | √    | 禁用的 |

## 插槽

| 名称  | 说明                                                                                  |
| ----- | ------------------------------------------------------------------------------------- |
| 匿名  | 按钮文本，默认支持文本, `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `ms-icon` |
| start | 开始，默认同匿名                                                                      |
| end   | 结束，默认支持同匿名                                                                  |
