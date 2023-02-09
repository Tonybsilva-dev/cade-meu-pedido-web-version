import { Flex, Image, Avatar, AvatarBadge, Box, Text, Heading, Spacer, ButtonGroup, Menu, MenuButton, IconButton, MenuList, MenuItem, MenuDivider, MenuGroup } from '@chakra-ui/react';
import { useAuth } from '../../../context/AuthContext';
import { RiArrowDownSLine, RiLogoutBoxLine, RiSettings2Line, RiBookletLine, RiUser3Line } from 'react-icons/ri';
import logo from '../../../assets/fusion-logo.png';
import { useHistory } from 'react-router-dom';

export function Header() {
  const { user, signOut } = useAuth();
  const history = useHistory();
  
  function handleRedirectTutorial(){
    history.push('/dashboard/tutorial')
  }

  return (

    <Flex
      as="header"
      height = {{ base: '20', sm: '20', md: '20', lg: '20', '2xl': '20' }}
      maxWidth={{ base: '100%', sm: '100%', md: '100%', lg: '100%', '2xl': '100%' }}
      bgColor="white"
      px="8"
      shadow="0 0 20px rgba(0, 0, 0, 0.05)"
      alignItems="center"
    >
      <Box p='2'>
        <Heading size='md'>
          <Image src={logo} width={'150px'} alt="Logomarca - Uma caixa verde com uma interrogação" pointerEvents={'none'} />
        </Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2' alignItems={'center'} justifyContent={'center'}>
        <Box>
          <Text fontWeight="medium" autoCapitalize="on" style={{ textTransform: 'uppercase' }}>{user.nome}</Text>
          <Text color="gray.500" fontSize="small">{user.email}</Text>
        </Box>
        <Avatar name={user.nome} size="md" src={user.avatar}>
          <AvatarBadge borderColor="papayawhip" bg="green.500" boxSize="1.25rem" />
        </Avatar>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<RiArrowDownSLine />}
            variant='outline'
            size="md"
          />
          <MenuList>
           
            <MenuGroup title='Ajuda'>
              <MenuItem onClick={handleRedirectTutorial} icon={<RiBookletLine size={20} />} >
                Tutorial
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Sistema'>
             
              <MenuItem icon={<RiLogoutBoxLine size={20} />} command='⌘ESC' onClick={signOut}>
                Sair
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </ButtonGroup>
    </Flex>
  );
}
