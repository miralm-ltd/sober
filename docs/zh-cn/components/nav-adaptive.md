# NavAdaptive

自适应导航栏，它会监听自身宽度在“完整显示”、“仅显示图标”、“折叠”三种模式中自动切换。

```html preview
<s-nav-adaptive>
  <s-nav-adaptive-item selected>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M220-260q-92 0-156-64T0-480q0-92 64-156t156-64q37 0 71 13t61 37l68 62-60 54-62-56q-16-14-36-22t-42-8q-58 0-99 41t-41 99q0 58 41 99t99 41q22 0 42-8t36-22l310-280q27-24 61-37t71-13q92 0 156 64t64 156q0 92-64 156t-156 64q-37 0-71-13t-61-37l-68-62 60-54 62 56q16 14 36 22t42 8q58 0 99-41t41-99q0-58-41-99t-99-41q-22 0-42 8t-36 22L352-310q-27 24-61 37t-71 13Z"></path></svg>
    <div slot="text"> 动态 </div>
    <s-badge></s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z"></path></svg>
    <div slot="text"> 发现 </div>
    <s-badge>3</s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
    <div slot="text"> 帮助 </div>
    <s-badge>99</s-badge>
  </s-nav-adaptive-item>
  <!--自定义按钮-->
  <s-icon-button slot="action">
    <svg viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>
  </s-icon-button>
  <!--切换按钮-->
  <s-icon-button slot="toggle" width="narrow"> 
    <svg viewBox="0 -960 960 960"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
</s-nav-adaptive>
```

纯文本

```html preview
<s-nav-adaptive>
  <s-nav-adaptive-item selected>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <div slot="text"> 动态 </div>
    <s-badge></s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <div slot="text"> 发现 </div>
    <s-badge>3</s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <div slot="text"> 帮助 </div>
    <s-badge>99</s-badge>
  </s-nav-adaptive-item>
  <!--切换按钮-->
  <s-icon-button slot="toggle" width="narrow"> 
    <svg viewBox="0 -960 960 960"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
</s-nav-adaptive>
```

纯图标+工具提示

```html preview
<s-nav-adaptive>
  <s-nav-adaptive-item selected>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
    <s-tooltip> 首页 </s-tooltip>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M220-260q-92 0-156-64T0-480q0-92 64-156t156-64q37 0 71 13t61 37l68 62-60 54-62-56q-16-14-36-22t-42-8q-58 0-99 41t-41 99q0 58 41 99t99 41q22 0 42-8t36-22l310-280q27-24 61-37t71-13q92 0 156 64t64 156q0 92-64 156t-156 64q-37 0-71-13t-61-37l-68-62 60-54 62 56q16 14 36 22t42 8q58 0 99-41t41-99q0-58-41-99t-99-41q-22 0-42 8t-36 22L352-310q-27 24-61 37t-71 13Z"></path></svg>
    <s-tooltip> 动态 </s-tooltip>
    <s-badge></s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z"></path></svg>
    <s-tooltip> 发现 </s-tooltip>
    <s-badge>3</s-badge>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <svg viewBox="0 -960 960 960" slot="icon"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
    <s-tooltip> 帮助 </s-tooltip>
    <s-badge>99</s-badge>
  </s-nav-adaptive-item>
  <!--切换按钮-->
  <s-icon-button slot="toggle" width="narrow"> 
    <svg viewBox="0 -960 960 960"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
</s-nav-adaptive>
```

在 [AppBar](./app-bar.md) 组件中使用。

