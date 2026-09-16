import { useProps, useElement } from '../core/elements.js'
import { Selector } from '../core/utils/selector.js'
import * as scheme from '../core/scheme.js'
import { FieldSet } from './field-set.js'
import { Popup } from '../core/utils/popup.js'
import { useComputedStyle } from '../core/utils/CSS.js'
import './ripple.js'

const props = useProps({
  $name: '',
  $value: '',
  label: '',
  $defaultValue: '',
  $searchPlaceholder: '',
  multiple: false,
  searchable: false,
  selectable: true,
  variant: ['outlined', 'text'],
  placement: ['bottom', 'top', 'left', 'right']
})
const itemProps = useProps({
  $text: '',
  $searchText: '',
  $value: '',
  selected: false,
  selectable: true
})

const style = /*css*/`
:host{
  display: inline-flex;
  min-height: 40px;
  gap: 4px;
  line-height: 1;
  cursor: pointer;
  color: ${scheme.color.onSurface};
  transition-timing-function: ${scheme.motion.easing.standard};
  transition-duration: ${scheme.motion.duration.short4};
  border-radius: ${scheme.shape.corner.extraSmall};
}
.field-set{
  min-height: inherit;
  line-height: inherit;
  border-radius: inherit;
  flex-grow: 1;
  position: relative;
  --s_picker-padding-left: var(--s-picker-padding-left, var(--s-picker-padding, 16px));
  --s_picker-padding-right: var(--s-picker-padding-right, var(--s-picker-padding, 16px));
  --s_picker-border-radius: var(--s-picker-border-radius, ${scheme.shape.corner.extraSmall});
  --s_picker-border-top-left-radius: var(--s-picker-border-top-left-radius, var(--s_picker-border-radius));
  --s_picker-border-top-right-radius: var(--s-picker-border-top-right-radius, var(--s_picker-border-radius));
  --s_picker-border-bottom-left-radius: var(--s-picker-border-bottom-left-radius, var(--s_picker-border-radius));
  --s_picker-border-bottom-right-radius: var(--s-picker-border-bottom-right-radius, var(--s_picker-border-radius));
  --s_picker-border-color: var(--s-picker-border-color, ${scheme.color.outline});
  --s_picker-border-color-focused: var(--s-picker-border-color-focused, ${scheme.color.primary});
  --s_picker-border-width: var(--s-picker-border-width, 1px);
  --s_picker-border-width-focused: var(--s-picker-border-width-focused, 2px);
  --s_picker-label-gap: var(--s-picker-label-gap, 4px);
  --s-field-set-padding-top: 0px;
  --s-field-set-padding-bottom: 0px;
  --s-field-set-padding-left: var(--s_picker-padding-left);
  --s-field-set-padding-right: var(--s_picker-padding-right);
  --s-field-set-border-top-left-radius: var(--s_picker-border-top-left-radius);
  --s-field-set-border-top-right-radius: var(--s_picker-border-top-right-radius);
  --s-field-set-border-bottom-left-radius: var(--s_picker-border-bottom-left-radius);
  --s-field-set-border-bottom-right-radius: var(--s_picker-border-bottom-right-radius);
  --s-field-set-border-color: var(--s_picker-border-color);
  --s-field-set-border-color-focused: var(--s_picker-border-color-focused);
  --s-field-set-border-width: var(--s_picker-border-width);
  --s-field-set-border-width-focused: var(--s_picker-border-width-focused);
  --s-field-set-legend-gap: var(--s_picker-label-gap);
}
.label{
  height: 100%;
  display: flex;
  align-items: center;
  line-height: 1;
  span{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    overflow: clip visible;
  }
}
.items{
  display: none;
}
.layout{
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.ripple{
  z-index: 1;
  border-radius: var(--s_picker-border-top-left-radius) var(--s_picker-border-top-right-radius) var(--s_picker-border-bottom-left-radius) var(--s_picker-border-bottom-right-radius);
}
.text{
  flex-grow: 1;
  height: fit-content;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
svg{
  width: 24px;
  margin-right: calc(var(--s_picker-padding-right) - 10px);
  margin-left: calc(var(--s_picker-padding-right) * -1);
  fill: ${scheme.color.onSurfaceVariant};
}
.popover{
  display: none;
  position: fixed;
  border: none;
  background: none;
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  inset: 0;
  margin: 0;
  padding: 0;
  outline: none;
  overflow: visible;
  z-index: 1;
  transition-property: none;
  &::backdrop{
    background: none;
  }
  &.open{
    display: block;
    .container{
      transition-property: left, top;
    }
  }
}
.container{
  display: flex;
  flex-direction: column;
  height: fit-content;
  position: absolute;
  max-height: 50%;
  max-width: 50%;
  contain: layout;
  cursor: default;
  overflow: hidden;
  transition-property: none;
  border: solid var(--s-border-min, 1px) var(--s-color-outline-variant);
  background: ${scheme.color.surfaceContainer};
  box-shadow: ${scheme.elevation.level3};
  border-radius: ${scheme.shape.corner.medium};
}
.scroll-view{
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 0;
  max-height: -webkit-fill-available;
  max-height: -moz-available;
  max-height: stretch;
}
.search{
  position: relative;
  height: 48px;
  flex-shrink: 0;
}
input{
  position: absolute;
  inset: 0;
  border: none;
  width: 100%;
  height: 100%;
  background: none;
  line-height: 1;
  padding: 0 16px;
  font-size: calc(var(--s-font-size, 1) * 14px);
  font-family: inherit;
  border-bottom: solid var(--s-border-min, 1px) var(--s-color-outline-variant);
  &:focus-visible{
    outline: none;
  }
}
::slotted(:is(.icon, svg, s-icon, s-loading, s-spinner, ms-icon)){
  width: 20px;
  height: 20px;
  font-size: 20px;
  align-self: center;
  color: ${scheme.color.onSurfaceVariant};
}
::slotted(:is(.icon, svg, s-icon, s-loading, s-spinner, ms-icon)[slot=start]){
  margin-left: 12px;
  margin-right: -6px;
}
::slotted(:is(.icon, svg, s-icon, s-loading, s-spinner, ms-icon)[slot=end]){
  margin-left: -6px;
  margin-right: 12px;
}
:host([hover]){
  .field-set::part(focused-line){
    opacity: 1;
  }
}
:host([searchable]) .search{
  display: block;
}
:host([variant=text]){
  color: ${scheme.color.primary};
  .field-set{
    --s-field-set-border-width: 0px;
    --s-field-set-border-width-focused: 0px;
    &[focused]{
      background: ${scheme.color.secondaryContainer};
    }
    &:not([floating]) .label{
      display: none;
    }
  }
  .label{
    font-size: inherit;
    color: inherit;
    margin-left: calc((var(--s_field-set-legend-left) + var(--s_field-set-border-top-right-radius)) * -1 + var(--s_field-set-padding-left));
    margin-right: calc((var(--s_field-set-legend-right) + var(--s_field-set-border-top-left-radius)) * -1 + var(--s_field-set-padding-right));
    transform: translateY(0);
  }
  svg{
    fill: currentColor;
  }
}
`

