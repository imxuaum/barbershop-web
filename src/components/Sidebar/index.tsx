import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

import iconLogoImg from '../../images/icon-barbershop.svg';

import './styles.css';

interface SidebarProps {
    title: string;
}

export default function Sidebar({ title }: SidebarProps) {
    const history = useHistory();
    return (
        <aside>
            <header>
                <div className="image-block">
                    <img src={iconLogoImg} alt="Barbershop"/>
                </div>

                <h2>{title}</h2>
            </header>

            <footer>
                <button onClick={history.goBack}>
                    <BsArrowLeft size={44} color="#000"/>
                </button>
            </footer>
        </aside>
    );
}