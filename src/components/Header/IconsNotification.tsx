import React from 'react'
import {Flex, HStack, Icon} from '@chakra-ui/react'
import { FaBell, FaUserEdit } from 'react-icons/fa'

const IconsNotification = () => {
  return (
    <Flex 
        align="center"
        ml="auto"

      >
        <HStack 
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={FaUserEdit} fontSize="20"/>
          <Icon as={FaBell} fontSize="20"/>
        </HStack>
        
      
      </Flex>
    
  )
}

export default IconsNotification
