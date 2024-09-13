export function calcWeight(values: number[], index: number) {
  const total = values.reduce((a, b) => a + Number(b), 0)

  let count = 0
  let result = 0
  for (let i = 0; i < values.length; i++) {
    if (i === index && index === values.length - 1) {
      result = 100 - count
      break
    }

    const value = values[i]

    const weight = +Number((value / total) * 100).toFixed(0)

    count += weight

    if (index === i) {
      result = weight
      break
    }
  }
  return result
}
