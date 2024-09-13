import numeral from 'numeral'
import moment from 'moment'

export function formatMoney(value?: number): string {
  if (!!value || value === 0) return numeral(value).format('0,0')
  return '--'
}

export function formatWeight(value: number): string {
  return numeral(value).format('0,0')
}

export function formatPrice(value: number): string {
  return numeral(value).format('0,0.00')
}

export function formatVolume(value?: number): string {
  if (!!value || value === 0) return numeral(value).format('0,0')
  return '--'
}

export function formatRatioPrice(newPrice: number, priceOld: number): string {
  let value = newPrice / priceOld

  if (value > 1) {
    value = value - 1
  } else {
    value = -(1 - value)
  }

  return numeral(Math.ceil(value * 100) / 100).format('0.00')
}

export function formatRatio(value: number): string {
  return numeral(Math.ceil(value * 100) / 100).format('0.00')
}

export function formatTime(value: number) {
  const hour = Math.floor(value / 60)
  const minute = value % 60

  return moment()
    .set({
      hour,
      minute,
    })
    .format('LT')
}

export function checkIsNumber(value?: number) {
  if (value === 0 || !!value) {
    return true
  }
  return false
}
export function formatRange(min?: number, max?: number) {
  if (checkIsNumber(min) && !checkIsNumber(max)) {
    return 'Lớn hơn ' + formatMoney(min ?? 0)
  }
  if (!checkIsNumber(min) && checkIsNumber(max)) {
    return 'Nhỏ hơn ' + formatMoney(max ?? 0)
  }
  if (checkIsNumber(min) && checkIsNumber(max)) {
    return `${formatMoney(min ?? 0)}~${formatMoney(max ?? 0)}`
  }
  return '--'
}
