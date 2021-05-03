import React, { useContext } from 'react'
import {Flex, Box, Text, Avatar} from '@chakra-ui/react'
import { globalContext } from '../../api/context/globalContext'

export const LinkProfile = () => {
  const {logedUser} =useContext(globalContext)
  return (
    <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text> {logedUser.name} </Text>
          <Text>{logedUser.email}</Text>
        </Box>
        <Avatar size="md" name="Maykon Sousa" src={!!logedUser.avatar &&logedUser.avatar} />

      </Flex>
      
  )
}


