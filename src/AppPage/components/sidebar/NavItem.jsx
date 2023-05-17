import React from 'react'
import { Flex, Icon } from '@chakra-ui/react'
import { BusRoutesContext } from '../../../context/BusRoutesProvider'

const NavItem = ({ icon, idx, children, ...rest }) => {
  const { setSelectedRoute } = React.useContext(BusRoutesContext)

  return (
      <Flex
        onClick={() => setSelectedRoute(idx) }
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'secondary.light',
          color: 'white'
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
  )
}

export default NavItem