```html preview
<s-app-bar>
  <s-icon-button slot="nav">
    <svg viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
  </s-icon-button>
  <span slot="title"> Material Sober </span>
  <s-nav-adaptive>
    <s-nav-adaptive-item selected>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"></path></svg>
      <div slot="text"> 首页 </div>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M220-260q-92 0-156-64T0-480q0-92 64-156t156-64q37 0 71 13t61 37l68 62-60 54-62-56q-16-14-36-22t-42-8q-58 0-99 41t-41 99q0 58 41 99t99 41q22 0 42-8t36-22l310-280q27-24 61-37t71-13q92 0 156 64t64 156q0 92-64 156t-156 64q-37 0-71-13t-61-37l-68-62 60-54 62 56q16 14 36 22t42 8q58 0 99-41t41-99q0-58-41-99t-99-41q-22 0-42 8t-36 22L352-310q-27 24-61 37t-71 13Z"></path></svg>
      <div slot="text"> 动态 </div>
      <s-badge></s-badge>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M446-80q-15 0-30-6t-27-18L103-390q-12-12-17.5-26.5T80-446q0-15 5.5-30t17.5-27l352-353q11-11 26-17.5t31-6.5h287q33 0 56.5 23.5T879-800v287q0 16-6 30.5T856-457L503-104q-12 12-27 18t-30 6Zm0-80 353-354v-286H513L160-446l286 286Zm253-480q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM480-480Z"></path></svg>
      <div slot="text"> 发现 </div>
      <s-badge>3</s-badge>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item>
      <svg viewBox="0 -960 960 960" slot="icon"><path d="M513.5-254.5Q528-269 528-290t-14.5-35.5Q499-340 478-340t-35.5 14.5Q428-311 428-290t14.5 35.5Q457-240 478-240t35.5-14.5ZM442-394h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
      <div slot="text"> 帮助 </div>
      <s-badge>99</s-badge>
    </s-nav-adaptive-item>
    <!--自定义按钮-->
    <s-icon-button slot="action">
      <svg viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>
    </s-icon-button>
    <!--切换按钮-->
    <s-icon-button slot="toggle" width="narrow"> 
      <svg viewBox="0 -960 960 960"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>
      <s-tooltip> 更多 </s-tooltip>
    </s-icon-button>
  </s-nav-adaptive>
</s-app-bar>
```

## 设置选中

你可以使用以下两种方式来设置选中。

在 `s-nav-adaptive-item` 上设置 `selected` 属性来设置选中。  

```html preview
<s-nav-adaptive>
  <s-icon-button slot="toggle" width="narrow"> 
    <s-icon></s-icon>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
  <s-nav-adaptive-item>
    <s-icon slot="icon"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item selected> <!-- [!code highlight] -->
    <s-icon slot="icon"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item>
    <s-icon slot="icon"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-adaptive-item>
</s-nav-adaptive>
```

在 `s-nav-adaptive` 上设置 `value` 属性，然后在 `s-nav-adaptive-item` 上设置相同的 `value` 值来设置选中。

```html preview
<s-nav-adaptive value="a2"> <!-- [!code highlight] -->
  <s-icon-button slot="toggle" width="narrow"> 
    <s-icon></s-icon>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
  <s-nav-adaptive-item value="a1">
    <s-icon slot="icon"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item value="a2"> <!-- [!code highlight] -->
    <s-icon slot="icon"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item value="a3">
    <s-icon slot="icon"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-adaptive-item>
</s-nav-adaptive>
```

## 多选支持

设置 `multiple` 属性，即可开启多选功能。  
如果在 `s-nav-adaptive` 设置 `value` 来选中，需要使用 `,` 分割多个值。  
你可以通过 `.selectedIndexes` 获取当前选中的下标合集，也可以通过 `.selectedItems` 获取当前选中的元素合集。

```html preview
<s-nav-adaptive multiple value="a1,a2" onchange="console.log('selected', this.selectedIndexes)"> <!-- [!code highlight] -->
  <s-icon-button slot="toggle" width="narrow"> 
    <s-icon></s-icon>
    <s-tooltip> 更多 </s-tooltip>
  </s-icon-button>
  <s-nav-adaptive-item value="a1"> <!-- [!code highlight] -->
    <s-icon slot="icon"></s-icon>
    <div slot="text"> 首页 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item value="a2"> <!-- [!code highlight] -->
    <s-icon slot="icon"></s-icon>
    <s-badge></s-badge>
    <div slot="text"> 发现 </div>
  </s-nav-adaptive-item>
  <s-nav-adaptive-item value="a3">
    <s-icon slot="icon"></s-icon>
    <s-badge>3</s-badge>
    <div slot="text"> 我的 </div>
  </s-nav-adaptive-item>
</s-nav-adaptive>
```

