import { Box, Flex, Heading, Image, Text, Center } from '@chakra-ui/react';
import notFound from '../../../assets/page_not_found.svg';

export default function NotFound() {
  return (
    <Box>
      <Flex>
        <Box
          flex="1"
          bgColor="white"
          p="8"
        >
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Box>
              <Heading size="lg" fontWeight="medium">Error 404</Heading>
              <Text mt="1" color="gray.400">Página não encontrada</Text>
            </Box>
          </Flex>
          <Center>
            <Image src={notFound} alt='Pessoa procurando uma localização' maxWidth={'60%'} width={'500px'} />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
