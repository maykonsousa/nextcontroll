import Head from 'next/head'
import {Flex, Button, Image, Link} from '@chakra-ui/react'
import { FormContainer } from '../components/form/FormContainer'
import { NextInput  } from '../components/form/Input'


export default function SignIn() {
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
        <NextInput type="email" placeholder="E-mail" name="email"/> 
        <NextInput type="password" placeholder="Senha"name="password"/> 
        <Button colorScheme="yellow"size="lg"type="submit">Entrar</Button>
        <Link>Registrar</Link>
      </FormContainer>
    </Flex>
    </>
    
  )
}
