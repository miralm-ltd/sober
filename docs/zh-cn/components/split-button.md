# Split Button

分割按钮，拆分按钮打开一个菜单，为用户提供与操作相关的更多选项。

```html preview
<s-split-button>
  <s-split-button-action>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>
```

## 变体

设置 `variant` 来设置不同的变体：`elevated`、`tonal`、`outlined`。

```html preview
<s-split-button variant="elevated">
  <s-split-button-action>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button variant="tonal">
  <s-split-button-action>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button variant="outlined">
  <s-split-button-action>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>
```

## 禁用

在 `action` 和 `trigger` 上都可以设置 `disabled` 来禁用。

```html preview
<s-split-button>
  <s-split-button-action disabled>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger disabled></s-split-button-trigger>
</s-split-button>

<s-split-button variant="elevated">
  <s-split-button-action disabled>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger disabled></s-split-button-trigger>
</s-split-button>

<s-split-button variant="tonal">
  <s-split-button-action disabled>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger disabled></s-split-button-trigger>
</s-split-button>

<s-split-button variant="outlined">
  <s-split-button-action disabled>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger disabled></s-split-button-trigger>
</s-split-button>
```

## 尺寸

设置 `size` 属性来设置按钮尺寸（你也可以设置 CSS 样式 `height` 来更精确的定义按钮高度） 。

```html preview
<s-split-button size="extra-small">
  <s-split-button-action>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button size="small">
  <s-split-button-action>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button size="medium">
  <s-split-button-action>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button size="large">
  <s-split-button-action>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>

<s-split-button size="extra-large">
  <s-split-button-action>
    <svg viewBox="0 -960 960 960" slot="start"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    label
  </s-split-button-action>
  <s-split-button-trigger></s-split-button-trigger>
</s-split-button>
```

## 属性

| 名称    | 类型                                                     | 默认值   | 同步 | 说明 |
| ------- | -------------------------------------------------------- | -------- | ---- | ---- |
| variant | `filled`, `elevated`, `tonal`, `outlined`                | `filled` | √    | 变体 |
| size    | `small`, `extra-small`, `medium`, `large`, `extra-large` | `small`  | √    | 尺寸 |

## 插槽

| 名称 | 说明                                                |
| ---- | --------------------------------------------------- |
| 匿名 | `s-split-button-action` 和 `s-split-button-trigger` |

## 键盘快捷键

使用 `Tab` 键切换焦点，使用 `Space` 或者 `Enter` 键触发点击事件。

## 依赖

该组件在被引入时会自动引入以下组件：

- [Ripple](./ripple.md)