const itemStyle = /*css*/`
:host{
  display: flex;
  padding: 0 16px;
  align-items: center;
  height: 40px;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  white-space: nowrap;
  font-weight: 500;
  color: ${scheme.color.onSurfaceVariant};
  transition-timing-function: ${scheme.motion.easing.standard};
  transition-duration: ${scheme.motion.duration.short4};
}
:host([selected]){
  background: ${scheme.color.secondaryContainer};
  color: ${scheme.color.onSecondaryContainer};
}
:host([preferred]){
  order: -1;
}
.text{
  overflow: hidden;
  overflow: clip visible;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  border-radius: 0;
  line-height: 1;
}
::slotted(:is(.icon, svg, s-icon, s-loading, s-spinner, ms-icon)){
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: ${scheme.color.onSurfaceVariant};
}
`

const template = /*html*/`
<s-field-set class="field-set" floating>
  <div slot="legend" class="label" part="label">
    <span></span>
  </div>
  <slot name="start" slot="start"></slot>
  <div slot="body" class="layout" part="layout">
    <div class="text" part="text"></div>
  </div>
  <slot name="end" slot="end">
    <svg viewBox="0 -960 960 960"><path d="M480-360 280-560h400L480-360Z"></path></svg>
  </slot>
  <s-ripple class="ripple" part="ripple"></s-ripple>
</s-field-set>
<dialog class="popover" part="popover">
  <div class="container" part="container">
    <div class="search hide" part="search">
      <input type="text" name="search" autocomplete="off" />
    </div>
    <div class="scroll-view" part="scroll-view">
      <slot></slot>
    </div>
  </div>
</dialog>
`

const itemTemplate = /*html*/`
<slot name="start"></slot>
<div slot="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple></s-ripple>
`

