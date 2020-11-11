import React, { useState, useEffect } from 'react';

import Sidebar from '../../components/Sidebar';

import imgCorte10 from '../../images/cortes/10.jpeg';
import imgCorte15 from '../../images/cortes/15.jpeg';
import imgCorte25 from '../../images/cortes/25.jpeg';
import './styles.css';


import api from '../../services/api'

interface Cut {
    id: number;
    name: string;
    price: string;
    image: string;
}

export default function Price() {
    const [cuts, setCuts] = useState<Array<Cut>>([])

    useEffect(() => {
        api.get('cuts').then(response => {
            setCuts(response.data)
        })
    }, [])

    return (
        <div id="page-price">
            <Sidebar title="Preços & cortes" />
            <main>
                <div className="group-items">
                    {cuts.map(cut => (
                        <div className="item">
                            <div className="image-block">
                                <img src={cut.image} alt="Sombreado"/>
                            </div>
                            <div className="text-block">
                                <p>{cut.name}</p>
                                <span className="price">{cut.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}