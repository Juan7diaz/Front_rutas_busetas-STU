import { Button, useColorModeValue } from '@chakra-ui/react'

const ButtonForm = ({ type, handleSubmit, label }) => {
  return (
    <Button
      type={type}
      onClick={handleSubmit}
      bg={useColorModeValue('secondary.light', 'secondary.dark')}
      color={'white'}
      _hover={{
        bg: useColorModeValue(
          'aux.ButtonHoverprimary.light',
          'aux.ButtonHoverprimary.dark'
        )
      }}
    >
      {label}
    </Button>
  )
}

export default ButtonForm
