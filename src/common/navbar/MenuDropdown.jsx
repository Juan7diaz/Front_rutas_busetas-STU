import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'
import {
  IoMdPerson,
  IoMdExit,
  IoMdCreate,
  IoMdHome,
  IoMdMap,
  IoMdPie
} from 'react-icons/io'
import { useNavigate, Link } from 'react-router-dom'
import { decodedToken } from '../../helpers/decodedToken.js'
import { USER_SESSION, USER_TOKEN } from '../../types/localStorage.js'

const MenuDropdown = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem(USER_SESSION)
    localStorage.removeItem(USER_TOKEN)
    navigate('/')
  }

  const { role } = decodedToken(localStorage.getItem(USER_TOKEN))

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<IoMdPerson />}
        colorScheme="orange"
      />
      <MenuList>
        {role === 'ADMIN' && (
          <MenuItem icon={<IoMdPie />} as={Link} to="/app/admin">
            Panel Admin
          </MenuItem>
        )}

        <MenuItem icon={<IoMdCreate />} as={Link} to="/app/profile">
          Ver perfil
        </MenuItem>
        <MenuItem icon={<IoMdMap />} as={Link} to="/app/map">
          Mostrar Mapa
        </MenuItem>
        <MenuItem icon={<IoMdHome />} as={Link} to="/">
          Pagina de inicio
        </MenuItem>
        <MenuItem icon={<IoMdExit />} onClick={handleLogout}>
          Cerrar Sesión
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuDropdown
