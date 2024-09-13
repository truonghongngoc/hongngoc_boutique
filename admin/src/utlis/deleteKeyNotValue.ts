// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function deleteKeyNotValue(object: any) {
  Object.keys(object).forEach(key => {
    if (!object[key] && object[key] !== 0 && object[key] !== false) {
      delete object[key]
    }
  })
  return object
}
