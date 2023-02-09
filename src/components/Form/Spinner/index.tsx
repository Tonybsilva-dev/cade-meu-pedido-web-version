
import { Spinner as ChakraSpinner } from '@chakra-ui/react';

export function Spinner() {
  return (
    <>
      <ChakraSpinner
        thickness='4px'
        speed='0.3s'
        emptyColor='gray.200'
        color='green.500'
        size='xl'
      />
    </>
  );
}
