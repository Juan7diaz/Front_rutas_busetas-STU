
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import NavbarAndFooterLayout from '../../layout/NavbarAndFooterLayout'

const RegisterPage = () => {
  return (
    <NavbarAndFooterLayout>
      <Flex
        align={'center'}
        justify={'center'}
      >
        <Box
          width={'100vw'} height={'100vh'}
          backgroundImage={"url('/pictures/LoginBgDark.jpg')"}
          backgroundPosition={'center center'}
          backgroundRepeat={'no-repeat'}
          backgroundAttachment={'fixed'}
          backgroundSize={'cover'}
          filter={'auto'}
          blur={'0.6px'}
        />
        <Stack spacing={8} mx={'auto'} maxW={'lg'} px={6} position={'absolute'}>
          <Box
            width={'500px'} height={'450px'}
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}
            color={useColorModeValue('text.light', 'text.dark')}
            backgroundColor={'#1D1D1D'}
            opacity={0.95}>
            <Stack spacing={4}>
              <Stack align={'center'}>
                <Heading fontSize={'4xl'}>REGISTRO [VISTA TEMPORAL]</Heading>
                <Text fontSize={'lg'} >
                  Disfruta de diferentes <Link color={'blue.400'}>funcionalidades</Link> de manera facil y rápida!  ✌️
                </Text>
              </Stack>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack>
                <Button
                  bg={'#E10856'}
                  color={'white'}
                  _hover={{
                    bg: '#F74D8A'
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </NavbarAndFooterLayout>
  )
}

export default RegisterPage
