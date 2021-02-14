import React from 'react'
import {ChildrenContainer, MainContainer} from './styles'

const Layout: React.FC = ({children}) => {

    return (
        <MainContainer>
            <ChildrenContainer>{children}</ChildrenContainer>
        </MainContainer>
    )
}

export default Layout
