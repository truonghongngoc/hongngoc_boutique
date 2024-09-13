import { useSearchParams, useParams } from 'react-router-dom'
import { deleteKeyNotValue } from '@src/utlis/deleteKeyNotValue'
import { TRouterQuery } from '@src/routers/types'

interface IUseQuery {
  query: TRouterQuery
  update: (value: TRouterQuery) => void
}

export const useQuery = (): IUseQuery => {
  const { id } = useParams()

  const [searchParams, setSearchParams] = useSearchParams()

  const query: TRouterQuery = {
    id: id ? Number(id) : undefined,
    token: searchParams.get('token') as string,
  }

  function update(value: TRouterQuery) {
    setSearchParams(
      deleteKeyNotValue({
        ...query,
        ...value,
      }),
    )
  }

  return {
    query,
    update,
  }
}
