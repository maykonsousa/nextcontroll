import React, { useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
  useDisclosure,
  ModalProps
  
} from "@chakra-ui/react"
import { FormContainer } from './form/FormContainer'
import {NextInput} from './form/Input'

export const NewUserModal = ({isOpen, onClose, children} : ModalProps ) => {
  const [name, setName] = useState()
  

  return (
    <Modal isOpen={isOpen} onClose={onClose}
    
    >
        <ModalOverlay  />
        <ModalContent bg="gray.800">
          <ModalHeader
            color="gray.50"
          >
            Cadastrar Novo Usuário
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormContainer stackSpacing="2">
              <NextInput name="name" type="text" placeholder="Nome e Sobrenome" />
              <NextInput name="ocupation" type="text" placeholder="Profissão" />
              <NextInput name="email" type="text" placeholder="email" />
            </FormContainer>
          </ModalBody>

          <ModalFooter>
            <HStack>
            <Button colorScheme="yellow"size="lg" type="submit">Salvar</Button>
            <Button colorScheme="whiteAlpha" size="lg" type="button" onClick={onClose}>Fechar</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}


