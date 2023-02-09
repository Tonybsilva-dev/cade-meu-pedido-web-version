import { Input as ChakraInput, FormControl, FormErrorMessage, Flex, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

import { ErrorIcon } from '../../../utils/icons';

type InputProps = {
  label?: string
  name: string

  error?: any

  register: UseFormRegister<any>
  options?: RegisterOptions
} & ChakraInputProps

function Input({ label, name, error, register, options, ...rest }: InputProps) {

  return (
    <FormControl isInvalid={!!error}>
      <Flex flexDir='column' gap='5px' {...rest}>

        <ChakraInput
          size="md"
          focusBorderColor="green.500"
          fontSize='16px'
          {...register(name, options)}
          {...rest}
        />

        {!!error && (
          <FormErrorMessage fontSize='0.7rem' alignItems='center' marginTop='4px' color='red'>
            <>
              <ErrorIcon fill='red' marginRight='5px' width='12px' />
              {error.message}
            </>
          </FormErrorMessage>
        )}
      </Flex>
    </FormControl>
  );
}

export { Input };
