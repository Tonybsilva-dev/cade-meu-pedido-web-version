import { VStack, Link, Text, Flex, Hide } from '@chakra-ui/react';
import { RiContactsLine, RiInputMethodLine, RiFileListLine, RiTruckLine, RiChatUploadLine, RiUserAddLine } from 'react-icons/ri';

export function Sidebar() {

  const geralRoutes = [
    { name: 'Clientes', path: '/dashboard/clients', icon: <RiContactsLine size={20} /> },
    { name: 'Importador', path: '/dashboard/importer', icon: <RiChatUploadLine size={20} /> },
    { name: 'Licenças', path: '/dashboard/licenses', icon: <RiFileListLine size={20} /> },
  ];

  const registerRoutes = [
    { name: 'Avaliações', path: '/dashboard/assessments', icon: <RiInputMethodLine size={20} /> },
    { name: 'Habilitados/Desabilitados', path: '/dashboard/enabledOrDisabled', icon: <RiTruckLine size={20} /> },
  ];

  const internoRoutes = [
    { name: 'Usuários', path: '/dashboard/users', icon: <RiUserAddLine size={20} /> },
  ];

  const currentRoute = window.location.pathname;
  return (
    <Hide below='md'>
      <Flex
        as="aside"
        w="72"
        bgColor="white"
        py="4"
        mx="6"
        shadow="0 0 20px rgba(0, 0, 0, 0.05)"
        borderRadius={4}
        direction="column"
        maxHeight={{ base: '0%', sm: '0', md: '481px', lg: '481px', '2xl': '100%' }}
      >
        <VStack spacing="4" pr="8" mt={8} alignItems="stretch">
          <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>GERAL</Text>
          {geralRoutes.map((route, index) => {
            const isOpen = currentRoute === route.path;
            return (
              <Link display="flex" alignItems="center" color={isOpen ? 'green.500' : 'gray.500'} py="1" pl={8} borderLeft={isOpen ? '5px solid' : ''} href={route.path} key={'link-' + index}>
                {route.icon}
                <Text ml="4" fontSize="medium" fontWeight="medium"> {route.name} </Text>
              </Link>
            );
          })}
        </VStack>
        <VStack spacing="4" pr="8" mt={8} alignItems="stretch">
          <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>Relatórios</Text>
          {registerRoutes.map((route, index) => {
            const isOpen = currentRoute === route.path;
            return (
              <Link display="flex" alignItems="center" color={isOpen ? 'green.500' : 'gray.500'} py="1" pl={8} borderLeft={isOpen ? '5px solid' : ''} href={route.path} key={'link-' + index}>
                {route.icon}
                <Text ml="4" fontSize="medium" fontWeight="medium"> {route.name} </Text>
              </Link>
            );
          })}
        </VStack>
        <VStack spacing="4" pr="8" mt={8} alignItems="stretch">
          <Text fontWeight="bold" color="gray.700" fontSize="small" px={8}>Portal Administrativo</Text>
          {internoRoutes.map((route, index) => {
            const isOpen = currentRoute === route.path;
            return (
              <Link display="flex" alignItems="center" color={isOpen ? 'green.500' : 'gray.500'} py="1" pl={8} borderLeft={isOpen ? '5px solid' : ''} href={route.path} key={'link-' + index}>
                {route.icon}
                <Text ml="4" fontSize="medium" fontWeight="medium"> {route.name} </Text>
              </Link>
            );
          })}
        </VStack>
      </Flex >
    </Hide>
  );
}
