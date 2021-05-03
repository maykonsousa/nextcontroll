import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link'

import {Flex, Button, Image, Text, Stack, Heading} from '@chakra-ui/react'
import { NextInput  } from '../components/form/Input'
import {useForm} from 'react-hook-form'
import { api } from '../api/api'
import { useContext } from 'react'
import { globalContext } from '../api/context/globalContext'

interface FormProps {
  name:string;
  email:string;
  profession:string;
  password:string;
  confirmPassword: string;
  aplication:"NextControll"

}

   const  Cadastro=()=> {
     const {handleSubmit, register, formState} = useForm();
     const {errors} = formState
     const {setLogeduser, setRefreshLista, refreshLista} = useContext(globalContext)

     const registerNewUser = (values:FormProps)=>{
       
       api.post('users', {
        name:values.name,
        email:values.email,
        profession:values.profession,
        password:values.password,
        aplication:"NextControll"
       }).then(response=>setLogeduser(response.data)).then(()=>setRefreshLista(!refreshLista)).then(()=>Router.push('/'))
     }
  return (
    <>
    <Head><title>Next Controll | Login</title></Head>
    <Flex 
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      display="flex"
      flexDirection="column"
    >
       <Image 
       src="images/logo.svg" 
       width={360}
       mb="8"
       /> 
      <Flex 
      as="form"
      w="100%"
      p="8"
      maxWidth={360}
      bg="gray.800"
      align="center"
      justify="center"
      display="flex"
      flexDirection="column"
      borderRadius={8}
      onSubmit={handleSubmit(registerNewUser)}
      
    >
      <Heading fontSize="2xl" mb="4">faça o seu cadastro</Heading>
      <Stack spacing="4">
        <NextInput type="text" placeholder="Nome e Sobrenome" name="name" {...register('name')} /> 
        <NextInput type="text" placeholder="Profissão" name="profession" {...register('profession')} /> 
        <NextInput type="email" placeholder="E-mail" name="email" {...register('email')}/> 
        <NextInput type="password" placeholder="Senha"name="password" {...register('password')}/> 
        <NextInput type="password" placeholder="Confirme sua senha"name="confirmPassword" {...register('confirmPassword')}/> 
        <Button colorScheme="yellow"size="lg"type="submit">Entrar</Button>

      </Stack>
 
        
       

        
        <Link href="/">Já tenho Cadastro</Link>
        </Flex>
    </Flex>
    </>
    
  )
}
export default Cadastro