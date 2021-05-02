import {Box, Flex, Text, HStack, Heading, SimpleGrid, Button, Icon, Link, Image} from '@chakra-ui/react'
import { useContext } from 'react';
import { FaUserPlus, FaTrash, FaUserEdit } from 'react-icons/fa';
import { globalContext } from '../api/context/globalContext';
import { Header } from '../components/Header'
import { Pagination } from '../components/Pagination';
import {UserCard} from '../components/UserCard'


  const Dashboard = ()=>{
    const {users} = useContext(globalContext)
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
          >
            
              Criar Novo
          </Button>
        </Flex>
        <SimpleGrid
          spacing={2}
          minChildWidth="320px"
          column="auto"
          alignItems=""
         
        >
         
        {Array.isArray(users) &&users.map(user=>(<UserCard id={parseInt(user.id)} key={user.id} name={user.name} email={user.email} avatar={user.avatar} ocupation={user.profession} />))}
        </SimpleGrid>
        <Pagination/>
      </Box>
    </Flex>

    </Flex>
  )

}
export default Dashboard;
