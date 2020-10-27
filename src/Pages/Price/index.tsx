import React from 'react';
import Sidebar from '../../components/Sidebar';


import './styles.css';

export default function Price() {
    return (
        <div id="page-price">
            <Sidebar title="Preços & cortes" />
            <main>
                <div className="group-items">
                    <div className="item">
                        <div className="image-block">
                            <img src="https://static1.preparadopravaler.com.br/articles/8/29/61/8/@/134150-tesoura-e-maquina-de-corte-sao-ferrament-660x0-2.jpg" alt="Corte na máquina"/>
                        </div>
                        <div className="text-block">
                            <p>Corte na máquina</p>
                            <span className="price">R$ 10,00</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-block">
                            <img src="https://static1.preparadopravaler.com.br/articles/8/29/61/8/@/134150-tesoura-e-maquina-de-corte-sao-ferrament-660x0-2.jpg" alt="Corte na máquina"/>
                        </div>
                        <div className="text-block">
                            <p>Corte na máquina</p>
                            <span className="price">R$ 10,00</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-block">
                            <img src="https://static1.preparadopravaler.com.br/articles/8/29/61/8/@/134150-tesoura-e-maquina-de-corte-sao-ferrament-660x0-2.jpg" alt="Corte na máquina"/>
                        </div>
                        <div className="text-block">
                            <p>Corte na máquina</p>
                            <span className="price">R$ 10,00</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}