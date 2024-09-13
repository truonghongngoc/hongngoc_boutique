/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import qs from 'qs'
import { deleteKeyNotValue } from '@src/utlis/deleteKeyNotValue'
import { TRouterQuery } from '@src/routers/types'

class Path {
  path: string
  constructor(path: string) {
    this.path = path
  }

  setParams(params: TRouterQuery) {
    let newPath = this.path

    const newParams: any = deleteKeyNotValue(params)

    Object.keys(newParams).forEach(key => {
      const value = newParams[key]

      newPath = this.path.replace(`:${key}`, value)
    })

    return new Path(newPath)
  }

  setQuery(query: TRouterQuery) {
    let newPath = this.path

    const queryString = qs.stringify(query, { arrayFormat: 'indices' })

    if (queryString) {
      newPath = this.path + '?' + queryString
    }

    return new Path(newPath)
  }
}

export const pathname = {
  home: new Path('/'),
  login: new Path('/login'),
  register: new Path('/register'),
  verify: new Path('/verify'),
}
