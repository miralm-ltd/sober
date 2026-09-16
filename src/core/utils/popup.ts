import { ResizeWatcher } from './resize-watcher'
import { getStackingContext } from './get-stacking-context.js'

type Placement = 'top' | 'bottom' | 'left' | 'right'

const showPopover = (anchor: HTMLElement, container: HTMLElement, placement: Placement, margin: number) => {
  const config = { top: 0, left: 0, origin: ['50%', '0%'] as string[] }
  const rect = anchor.getBoundingClientRect()
  const containerRect = { width: container.offsetWidth, height: container.offsetHeight }
  const getSide = (leftOrTop: number, size: number, containerSize: number, innerSize: number) => {
    const offset = leftOrTop + (size / 2)
    const center = leftOrTop - (containerSize - size) / 2
    return { offset, center, min: 0, max: innerSize, containerSize }
  }
  const attrs = {
    x: { inset: 'left', originKey: 0, selfSide: getSide(rect.left, rect.width, containerRect.width, innerWidth) },
    y: { inset: 'top', originKey: 1, selfSide: getSide(rect.top, rect.height, containerRect.height, innerHeight) }
  } as const
  const calls = {
    bottom: () => {
      const position = rect.bottom + margin
      const overflowed = position + containerRect.height > innerHeight
      const overflowPosition = innerHeight - containerRect.height
      const overflow = { position: overflowPosition, center: (rect.top + (rect.height / 2)) - overflowPosition }
      return { position, overflowed, overflow, origin: '0%', ...attrs.y, reverse: 'top', side: attrs.x } as const
    },
    top: () => {
      const position = rect.top - margin - containerRect.height
      const overflowed = position < 0
      const overflow = { position: 0, center: rect.top + (rect.height / 2) }
      return { position, overflowed, overflow, origin: '100%', ...attrs.y, reverse: 'bottom', side: attrs.x } as const
    },
    left: () => {
      const position = rect.left - margin - containerRect.width
      const overflowed = position < 0
      const overflow = { position: 0, center: rect.left + (rect.width / 2) }
      return { position, overflowed, overflow, origin: '100%', ...attrs.x, reverse: 'right', side: attrs.y } as const
    },
    right: () => {
      const position = rect.right + margin
      const overflowed = position + containerRect.width > innerWidth
      const overflowPosition = innerWidth - containerRect.width
      const overflow = { position: overflowPosition, center: (rect.left + (rect.width / 2)) - overflowPosition }
      return { position, overflowed, overflow, origin: '0%', ...attrs.x, reverse: 'left', side: attrs.y } as const
    }
  }
  const option = calls[placement]()
  config[option.inset] = option.position
  config.origin[option.originKey] = option.origin
  if (option.overflowed) {
    const option2 = calls[option.reverse]()
    if (!option2.overflowed) {
      config[option2.inset] = option2.position
      config.origin[option2.originKey] = option2.origin
    } else {
      config[option.inset] = option.overflow.position
      config.origin[option.originKey] = `${option.overflow.center}px`
    }
  }
  config[option.side.inset] = option.side.selfSide.center
  config.origin[option.side.originKey] = '50%'
  if (config[option.side.inset] < option.side.selfSide.min) {
    config[option.side.inset] = option.side.selfSide.min
    config.origin[option.side.originKey] = `${option.side.selfSide.offset}px`
  }
  if (config[option.side.inset] + option.side.selfSide.containerSize > option.side.selfSide.max) {
    config[option.side.inset] = option.side.selfSide.max - option.side.selfSide.containerSize
    config.origin[option.side.originKey] = `${option.side.selfSide.offset - config[option.side.inset]}px`
  }
  container.style.left = `${config.left}px`
  container.style.top = `${config.top}px`
  container.style.transformOrigin = config.origin.join(' ')
}

export class Popup {
  declare onUpdate?: () => void
  declare onUpdated?: () => void
  declare onClose?: () => void
  declare onClosed?: () => void
  private focusElement?: HTMLElement
  private resizer?: ResizeWatcher
  private animete?: { easing: string, duration: number }
  private closeCallback?: () => void
  constructor(private root: HTMLElement, private popover: HTMLElement, private container: HTMLElement) { }
  getRootDocument() {
    const rootNode = this.root.getRootNode()
    return rootNode instanceof ShadowRoot ? rootNode : document
  }
  async open(anchor: HTMLElement, placement: Placement, margin: number, animete?: { easing: string, duration: number }) {
    this.animete = animete
    const focus = this.getRootDocument().querySelector(':focus-visible')
    this.focusElement = focus instanceof HTMLElement ? focus : undefined
    this.resizer = new ResizeWatcher(anchor, this.container)
    if (this.popover instanceof HTMLDialogElement) {
      this.popover.showModal()
    } else if (typeof this.popover.showPopover === 'function') {
      this.popover.showPopover()
    } else {
      const rootNode = this.popover.getRootNode()
      if (rootNode instanceof Document || rootNode instanceof ShadowRoot) {
        const rect = getStackingContext(rootNode)
        this.popover.style.marginLeft = `${-rect.left}px`
        this.popover.style.marginTop = `${-rect.top}px`
        this.popover.style.maxWidth = `${innerWidth}px`
        this.popover.style.maxHeight = `${innerHeight}px`
      }
    }
    this.popover.classList.add('open')
    this.popover.focus()
    this.resizer.onChange = () => {
      this.onUpdate?.()
      showPopover(anchor, this.container, placement, margin)
      this.onUpdated?.()
    }
    this.closeCallback = () => this.close()
    window.addEventListener('resize', this.closeCallback)
    this.resizer.onChange()
    this.resizer.run()
    this.container.onpointerdown = (e) => e.stopPropagation()
    this.popover.onpointerdown = this.popover.onclose = this.closeCallback
    if (animete) await this.container.animate({ opacity: [0, 1], transform: ['scale(.8)', 'scale(1)'] }, animete).finished
  }
  async close() {
    if (!this.resizer) return
    this.resizer.stop()
    window.removeEventListener('resize', this.closeCallback!)
    this.onClose?.()
    if (this.animete) await this.container.animate({ opacity: [1, 0], transform: ['scale(1)', 'scale(.8)'] }, this.animete).finished
    if (this.popover instanceof HTMLDialogElement) this.popover.close()
    if (!(this.popover instanceof HTMLDialogElement) && this.popover.hidePopover) this.popover.hidePopover()
    this.container.style.removeProperty('left')
    this.container.style.removeProperty('top')
    this.container.style.removeProperty('transform-origin')
    this.container.style.removeProperty('margin-top')
    this.container.style.removeProperty('max-width')
    this.container.style.removeProperty('max-height')
    this.popover.style.removeProperty('margin-left')
    const rootNode = this.getRootDocument()
    if (this.focusElement) {
      this.focusElement.focus()
    } else if (rootNode.activeElement instanceof HTMLElement) {
      rootNode.activeElement.blur()
    }
    this.popover.classList.remove('open')
    this.onClosed?.()
  }
}