import React from 'react';

import Sidebar from '../../components/Sidebar';

import './styles.css';

export default function About() {
    return (
        <div id="page-about">
            <Sidebar title="Sobre nós" />
            <main>
                <div className="about">
                    <h2>Barbershop</h2>
                    <hr/>
                    <p>
                        Foi funcdada em 2013 com próposito de atender os amigos e clientes da cidade de Mongaguá e região e turistas.
                        Ter um ambiente bom e agradável e um bom atentimento. Agente um horário conosco!
                    </p>
                </div>
            </main>
        </div>
    );
}