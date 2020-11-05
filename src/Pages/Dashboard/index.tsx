import React from 'react';
import { Link } from 'react-router-dom';
import { GrCut, GrLocation, GrCalendar } from 'react-icons/gr';
import { BsInfoSquare, BsArrowRight } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../images/barbershop.svg';

export default function Dashboard() {
    return (
        <div className="container">
            <div className="landing-box">
                <img src={logoImg} alt="Logo"/>
                <a href="#main" className="downButtom">
                   <FiChevronDown size={55} color="#000"/>
                </a>
            </div>
            <main id="main">
                <div className="content">
                    <Link to="map-barbershop">
                        <GrLocation size={22} color="#000" />
                        <p>Localização</p>
                        <span className="goIn">
                            <BsArrowRight className="icon" size={22} color="#000"/>
                        </span>
                    </Link>
                    <Link to="price">
                        <GrCut size={22} color="#000" />
                        <p>Cortes</p>
                        <span className="goIn">
                            <BsArrowRight className="icon" size={22} color="#000"/>
                        </span>
                    </Link>
                    <Link to="schedule">
                        <GrCalendar size={22} color="#000" />
                        <p>Agenda</p>
                        <span className="goIn">
                            <BsArrowRight className="icon" size={22} color="#000"/>
                        </span>
                    </Link>
                    <Link to="about">
                        <BsInfoSquare size={22} color="#000" />
                        <p>A barbearia</p>
                        <span className="goIn">
                            <BsArrowRight className="icon" size={22} color="#000"/>
                        </span>
                    </Link>
                </div>
            </main>
        </div>
    );
}