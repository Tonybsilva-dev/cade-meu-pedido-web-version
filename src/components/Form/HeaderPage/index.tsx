import { Text, Flex, Heading, HStack, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HeaderProps {
  title: string,
  subtitle: string,
  children: ReactNode 
} 

function HeaderPage({ title, subtitle, children }: HeaderProps) {
  return ( 
    <Flex mb="8" justifyContent="space-between" alignItems="center">
        <Box>
            <Heading size={['sm', 'md', 'md', 'lg', 'lg']} fontWeight="medium">{title}</Heading>
            <Text size={['sm', 'sm', 'sm', 'md', 'md']} mt="1" color="gray.400">{subtitle}</Text>
        </Box>
        <HStack>
            {children}
        </HStack>
    </Flex>
  );  
}

export { HeaderPage };
