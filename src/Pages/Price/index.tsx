import React from 'react';

import Sidebar from '../../components/Sidebar';

import imgCorte10 from '../../images/cortes/10.jpeg';
import imgCorte15 from '../../images/cortes/15.jpeg';
import imgCorte25 from '../../images/cortes/25.jpeg';
import './styles.css';

export default function Price() {
    return (
        <div id="page-price">
            <Sidebar title="Preços & cortes" />
            <main>
                <div className="group-items">
                    <div className="item">
                        <div className="image-block">
                            <img src={imgCorte10} alt="Corte na máquina"/>
                        </div>
                        <div className="text-block">
                            <p>Corte na máquina</p>
                            <span className="price">R$ 10,00</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-block">
                            <img src={imgCorte15} alt="Sombreado"/>
                        </div>
                        <div className="text-block">
                            <p>Sombreado</p>
                            <span className="price">R$ 15,00</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-block">
                            <img src={imgCorte25} alt="Corte & barba"/>
                        </div>
                        <div className="text-block">
                            <p>Corte + Barba</p>
                            <span className="price">R$ 25,00</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}