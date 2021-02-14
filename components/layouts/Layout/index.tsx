import React from 'react'
import { ChildrenContainer, MainContainer } from './styles'
import theme from '@styles/theme'
import { ThemeProvider } from '@material-ui/core/styles'

const Layout: React.FC =  ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <ChildrenContainer>{children}</ChildrenContainer>
      </MainContainer>
    </ThemeProvider>
  )
}

export default Layout
