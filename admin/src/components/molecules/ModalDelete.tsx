import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  Button,
} from '@chakra-ui/react'
import React from 'react'

interface IModalSelectUnitProps extends Omit<ModalProps, 'children'> {
  onDelete?: (id?: string) => void
  onCancel?: () => void
  title?: string
  isLoading?: boolean
}

export const ModalDelete: React.FC<IModalSelectUnitProps> = props => {
  const { onDelete = () => {}, onCancel, title, isLoading, ...rest } = props

  function handleDelete(e: { preventDefault: () => void }) {
    e.preventDefault()
    onDelete()
  }

  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent mx={{ base: 6, lg: 0 }}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize={'xs'} fontWeight={'bold'} lineHeight={6}>
            Are you sure you want to delete it?
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            bgColor={'gray.300'}
            mr={'16px'}
            px={4}
            py={'9px'}
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            bgColor={'red.500'}
            isLoading={isLoading}
            px={4}
            py={'9px'}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
