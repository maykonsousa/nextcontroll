import {Flex, Image, Input, Icon, HStack, Box, Text, Avatar} from "@chakra-ui/react"
import {FaSearch, FaBell, FaUserPlus} from "react-icons/fa"

export const Header = ()=>{
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      border="2px"
      borderColor="yellow.500"
      

    >
      <Image src="images/logo.svg"/>
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
          <Icon as={FaUserPlus} fontSize="20"/>
          <Icon as={FaBell} fontSize="20"/>
        </HStack>
        

      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Maykon Sousa</Text>
          <Text>maykon.sousa@hotmail.com</Text>
        </Box>
        <Avatar size="md" name="Maykon Sousa" src="https://avatars.githubusercontent.com/u/53588064?v=4"/>

      </Flex>
      </Flex>
    </Flex>
  )
}