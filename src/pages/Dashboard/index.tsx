import { Box, Flex } from '@chakra-ui/react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Header } from '../../components/Layout/Header';
import { Sidebar } from '../../components/Layout/Sidebar';
import DashboardRoutes from '../../routes/Dashboard';

export default function App() {
  return (
    <Router>
      <Header />
      <Flex my="6">
        <Sidebar />
        <Box
          flex="1"
          bgColor="white"
          mr={{ base: '6', sm: '6', md: '6', lg: '6', '2xl': '6' }}
          ml={{ base: '6', sm: '6', md: '0', lg: '0', '2xl': '0' }}
          shadow="0 0 20px rgba(0, 0, 0, 0.05)"
          borderRadius={4}>
          <DashboardRoutes />
        </Box>
      </Flex>
    </Router>
  );
}
