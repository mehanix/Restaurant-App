// import React, { useContext } from "react";
// import { Button, Container, Nav, Navbar } from "react-bootstrap";
// import { UserContext } from "../utils/providers/UserContextProvider";

// const NavbarComponent = () => {
//   const { user, isLogged, logout } = useContext<any>(UserContext);

//   if (!isLogged) {
//     return null;
//   }

//   return (
//     <Navbar sticky="top" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand>Reserve&Eat</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="/">Restaurants</Nav.Link>
//           <Nav.Link href="/reservations">Reservations</Nav.Link>
//         </Nav>
//         <Nav className="justify-content-end">
//           <Navbar.Text>
//             Logged in as {user.firstName + " " + user.lastName}.
//           </Navbar.Text>
//           <Button className="ms-4" variant="outline-secondary" onClick={logout}>
//             Logout
//           </Button>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavbarComponent;
import { ReactNode, useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Link,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { UserContext } from '../utils/providers/UserContextProvider';
import { Link as RouterLink} from 'react-router-dom';

const Links = ['Restaurants', 'Reservations', ];


export default function NavbarComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, isLogged, logout } = useContext<any>(UserContext);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} boxShadow='base' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>  <Image width="125px" src='./hero-logo.png' alt='Restaurant App' /></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>

<Link as={RouterLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
      textColor: "orange.500"

    }}
    to={'/'}>
    Restaurants
    </Link>
    <Link as={RouterLink}
    px={2} 
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
      textColor: "orange.500"
    }}
    to={'/reservations'}>
    Reservations
  </Link> 
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button> */}
            <Menu>
<MenuButton
  as={Button}
  rounded={'full'}
  variant={'link'}
  cursor={'pointer'}
  minW={0}>
  <Avatar
    size={'sm'}
    src={'https://i.pravatar.cc/300?u=' + user.firstName + user.lastName}
  />
</MenuButton>
<MenuList alignItems={'center'}>
  <br />
  <Center>
    <Avatar
      size={'2xl'}
      src={'https://i.pravatar.cc/300?u=' + user.firstName + user.lastName}
    />
  </Center>
  <br />
  <Center>
    <p>{user.firstName + " " + user.lastName}</p>
  </Center>
  <br />
  <MenuDivider />
  <MenuItem  onClick={logout} key={logout}>Logout</MenuItem>
</MenuList>
</Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <Link as={Button} onClick={logout} key={link}>{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}