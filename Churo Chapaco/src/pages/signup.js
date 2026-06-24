import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();

        // do firebase stuff
        firebase.auth() 
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) =>
            result.user.updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) + 1,
            })
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
        )
        .catch((error) => {
            setFirstName('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };

    return (
    
    <>
    
        <HeaderContainer>
            <Form>
                <Form.Title>Regístrate</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input 
                        placeholder="Ingresa tu nombre" value={firstName}
                        onChange={({ target }) => setFirstName(target.value)}
                    />

                    <Form.Input 
                        placeholder="Correo electrónico" value={emailAddress}
                        onChange={({ target }) => setEmailAddress(target.value)}
                    />

                    <Form.Input 
                        type="password" placeholder="Contraseña" autoComplete="off"
                        value={password} onChange={({ target }) => setPassword(target.value)}
                    />

                    <Form.Submit disabled={isInvalid} type="submit">
                        Regístrate
                    </Form.Submit>

                    <Form.Text>
                        ¿Ya tienes una cuenta? <Form.Link to="/signin">Inicia sesión ahora</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>
                        Esta página está protegida por Google reCAPTCHA para verificar que no eres un robot. Más información.
                    </Form.TextSmall>
                </Form.Base>
            </Form>
        </HeaderContainer>
        <FooterContainer />
    </>    
    );
}