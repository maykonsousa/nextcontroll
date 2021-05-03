import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
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
  Flex,
  Stack,
  ModalProps
  
} from "@chakra-ui/react"
import {NextInput} from '../form/Input'
import { api } from '../../api/api'
import Swal from 'sweetalert2'
import { globalContext } from '../../api/context/globalContext'


interface ValuesProps{
  name:string;
  email:string;
  profession:string;
  password:"12345678";
  aplication:"NextControll";
  
}

export const NewUserModal = ({isOpen, onClose, children} : ModalProps ) => {
 const {handleSubmit, register } = useForm()
 const {refreshLista, setRefreshLista}= useContext(globalContext)


 const createNewUser=(values:ValuesProps)=>{
    api.post('users', {
      name:values.name,
      email:values.email,
      profession:values.profession,
      password:"12345678",
      aplication:"NextControll",
    } )
    .then(()=>onClose())
    .then(()=>Swal.fire('Usuário cadastrado com sucesso!','', 'success'))
    .then(()=>setRefreshLista(!refreshLista))
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent bg="gray.800">
          <ModalHeader
            color="gray.50"
          >
            Cadastrar Novo Usuário
          </ModalHeader>
          <ModalCloseButton />
          
          <Flex 
            as="form"
            w="100%"
            p="8"
           
            bg="gray.800"
            align="center"
            justify="center"
            display="flex"
            flexDirection="column"
            borderRadius={8}
            onSubmit={handleSubmit(createNewUser)}
    >
          <ModalBody>
          <Stack spacing="4">
              <NextInput name="name" type="text" placeholder="Nome e Sobrenome"  {...register('name')} />
              <NextInput name="profession" type="text" placeholder="Profissão"  {...register('profession')} />
              <NextInput name="email" type="text" placeholder="email"  {...register('email')} />
          </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack>
            <Button colorScheme="yellow"size="lg" type="submit">Salvar</Button>
            <Button colorScheme="whiteAlpha" size="lg" type="button" onClick={onClose}>Fechar</Button>
            </HStack>
          </ModalFooter>
        </Flex>
                  
        </ModalContent>
      </Modal>
  )
}

