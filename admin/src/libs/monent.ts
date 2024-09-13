import moment from 'moment'

export const formatDate = (value?: string) => {
  return moment(value).format('DD/MM/YYYY')
}
