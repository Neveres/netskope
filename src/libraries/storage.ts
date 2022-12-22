export const KEY = 'details'

export const getItem = (key: Parameters<typeof localStorage.getItem>[0]) =>
  JSON.parse(localStorage.getItem(key) as string)

export const setItem = (
  key: string,
  value: Parameters<typeof JSON.stringify>[0],
) => {
  localStorage.setItem(key, JSON.stringify(value))
}
