export function roundPrice(value: number) {
  return +Number(value / 100).toFixed(0) * 100
}
