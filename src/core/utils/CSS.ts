const duration = (value: string) => {
  if (value.endsWith('ms')) return Number(value.slice(0, -2))
  return Number(value.slice(0, -1)) * 1000
}

const number = (value: string) => Number(value.slice(0, -2))

export const useComputedStyle = (el: HTMLElement) => {
  const declaration = getComputedStyle(el)
  const getValue = (key: string) => declaration.getPropertyValue(key)
  const getNumber = (key: string) => number(getValue(key))
  const getVariable = <T extends string | number | boolean>(key: string, def: T, types?: string[]): T => {
    const cssVal = declaration.getPropertyValue(key)
    if (cssVal === '' || cssVal === 'none' || (types && !types.includes(cssVal))) return def
    if (typeof def === 'number') return Number(cssVal) as T
    if (typeof def === 'boolean') return (cssVal === 'true') as T
    return cssVal as T
  }
  return {
    getValue,
    getNumber,
    getVariable,
    getDuration(key: string) {
      const val = getValue(key)
      return val === '' ? 0 : duration(val)
    }
  }
}