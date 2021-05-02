import {Flex, Image, Input, Icon} from "@chakra-ui/react"
import {FaSearch} from "react-icons/fa"

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
      border="1px"
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
    </Flex>
  )
}