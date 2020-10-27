import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

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

                <div className="hours">
                    <h2>Horários para atendimento</h2>
                    <hr/>
                    <p>Terça à sábado, das 8h às 18h</p>
                    <div className="contact">
                        <button type="button">
                            <FaWhatsapp className="btn-svg" size={25} color="green" />
                            Entre em contato!
                        </button>
                        <span>
                            <FaPhone className="btn-svg" size={20} color="black" />
                            3448-0748
                        </span>
                    </div>
                </div>
            </main>
        </div>
    );
}