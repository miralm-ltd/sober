import { useProps, useElement, focusKeydownClick } from '../core/elements.js'
import * as scheme from '../core/scheme.js'
import { buttonStyle } from '../core/style/button.js'
import './ripple.js'

const props = useProps({
  variant: ['filled', 'elevated', 'tonal', 'outlined'],
  size: ['small', 'extra-small', 'medium', 'large', 'extra-large']
})
const actionProps = useProps({
  disabled: false
})
const triggerProps = useProps({
  disabled: false,
  checked: false
})
const style = /*css*/`
:host{
  display: inline-flex;
  vertical-align: middle;
  gap: 2px;
  height: 40px;
  border-radius: 20px;
  font-size: calc(var(--s-font-size, 1) * 14px);
}
.layout{
  display: contents;
  border-radius: inherit;
}
:host(:not([variant])){
  ::slotted(s-split-button-action),
  ::slotted(s-split-button-trigger){
    background-color: ${scheme.color.primary};
    color: ${scheme.color.onPrimary};
    outline-color: ${scheme.color.primary};
  }
}
:host([variant=elevated]){
  ::slotted(s-split-button-action),
  ::slotted(s-split-button-trigger){
    color: ${scheme.color.primary};
    background: ${scheme.color.surfaceContainerLow};
    box-shadow: ${scheme.elevation.level1};
  }
}
:host([variant=tonal]){
  ::slotted(s-split-button-action),
  ::slotted(s-split-button-trigger){
    color: ${scheme.color.onSecondaryContainer};
    background: ${scheme.color.secondaryContainer};
  }
}
:host([variant=outlined]){
  ::slotted(s-split-button-action),
  ::slotted(s-split-button-trigger){
    color: ${scheme.color.onSurfaceVariant};
    &::before{
      content: '';
      position: absolute;
      pointer-events: none;
      inset: 0;
      border: solid var(--s-border-min, 1px) ${scheme.color.outlineVariant};
      border-radius: inherit;
    }
  }
}/**Size**/
:host([size=extra-small]){
  height: 32px;
  border-radius: 16px;
  font-size: calc(var(--s-font-size, 1) * 12px);
  .layout{
    --s_split-button-icon-size: 16px;
  }
  ::slotted(s-split-button-action){
    padding: 0 10px 0 12px;
    gap: 4px;
  }
  ::slotted(s-split-button-action:is([pressed], [hover])){
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  ::slotted(s-split-button-trigger:is([pressed], [hover]):not([checked])){
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
}
:host([size=medium]){
  height: 56px;
  border-radius: 28px;
  font-size: calc(var(--s-font-size, 1) * 16px);
  .layout{
    --s_split-button-icon-size: 24px;
  }
  ::slotted(s-split-button-action){
    padding: 0 24px;
  }
}
:host([size=large]){
  height: 96px;
  border-radius: 48px;
  font-size: calc(var(--s-font-size, 1) * 26px);
  .layout{
    --s_split-button-icon-size: 32px;
  }
  ::slotted(s-split-button-action){
    padding: 0 48px;
    gap: 12px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  ::slotted(s-split-button-trigger:not([checked])){
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  ::slotted(s-split-button-action:is([pressed], [hover])){
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  ::slotted(s-split-button-trigger:is([pressed], [hover]):not([checked])){
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}
:host([size=extra-large]){
  height: 136px;
  border-radius: 68px;
  font-size: calc(var(--s-font-size, 1) * 32px);
  .layout{
    --s_split-button-icon-size: 40px;
  }
  ::slotted(s-split-button-action){
    padding: 0 64px;
    gap: 16px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  ::slotted(s-split-button-trigger:not([checked])){
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  ::slotted(s-split-button-action:is([pressed], [hover])){
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  ::slotted(s-split-button-trigger:is([pressed], [hover]):not([checked])){
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}
`

const actionStyle = /*css*/`
:host{
  height: 100%;
  font-size: inherit;
  gap: 8px;
  padding: 0px 12px 0px 16px;
  border-radius: 4px;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
:host(:is([pressed], [hover])){
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
::slotted(:is(.icon, svg, s-icon, s-loading, s-spinner, ms-icon)){
  width: var(--s_split-button-icon-size, 20px);
  height: var(--s_split-button-icon-size, 20px);
  font-size: var(--s_split-button-icon-size, 20px);
}
`

const triggerStyle = /*css*/`
:host{
  height: 100%;
  border-radius: 4px;
  aspect-ratio: 1;
  -webkit-aspect-ratio: 1;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
}
:host(:is([pressed], [hover])){
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
svg,
::slotted(:is(.icon, svg, s-icon, ms-icon)){
  width: var(--s_split-button-icon-size, 20px);
  height: var(--s_split-button-icon-size, 20px);
  font-size: var(--s_split-button-icon-size, 20px);
}
:host([checked]){
  border-radius: 50%;
  svg,
  ::slotted(:is(.icon, svg, s-icon, ms-icon)[slot=icon]){
    transform: rotate(-180deg);
  }
}
`

const template = /*html*/`
<div class="layout" part="layout">
  <slot></slot>
</div>
`
const actionTemplate = /*html*/`
<slot name="start"></slot>
<div class="text" part="text">
  <slot></slot>
</div>
<slot name="end"></slot>
<s-ripple></s-ripple>
`
const triggerTemplate = /*html*/`
<slot name="icon">
  <svg viewBox="0 -960 960 960"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"></path></svg>
</slot>
<slot></slot>
<s-ripple></s-ripple>
`

export class SplitButton extends useElement({
  props, template, style
}) { }

export class SplitButtonAction extends useElement({
  style: [buttonStyle, actionStyle],
  props: actionProps,
  states: ['focusable'],
  template: actionTemplate
}) { }

export class SplitButtonTrigger extends useElement({
  style: [buttonStyle, triggerStyle],
  props: triggerProps,
  states: ['focusable'],
  template: triggerTemplate,
  setup() {
    this.addEventListener('click', () => {
      this.checked = !this.checked
      this.dispatchEvent(new Event('change'))
    })
  }
}) { }

const name = SplitButton.define('s-split-button')
const actionName = SplitButtonAction.define('s-split-button-action')
const triggerName = SplitButtonTrigger.define('s-split-button-trigger')

declare global {
  interface HTMLElementTagNameMap {
    [name]: SplitButton
    [actionName]: SplitButtonAction
    [triggerName]: SplitButtonTrigger
  }
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        //@ts-ignore
        [name]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Partial<typeof props.values>
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
    } & SplitButton
  }
}
//@ts-ignore
declare module 'vue/jsx-runtime' {
  namespace JSX {
    export interface IntrinsicElements {
      //@ts-ignore
      [name]: IntrinsicElements['div'] & Partial<typeof props.values>
    }
  }
}

//@ts-ignore
declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      //@ts-ignore
      [name]: JSX.HTMLAttributes<HTMLElement> & Partial<typeof props.values>
    }
  }
}

//@ts-ignore
declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      //@ts-ignore
      [name]: JSXInternal.HTMLAttributes<HTMLElement> & Partial<typeof props.values>
    }
  }
}