import {Flex, Image} from "@chakra-ui/react"
import IconsNotification from "./IconsNotification"
import { LinkProfile } from "./LinkProfile"
import { SearchBar } from "./SearchBar"

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

      

    >
      <Image src="images/logo.svg"/>
      <SearchBar/>
      <IconsNotification/>
      <LinkProfile/>
      </Flex>
  )
}