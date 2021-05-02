import { Flex, Stack } from "@chakra-ui/react"


export const FormContainer = ({stackSpacing, children}) => {
  return (
    <Flex 
      as="form"
      w="100%"
      p="8"
      maxWidth={360}
      bg="gray.800"
      align="center"
      justify="center"
      display="flex"
      flexDirection="column"
      borderRadius={8}
    >
      <Stack spacing={stackSpacing}>
        {children}
      </Stack>
  </Flex>
  )
}