## 表单支持

该组件支持表单，你需要在为 `s-nav-adaptive` 设置一个唯一的 `name` 属性作为表单的键，在 `s-nav-adaptive-item` 设置 `value` 属性作为表单的提交值。  

```html preview
<form method="get" action="http://coolaf.com/tool/params">
  <s-nav-adaptive name="navigation" value="a1,a2" defaultValue="a1,a2" multiple> <!-- [!code highlight] -->
    <s-icon-button slot="toggle" width="narrow"> 
      <s-icon></s-icon>
      <s-tooltip> 更多 </s-tooltip>
    </s-icon-button>
    <s-nav-adaptive-item value="a1"> 
      <s-icon slot="icon"></s-icon>
      <div slot="text"> 首页 </div>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item value="a2"> 
      <s-icon slot="icon"></s-icon>
      <div slot="text"> 发现 </div>
    </s-nav-adaptive-item>
    <s-nav-adaptive-item value="a3"> 
      <s-icon slot="icon"></s-icon>
      <div slot="text"> 我的 </div>
    </s-nav-adaptive-item>
  </s-nav-adaptive>
  <hr>
  <s-button type="reset" variant="outlined"> 重置 </s-button>
  <s-button type="submit"> 提交 </s-button>
</form>
```

---

## 属性

| 名称                   | 类型                       | 默认值 | 同步 | 说明                                              |
| ---------------------- | -------------------------- | ------ | ---- | ------------------------------------------------- |
| name                   | string                     | ""     | ×    | 提交表单时使用的 name 属性                        |
| value                  | string                     | ""     | ×    | 选中的值（多选时使用 `,` 分割多个值）             |
| defaultValue           | string                     | ""     | ×    | 默认选中值（仅表单重置时会设置，同 `value` 属性） |
| multiple               | boolean                    | false  | √    | 多选的                                            |
| selectable             | boolean                    | true   | √    | 可选中的，禁用该属性点击时不会再选中              |
| items `只读`           | NavigationResponsiveItem[] | []     |      | 所有子元素                                        |
| selectedItems `只读`   | NavigationResponsiveItem[] | []     |      | 选中的子元素                                      |
| selectedIndex `只读`   | number                     | -1     |      | 当前选中下标                                      |
| selectedIndexes `只读` | number[]                   | []     |      | 当前多选下标数组                                  |

## 事件

| 名称   | 参数  | 冒泡 | 可取消 | 说明               |
| ------ | ----- | ---- | ------ | ------------------ |
| change | Event | ×    | ×      | 选中发生变化后触发 |

## 插槽

| 名称   | 说明                         |
| ------ | ---------------------------- |
| 匿名   | `s-nav-adaptive-item` 子元素 |
| toggle | 切换按钮插槽                 |
| action | 操作按钮插槽                 |

## HTML 标记属性

| 名称      | 说明             |
| --------- | ---------------- |
| icon-only | 仅显示图标时设置 |
| collapsed | 折叠时设置       |

---

## NavAdaptiveItem

该组件仅作为 `NavAdaptive` 的子元素使用，单独使用时只是普通容器。

## Item 属性

| 名称       | 类型    | 默认值 | 同步 | 说明                                 |
| ---------- | ------- | ------ | ---- | ------------------------------------ |
| value      | string  |        | ×    | 表单提交或选中的值                   |
| selected   | boolean | false  | √    | 选中的                               |
| selectable | boolean | true   | √    | 可选中的，禁用该属性点击时不会再选中 |

## Item 事件

| 名称  | 参数  | 冒泡 | 可取消 | 说明               |
| ----- | ----- | ---- | ------ | ------------------ |
| input | Event | ×    | ×      | 点击元素选中后触发 |

## Item 插槽

| 名称 | 说明                       |
| ---- | -------------------------- |
| 匿名 | 支持 s-badge, s-tooltip 等 |
| icon | 图标                       |
| text | 文本                       |

---

## 键盘快捷键

使用 `Tab` 键切换焦点，使用 `Space` 或者 `Enter` 键触发点击事件

## 依赖

- [Ripple](./ripple.md)
