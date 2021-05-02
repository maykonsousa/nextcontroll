import {Input, FormControl} from "@chakra-ui/react"

export const NextInput = ({name, placeholder, type})=>{
  return(
    <FormControl>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        focusBorderColor="yellow.500"
        bgColor="gray.900"
        size="lg"
    />
    </FormControl>
    
    
  )
}