import React from 'react';

import Sidebar from '../../components/Sidebar';

import './styles.css';

export default function About() {
    return (
        <div id="page-about">
            <Sidebar title="Sobre nós" />
            <main>
                <div className="about">
                    <h1>Barbershop</h1>
                    <hr/>
                    <p>
                        A Barbershop foi fundada em 2013, exclusivamente para o público masculino, com profissionais qualificados e comprometidos para cuidar do cabelo, barba, e do bigode, com cortes clássicos e modernos.
                        Um espaço descontraído, que conta com produtos de alta qualidade. 
                        A barbearia tem garantia de satisfação. Você pode voltar em até cinco dias para ajuste do cabelo. Agende seu horário, esperamos por você!
                    </p>
                </div>
            </main>
        </div>
    );
}