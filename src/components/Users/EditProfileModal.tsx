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
  useDisclosure,
  Icon
  
} from "@chakra-ui/react"
import {NextInput} from '../form/Input'
import { api } from '../../api/api'
import Swal from 'sweetalert2'
import { globalContext } from '../../api/context/globalContext'
import { FaUserEdit, FaUserPlus } from 'react-icons/fa'


interface ValuesProps{
  name:string;
  email:string;
  profession:string;
  newPassword:string;
  aplication:"NextControll";
  
}

export const EditProfileModal = ( ) => {
 const {handleSubmit, register } = useForm()
 const {refreshLista, setRefreshLista, logedUser, setLogeduser}= useContext(globalContext)
const {onClose, onOpen, isOpen} = useDisclosure()
const {name, id, avatar, email, profession, password } =logedUser

 const createNewUser=(values:ValuesProps)=>{
    api.put(`users/${id}`, {
      name:values.name,
      email:values.email,
      profession:values.profession,
      password:values.newPassword,
      aplication:"NextControll",
    } )
    .then(()=>onClose())
    .then(()=>Swal.fire('Perfil Atualizado!','', 'success'))
    .then(()=>setRefreshLista(!refreshLista))
    
  }
  return (
    <>
    <Icon as={FaUserEdit} cursor="pointer" fontSize="20" onClick={onOpen} />
    
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
              <NextInput name="name" type="text" placeholder="Nome e Sobrenome" defaultValue={name}  {...register('name')} />
              <NextInput name="profession" type="text" placeholder="Profissão" defaultValue={profession} {...register('profession')} />
              <NextInput name="email" type="email" placeholder="E-mail" defaultValue={email}  {...register('email')} />
              <NextInput name="oldPassword" type="password" placeholder="Senha Atual"  {...register('oldPassword')} />
              <NextInput name="newPassword" type="password" placeholder="Nova Senha"  {...register('newPassword')} />
              <NextInput name="confirmNewPassword" type="password" placeholder="Repita a Nova Senha"  {...register('confirmNewPassword')} />
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
      </>
  )
}

