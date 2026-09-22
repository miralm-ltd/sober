# Fab

浮动操作按钮（Floating Action Button）帮助用户采取主要操作。

```html preview
<s-fab>
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="secondary">
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="tertiary">
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="tonal-primary">
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="tonal-secondary">
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="tonal-tertiary">
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="surface">
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>
```

使用其他组件作为插槽。

```html preview
<s-fab>
  <s-loading></s-loading> <!-- [!code highlight] -->
</s-fab>
<s-fab>
  <s-spinner indeterminate></s-spinner> <!-- [!code highlight] -->
</s-fab>
```

## 禁用

设置 `disbled` 属性禁用按钮

```html preview
<s-fab disabled> <!-- [!code highlight] -->
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="secondary" disabled> <!-- [!code highlight] -->
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="tertiary" disabled> <!-- [!code highlight] -->
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="tonal-primary" disabled> <!-- [!code highlight] -->
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="tonal-secondary" disabled> <!-- [!code highlight] -->
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="tonal-tertiary" disabled> <!-- [!code highlight] -->
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab variant="surface" disabled> <!-- [!code highlight] -->
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>
```

## 隐藏的

设置 `hidden` 属性隐藏

```vue preview
<script setup>
  import { ref } from 'vue'

  const visible = ref(false)
</script>
<template>
  <s-fab :hidden="visible">
    <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
  </s-fab>
  <s-button @click="visible=!visible">切换</s-button>
</template>
```

## 尺寸

设置 `size` 属性改变按钮大小。

```html preview
<s-fab>
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab size="medium"> <!-- [!code highlight] -->
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab size="large"> <!-- [!code highlight] -->
  <svg viewBox="0 -960 960 960"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>
```

## 扩展

可以使用文本和 `start`、`end` 插槽添加其他内容。

```html preview
<s-fab>
  <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
  提交信息
  <svg viewBox="0 -960 960 960" slot="end"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab size="medium" variant="secondary">
  <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
  提交信息
  <svg viewBox="0 -960 960 960" slot="end"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>

<s-fab size="large" variant="tertiary">
  <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
  提交信息
  <svg viewBox="0 -960 960 960" slot="end"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
</s-fab>
```

## 属性

| 名称     | 类型                                                                                                | 默认值    | 同步 | 说明   |
| -------- | --------------------------------------------------------------------------------------------------- | --------- | ---- | ------ |
| variant  | `primary`, `secondary`, `tertiary`, `surface`, `tonal-primary`, `tonal-secondary`, `tonal-tertiary` | `primary` | √    | 变体   |
| size     | `small`, `medium`, `large`                                                                          | `small`   | √    | 尺寸   |
| disabled | `boolean`                                                                                           | `false`   | √    | 禁用的 |
| hidden   | `boolean`                                                                                           | `false`   | √    | 隐藏的 |

## 插槽

| 名称  | 说明                                                                                  |
| ----- | ------------------------------------------------------------------------------------- |
| 匿名  | 按钮文本，默认支持文本, `.icon`, `svg`, `s-icon`, `s-loading`, `s-spinner`, `ms-icon` |
| start | 开始，默认支持同匿名                                                                  |
| end   | 结束，默认支持同匿名                                                                  |

## HTML 标记属性

| 名称    | 说明           |
| ------- | -------------- |
| pressed | 按下时设置     |
| hover   | 鼠标移入时设置 |

## 键盘快捷键

使用 `Tab` 键切换焦点，使用 `Space` 或者 `Enter` 键触发点击事件。

## 依赖

该组件在被引入时会自动引入以下组件：

- [Ripple](./ripple.md)