export class Picker extends useElement({
  style, props, template,
  states: ['formable', 'hoverable', 'focusable'],
  setup(shadowRoot, info) {
    const fieldSet = shadowRoot.querySelector<FieldSet>('.field-set')!
    const slot = shadowRoot.querySelector<HTMLSlotElement>('slot:not([name])')!
    const label = shadowRoot.querySelector<HTMLDivElement>('.label>span')!
    const text = shadowRoot.querySelector<HTMLDivElement>('.text')!
    const popover = shadowRoot.querySelector<HTMLDialogElement>('.popover')!
    const container = shadowRoot.querySelector<HTMLDivElement>('.container')!
    const search = shadowRoot.querySelector<HTMLInputElement>('input')!
    const computedStyle = useComputedStyle(this)
    const popup = new Popup(this, popover, container)
    const getAnimateOptions = () => {
      const easing = computedStyle.getValue('transition-timing-function')
      const duration = computedStyle.getDuration('transition-duration')
      return { easing, duration }
    }
    const selector = new Selector(this, slot, PickerItem)
    const render = () => {
      const value = selector.selectedItems.map((item) => item.text).join('/')
      fieldSet.floating = value === ''
      text.textContent = value
    }
    selector.onValueChange = () => info.internals.setFormValue(selector.getFormData())
    selector.onRender = render
    const onSearch = () => {
      if (selector.items.length === 0) return
      selector.items.forEach((item) => item.toggleAttribute('preferred', item.text.includes(search.value)))
    }
    search.oninput = onSearch
    this.addEventListener(`${name}:text-changed`, () => {
      if (selector.selectedItems.length === 0) return
      render()
    })
    this.addEventListener('click', () => {
      if (popover.open) return
      fieldSet.focused = true
      popup.onUpdate = () => {
        container.style.minWidth = `${this.offsetWidth}px`
        if (['left', 'right'].includes(this.placement)) container.style.removeProperty('min-width')
      }
      selector.onChange = () => {
        if (this.multiple) return
        popup.close()
      }
      popup.onClose = () => fieldSet.focused = false
      popup.open(this, this.placement, computedStyle.getNumber('gap'), getAnimateOptions())
    })
    return {
      expose: {
        get items() {
          return selector.items
        },
        get selectedItems() {
          return selector.selectedItems
        },
        get selectedIndex() {
          return selector.selectedIndex
        },
        get selectedIndexes() {
          return selector.selectedIndexes
        },
        get value() {
          return selector.value
        }
      },
      onFormReset: () => this.value = this.defaultValue,
      value: (v) => selector.value = v,
      label: (v) => label.textContent = v,
      searchPlaceholder: (v) => search.placeholder = v,
      searchable: () => {
        search.value = ''
        onSearch()
      },
    }
  }
}) { }

export class PickerItem extends useElement({
  style: itemStyle,
  props: itemProps,
  template: itemTemplate,
  states: ['focusable'],
  setup(shadowRoot) {
    this.addEventListener('click', () => this.dispatchEvent(new Event(`${name}:change`, { bubbles: true })))
    return {
      text: () => this.dispatchEvent(new Event(`${name}:text-changed`, { bubbles: true })),
      selected: () => this.dispatchEvent(new Event(`${name}:selected`, { bubbles: true })),
      value: (_, old) => this.dispatchEvent(new CustomEvent(`${name}:valued`, { bubbles: true, detail: { old } })),
      disabled: () => this.dispatchEvent(new Event(`${name}:disabled`, { bubbles: true }))
    }
  }
}) { }

const name = Picker.define('s-picker')
const itemName = PickerItem.define('s-picker-item')

declare global {
  interface HTMLElementTagNameMap {
    [name]: Picker
    [itemName]: PickerItem
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        //@ts-ignore
        [name]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Partial<typeof props.values>
        //@ts-ignore
        [itemName]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Partial<typeof itemProps.values>
      }
    }
  }
}

//@ts-ignore
declare module 'vue' {
  //@ts-ignore
  import { HTMLAttributes } from 'vue'
  interface GlobalComponents {
    [name]: new () => {
      /**
      * @deprecated
      **/
      $props: HTMLAttributes & Partial<typeof props.values>
    } & Picker
    [itemName]: new () => {
      /**
      * @deprecated
      **/
      $props: HTMLAttributes & Partial<typeof itemProps.values>
    } & PickerItem
  }
}
//@ts-ignore
declare module 'vue/jsx-runtime' {
  namespace JSX {
    export interface IntrinsicElements {
      //@ts-ignore
      [name]: IntrinsicElements['div'] & Partial<typeof props.values>
      //@ts-ignore
      [itemName]: IntrinsicElements['div'] & Partial<typeof itemProps.values>
    }
  }
}

//@ts-ignore
declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      //@ts-ignore
      [name]: JSX.HTMLAttributes<HTMLElement> & Partial<typeof props.values>
      //@ts-ignore
      [itemName]: JSX.HTMLAttributes<HTMLElement> & Partial<typeof itemProps.values>
    }
  }
}

//@ts-ignore
declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      //@ts-ignore
      [name]: JSXInternal.HTMLAttributes<HTMLElement> & Partial<typeof props.values>
      //@ts-ignore
      [itemName]: JSXInternal.HTMLAttributes<HTMLElement> & Partial<typeof itemProps.values>
    }
  }
}