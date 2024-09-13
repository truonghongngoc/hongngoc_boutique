import { useEffect, useState } from 'react'

interface IUseFormProps {
  rowKeys: number[]
  selectedRowKeys?: number[]
  onChange?: (selectedRowKeys: number[]) => void
}

export const useTable = ({
  rowKeys,
  onChange = () => {},
  selectedRowKeys,
}: IUseFormProps) => {
  const [formValues, setFormValues] = useState<number[]>(selectedRowKeys ?? [])

  useEffect(() => {
    if (
      selectedRowKeys !== undefined &&
      selectedRowKeys.toString() !== formValues.toString()
    ) {
      setFormValues(selectedRowKeys)
    }
  }, [selectedRowKeys, formValues])

  function handleSelect(rowKey: number) {
    const newFormValues = formValues.slice()
    const indexKey = newFormValues.findIndex(item => item === rowKey)

    if (indexKey >= 0) {
      newFormValues.splice(indexKey, 1)
    } else {
      newFormValues.push(rowKey)
    }
    setFormValues(newFormValues)

    onChange(newFormValues)
  }

  const allChecked =
    rowKeys.length &&
    formValues.filter(key => rowKeys.includes(key)).length === rowKeys.length
  const isIndeterminate =
    !allChecked && rowKeys.find(key => formValues.includes(key))

  function handleSelectAll() {
    let newFormValues = formValues.slice()
    if (allChecked) {
      newFormValues = []
    } else {
      rowKeys.forEach(key => {
        if (!formValues.includes(key)) {
          newFormValues.push(key)
        }
      })
    }

    setFormValues(newFormValues)
    onChange(newFormValues)
  }

  return {
    formValues,
    handleSelect,
    handleSelectAll,
    allChecked: !!allChecked,
    isIndeterminate: !!isIndeterminate,
  }
}
