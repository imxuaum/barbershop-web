import React from 'react';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import { BsArrowLeft } from 'react-icons/bs';
import { GrCut, GrCalendar } from 'react-icons/gr';

import './styles.css';

import iconLogoImg from '../../images/icon-barbershop.svg';
import mapMarkerBarbershopImg from '../../images/icon-map-barbershop.svg';

const barbershopMapIcon = L.icon({
    iconUrl: mapMarkerBarbershopImg,
  
    iconSize: [48, 58],
    iconAnchor: [24, 58],
    popupAnchor: [170, 2]
  })

export default function MapBarbershop() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <div className="image-block">
                        <img src={iconLogoImg} alt="Barbershop"/>
                    </div>

                    <h2>Localização da barbershop</h2>

                    <p>Muitos cortes aqui, venha e experimente um ou todos!</p>
                </header>

                <footer>
                    <strong>Mongaguá</strong>
                    São Paulo
                </footer>
            </aside>

            <div className="page-name">
                <h2>Localização da barbershop</h2>
            </div>

            <Map
                center={[-24.100864, -46.6485248]}
                zoom={14}
                style={{ width: '100%', height: '100%'}}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVza2FzOCIsImEiOiJja2c2eWMwYnUwMjJ2MnhtdHA4ZmdkczlvIn0.GmmvqHyEHH8J3RerWXPqAw`}
                />
                <Marker
                    position={[-24.100864, -46.6485248]}
                    icon={barbershopMapIcon}
                />
            </Map>

            <span className="options">
                <FiPlus className="anchor" size={32} color="#FFF" />
                <div className="label">
                    <Link to="/">
                        <BsArrowLeft size={25} color="#000"/>
                    </Link>
                    <Link to="price">
                        <GrCut size={22} color="#000" />
                    </Link>
                    <Link to="schedule">
                        <GrCalendar size={22} color="#000" />
                    </Link>
                </div>
            </span>
        </div>
    )
}