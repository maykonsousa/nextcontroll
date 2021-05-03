import { Input, Flex, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'



export const SearchBar = () => {
  return (
    <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={480}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
     >
           <Input
            color="gray.50"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar Usuário"
            _placeholder={{color:"gray.400"}}

           />
           <Icon 
           as={FaSearch}
          fontSize="20"
           />
      </Flex>
      
  )
}


