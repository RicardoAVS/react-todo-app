import React from 'react';

import { HeaderContainer } from './header.styles';

interface Props {
    title: string
}

const HeaderComponent: React.FC<Props> = ({ title }) => (
    <HeaderContainer>
        <h2>{ title }</h2>
    </HeaderContainer>
)

export default HeaderComponent;
