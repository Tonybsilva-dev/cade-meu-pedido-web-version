import { Text, Button as ChackraButton, Input as ChakraInput, FormControl, FormErrorMessage, Flex, InputProps as ChakraInputProps, Button, ButtonGroup, Card, CardBody, Grid, Heading, HStack, List as ChackraList, ListItem, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ListProps = {
  children: ReactNode,
} 

function List({children}: ListProps) {
  return ( 
    <ChackraList
      spacing={3}
      overflowY={'auto'}
      size={'sm'}
      display={'flex'}
      maxHeight={{ base: '100%', sm: '30%', md: '50%', lg: '52%', '2xl': '70%' }}
    >
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)', '2xl': 'repeat(5,1fr)' }}
        gap={2}
        flexDirection={['column', 'column', 'row', 'row', 'row']}
      >
        {children}
      </Grid>
    </ChackraList>      
      
  );
  
}

export { List };
