import React from 'react'
import {Flex, Box, Text, Avatar} from '@chakra-ui/react'

export const LinkProfile = () => {
  return (
    <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Maykon Sousa</Text>
          <Text>maykon.sousa@hotmail.com</Text>
        </Box>
        <Avatar size="md" name="Maykon Sousa" src="https://avatars.githubusercontent.com/u/53588064?v=4"/>

      </Flex>
      
  )
}


