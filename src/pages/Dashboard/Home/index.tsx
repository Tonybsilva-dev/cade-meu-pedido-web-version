import { Box } from '@chakra-ui/react';


export default function Home() {
  return (
    <Box>
      <div style={{ display: 'flex' }}>
        <Box
          flex="1"
          bgColor="white"
          p="8"
          display={"flex"}
        >

          Hello, world!

        </Box>
      </div>
    </Box>
  );
}
