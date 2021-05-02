import Head from 'next/head'
import {Flex, Button, Image, Link, Text} from '@chakra-ui/react'
import { FormContainer } from '../components/form/FormContainer'
import { NextInput  } from '../components/form/Input'


   const  Cadastro=()=> {
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
      <FormContainer stackSpacing="4">
        <Text>faça o seu cadastro</Text>
        <NextInput type="text" placeholder="Nome e Sobrenome" name="name"/> 
        <NextInput type="text" placeholder="Profissão" name="profissão"/> 
        <NextInput type="email" placeholder="E-mail" name="email"/> 
        <NextInput type="password" placeholder="Senha"name="password"/> 
        <NextInput type="password" placeholder="Confirme sua senha"name="password"/> 

        <Button colorScheme="yellow"size="lg"type="submit">Entrar</Button>
        <Link>Já tenho Cadstro</Link>
      </FormContainer>
    </Flex>
    </>
    
  )
}
export default Cadastro