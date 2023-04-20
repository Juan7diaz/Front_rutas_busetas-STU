import { extendTheme } from '@chakra-ui/react'

// https://flatuicolors.com/palette/ca

const colors = {
  primary: {
    light: '#071f39',
    dark: '#071f39'
  },
  secondary: {
    light: '#f26327',
    dark: '#f26327'
  },
  text: {
    light: '#ffffff',
    dark: '#ffffff'
  },
  darktext: {
    light: '#5f5f5f',
    dark: '#5f5f5f'
  },
  aux: {
    blob: {
      light: '#f2632791',
      dark: '#f2632791'
    },
    ButtonHoverprimary: {
      light: '#ff8f00',
      dark: '#ff8f00'
    }
  }
}

export const theme = extendTheme({ colors })
