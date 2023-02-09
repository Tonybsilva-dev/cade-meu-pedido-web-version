
import { Center, Text } from '@chakra-ui/react';

export function NoContentToPresent() {
  return (
    <>
      <Center>
        <Text fontWeight="medium" fontSize={['sm', 'md', 'md', 'lg', 'lg']}>Sem conteúdo a apresentar.</Text>
      </Center>
    </>
  );
}
