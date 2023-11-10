export const filterArrayByValue = <T extends object>(
  array: T[],
  key: keyof T,
  value: T[keyof T]
): T[] => {
  if (!array) return []

  return array.filter((elem) => {
    if (Array.isArray(elem[key])) {
      const casted = elem[key] as Array<string>

      return casted.includes(String(value))
    }
    return elem[key] === value
  })
}
