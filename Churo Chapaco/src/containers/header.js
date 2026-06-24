import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({ children }){
    return(
        <Header>
                <Header.Frame>
                <Header.Logo to = {ROUTES.HOME} alt="Churo Chapaco" src={logo} />
                <Header.ButtonLink to = {ROUTES.SIGN_IN}>Iniciar sesión</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}