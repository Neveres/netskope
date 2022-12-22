export const KEY = 'details'

export const getItem = (key: Parameters<typeof localStorage.getItem>[0]) =>
  localStorage.getItem(key) as string

export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value)
}
