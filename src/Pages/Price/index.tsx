import React from 'react';
import { useHistory } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import iconLogoImg from '../../images/icon-barbershop.svg';

import './styles.css';

export default function Price() {
    const history = useHistory();
    return (
        <div id="page-price">
            <aside>
                <header>
                    <div className="image-block">
                        <img src={iconLogoImg} alt="Barbershop"/>
                    </div>

                    <h2>Preços & cortes</h2>
                </header>

                <footer>
                    <button onClick={history.goBack}>
                        <BsArrowLeft size={44} color="#000"/>
                    </button>
                </footer>
            </aside>
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