import { Flex } from '@chakra-ui/react';


export default function Layout({ children }: any) {
  return (
    <>
      <Flex
        maxWidth={{ base: '480px', sm: '414px', md: '1280px', lg: '1024px', '2xl': '1920px' }}
        maxHeight={{ base: '480px', sm: '896px', md: '800px', lg: '768px', '2xl': '1080px' }}>
        {children}
      </Flex>
    </>
  );
}
