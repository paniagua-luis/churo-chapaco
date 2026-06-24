import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { Feature, OptForm } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';

export default function Home(){
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Películas, series y más.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Mira donde quieras. Cancela cuando quieras.
                    </Feature.SubTitle>


                    <OptForm>

                        <OptForm.Text>¿Listo para ver? Ingresa tu correo para crear o reiniciar tu membresía</OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="Correo electrónico" />
                        <OptForm.Button>Empieza ahora</OptForm.Button>
                        <OptForm.Break />

                    </OptForm>

                </Feature>
            
            </HeaderContainer>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
        </>
    );
}