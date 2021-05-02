import {Input, FormControl, InputProps as NextInputProps} from "@chakra-ui/react"

interface InputProps extends NextInputProps {
  name: string
  placeholder:string;
  type:string;
}

export const NextInput = ({name, placeholder, type, ...props}:InputProps)=>{
  return(
    <FormControl>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        focusBorderColor="yellow.500"
        bgColor="gray.900"
        size="lg"
        {...props}
    />
    </FormControl>
    
    
  )
}