import {Box, Flex, Heading, Button, Icon, useDisclosure, } from '@chakra-ui/react'
import Router from 'next/router'
import { FaUserPlus} from 'react-icons/fa';
import { NewUserModal } from '../components/Users/NewUserModal';
import { Header } from '../components/Header/Index'
import { UsersList } from '../components/Users/usersList';
import { Pagination } from '../components/Pagination';
import { useContext } from 'react';
import { globalContext } from '../api/context/globalContext';
import { isEmpty } from '../common/utils/functions/isEmpty';


  const Dashboard = ()=>{
    const {isOpen, onOpen, onClose} = useDisclosure()
    const {logedUser}  = useContext(globalContext)

   if(isEmpty(logedUser)){
     ()=>Router.push('/')
   }
  return(
    <Flex direction="column" h="100vh">
    <Header/>
    <Flex w="100%" my="10" maxWidth={1480} mx="auto"  >
      <Box
      flex="1"
      borderRadius="8"
      bg="gray.700"
      p="8"
      >
        <Flex mb="8" justify="space-between" align="center">
          <Heading size="lg" fontWeight="normal">Usuários</Heading>
          <Button 
            as="a"
            colorScheme="yellow"
            size="md"
            fontSize="md"
            leftIcon={<Icon as={FaUserPlus}/>}
            onClick={onOpen}
          >
            
              Criar Novo
          </Button>
        </Flex>
        <UsersList/>
        <Pagination/>
        <NewUserModal isOpen={isOpen} onClose={onClose} children   />
      </Box>
    </Flex>

    </Flex>
  )

}
export default Dashboard;
