import React from 'react';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Preguntas frecuentes</Accordion.Title>
            {faqsData.map(item => 
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            )}

        <OptForm>
            <OptForm.Input placeholder="Correo electrónico" />
            <OptForm.Button>Empieza ahora</OptForm.Button>
            <OptForm.Break />

            <OptForm.Text>¿Listo para ver? Ingresa tu correo para crear o reiniciar tu membresía</OptForm.Text>
        </OptForm>

        
        </Accordion>
    );
}