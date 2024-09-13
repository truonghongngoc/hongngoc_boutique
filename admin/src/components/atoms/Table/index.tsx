import React, { useCallback, useMemo } from 'react'
import {
  Thead,
  Tr,
  Th,
  HTMLChakraProps,
  Tbody,
  Td,
  TableContainer,
  Table as TableChakra,
  Checkbox,
} from '@chakra-ui/react'
import { useTable } from '@src/components/atoms/Table/hooks'
import { NoData } from '@src/components/atoms/NoData'

export type TColumn<T> = {
  title: string | React.ReactNode
  render: (item: T, index: number) => React.ReactNode
  tdProps?: HTMLChakraProps<'td'>
  thProps?: HTMLChakraProps<'th'>
}

export type TTableProps<T> = {
  columns: TColumn<T>[]
  data: T[]
  selectedRowKeys?: number[]
  onChange?: (selectedRowKeys: number[]) => void
  isSelectAll?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Table: React.FC<TTableProps<any>> = props => {
  const { isSelectAll, selectedRowKeys, onChange, data, columns, ...rest } =
    props
  const rowKeys = useMemo(() => data.map(item => item.id), [data])
  const {
    handleSelect,
    formValues,
    handleSelectAll,
    allChecked,
    isIndeterminate,
  } = useTable({
    rowKeys,
    selectedRowKeys,
    onChange,
  })

  const isShowCheckbox = useCallback(
    (id: number | string) => rowKeys.includes(id),
    [rowKeys],
  )

  return (
    <TableContainer {...rest}>
      <TableChakra>
        <Thead>
          <Tr>
            <Th h={'45px'} p={2} textAlign="center" w={'45px'}>
              {isSelectAll && (
                <Checkbox
                  isChecked={allChecked}
                  isIndeterminate={isIndeterminate}
                  onChange={() => handleSelectAll()}
                />
              )}
            </Th>
            {columns.map((column, i) => (
              <Th
                key={i}
                p={2}
                textTransform={'capitalize'}
                {...column.thProps}
              >
                {column.title}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {!data.length && (
            <Tr>
              <Td colSpan={columns.length + 1}>
                <NoData />
              </Td>
            </Tr>
          )}
          {data?.map((item, index) => {
            return (
              <Tr key={index}>
                <Td p={2} textAlign={'center'}>
                  {isShowCheckbox(item.id) && (
                    <Checkbox
                      isChecked={formValues.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                    />
                  )}
                </Td>
                {columns.map((column, i) => (
                  <Td key={i} p={2} {...column.tdProps}>
                    {column.render(item, index)}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </TableChakra>
    </TableContainer>
  )
}
