import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

import Sidebar from '../../components/Sidebar';

import './styles.css';
import './checkbox.sass';

export default function Schedule() {
    return (
        <div id="page-schedule">
            <Sidebar title="Agenda" />
            <main>
                <h2>Dias e horários de funcionamento</h2>
                <div className="hours">
                    <div className="buttom-block">
                        <input type="checkbox" className="cbx" name="domingo" id="domingo"/>
                        <label className="toggle" htmlFor="domingo">Dominga <span></span> </label>
                    </div>
                    <div className="buttom-block">
                        <input type="checkbox" className="cbx" name="segunda" id="segunda"/>
                        <label className="toggle" htmlFor="segunda">Segunda-feira <span></span> </label>
                    </div>
                    <div className="buttom-block">
                        <input type="checkbox" checked={true} className="cbx" name="terca" id="terca"/>
                        <label className="toggle" htmlFor="terca">Terça-feira <span></span> </label>
                    </div>
                    <div className="buttom-block">
                        <input type="checkbox" checked={true} className="cbx" name="quarta" id="quarta"/>
                        <label className="toggle" htmlFor="quarta">Quarta-feira <span></span> </label>
                    </div>
                    <div className="buttom-block">
                        <input type="checkbox" checked={true} className="cbx" name="quinta" id="quinta"/>
                        <label className="toggle" htmlFor="quinta">Quinta-feira <span></span> </label>
                    </div>
                    <div className="buttom-block">
                        <input type="checkbox" checked={true} className="cbx" name="sexta" id="sexta"/>
                        <label className="toggle" htmlFor="sexta">Sexta-feira <span></span> </label>
                    </div>
                    <div className="buttom-block">
                        <input type="checkbox" checked={true} className="cbx" name="sabado" id="sabado"/>
                        <label className="toggle" htmlFor="sabado">Sábado <span></span> </label>
                    </div>
                    <h3>Terça a sábado, 8h às 18h</h3>
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