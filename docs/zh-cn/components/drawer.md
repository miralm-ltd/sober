# Drawer

抽屉，该组件提供左右抽屉和中心主要视图。

```html preview block
<s-drawer style="height: 500px" endOpen="false">
  <s-nav-rail slot="start" mode="expanded">
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <div slot="text"> 首页 </div>
    </s-nav-rail-item>
    <s-nav-rail-item selected>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge></s-badge>
      <div slot="text"> 发现 </div>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge>3</s-badge>
      <div slot="text"> 我的 </div>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge>99</s-badge>
      <div slot="text"> 帮助 </div>
    </s-nav-rail-item>
    <s-divider></s-divider>
    <label>其他</label>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge>99</s-badge>
      <div slot="text"> 帮助 </div>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <div slot="text"> 协议 </div>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <div slot="text"> 关于 </div>
    </s-nav-rail-item>
  </s-nav-rail>
  <s-app-bar>
    <s-icon-button slot="nav" onclick="this.closest('s-drawer').toggle('start')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 Start</s-tooltip>
    </s-icon-button>
    <span slot="title">Drawer</span>
    <s-icon-button onclick="this.closest('s-drawer').toggle('end')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 End</s-tooltip>
    </s-icon-button>
  </s-app-bar>
  <div slot="end"></div>
</s-drawer>
```

## 模式

设置 `mode` 属性，可以设置抽屉固定显示模式，默认值为 `auto` 它会自动切换下列两种模式。

标准（standard）：

```html preview block
<s-drawer style="height: 500px" mode="standard" endOpen="false">
  <div slot="start"> </div>
  <s-app-bar>
    <s-icon-button slot="nav" onclick="this.closest('s-drawer').toggle('start')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 Start</s-tooltip>
    </s-icon-button>
    <span slot="title">Drawer</span>
    <s-icon-button onclick="this.closest('s-drawer').toggle('end')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 End</s-tooltip>
    </s-icon-button>
  </s-app-bar>
  <div slot="end"> </div>
</s-drawer>
```

模态（modal）：

```html preview block
<s-drawer style="height: 500px" mode="modal" endModalOpen>
  <div slot="start"> </div>
  <s-app-bar>
    <s-icon-button slot="nav" onclick="this.closest('s-drawer').toggle('start')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 Start</s-tooltip>
    </s-icon-button>
    <span slot="title">Drawer</span>
    <s-icon-button onclick="this.closest('s-drawer').toggle('end')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 End</s-tooltip>
    </s-icon-button>
  </s-app-bar>
  <div slot="end"> </div>
</s-drawer>
```

## 媒体查询

默认情况下（`mode=auto`），组件会自动切换为 `standard` 或 `modal`，你可以通过自定义 `media` 的值来改变这一行为。

```html preview block
<s-drawer style="height: 500px" endOpen="false" media="(max-width: 1024px)">
  <s-nav-rail slot="start" style="width: auto">
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-tooltip placement="right"> 首页 </s-tooltip>
    </s-nav-rail-item>
    <s-nav-rail-item selected>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"></path></svg>
      <s-badge></s-badge>
      <s-tooltip placement="right"> 发现 </s-tooltip>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"></path></svg>
      <s-badge>3</s-badge>
      <s-tooltip placement="right"> 我的 </s-tooltip>
    </s-nav-rail-item>
    <s-divider></s-divider>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-badge>99</s-badge>
      <s-tooltip placement="right"> 帮助 </s-tooltip>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-tooltip placement="right"> 协议 </s-tooltip>
    </s-nav-rail-item>
    <s-nav-rail-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <s-tooltip placement="right"> 帮助 </s-tooltip>
    </s-nav-rail-item>
  </s-nav-rail>
  <s-app-bar>
    <s-icon-button slot="nav" onclick="this.closest('s-drawer').toggle('start')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 Start</s-tooltip>
    </s-icon-button>
    <span slot="title">Drawer</span>
    <s-icon-button onclick="this.closest('s-drawer').toggle('end')">
      <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
      <s-tooltip>切换抽屉 End</s-tooltip>
    </s-icon-button>
  </s-app-bar>
  <div slot="end"> </div>
</s-drawer>
```

---

## 属性

| 名称           | 类型                        | 默认值                    | 同步 | 说明                                                       |
| -------------- | --------------------------- | ------------------------- | ---- | ---------------------------------------------------------- |
| mode           | `auto`, `standard`, `modal` | `auto`                    | ×    | 模式，auto=自动，standard=标准，modal=模态框               |
| startOpen      | `boolean`                   | `true`                    | √    | 标准 start 抽屉展开的                                      |
| endOpen        | `boolean`                   | `true`                    | √    | 标准 end 抽屉展开的                                        |
| startModalOpen | `boolean`                   | `false`                   | √    | 模态 start 抽屉展开的                                      |
| endModalOpen   | `boolean`                   | `false`                   | √    | 模态 end 抽屉展开的                                        |
| media          | `string`                    | `(orientation: portrait)` | ×    | 媒体查询，屏幕处于纵向，设置该属性可控制 `mode` 的切换时机 |

## 插槽

| 名称  | 说明     |
| ----- | -------- |
| 匿名  | 主要视图 |
| start | 左侧抽屉 |
| end   | 右侧抽屉 |

## HTML 标记属性

| 名称  | 说明         |
| ----- | ------------ |
| modal | 模态框时设置 |

## 方法

`.toggle(slot, mode): void` 切换抽屉，建议调用该方法去切换抽屉的展开和关闭。

- `slot`：`'start' | 'end'` 抽屉。
- `mode`：`'auto' | 'standard' | 'modal'` 可选，默认为 `auto`。

`.getMode(): 'standard' | 'modal'` 获取模式。
