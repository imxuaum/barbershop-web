import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from "./Pages/Dashboard";
import MapBarbershop from './Pages/MapBarbershop';
import Price from './Pages/Price';
import About from './Pages/About';
import Schedule from './Pages/Schedule';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/map-barbershop" component={MapBarbershop} />
                <Route path="/price" component={Price} />
                <Route path="/about" component={About} />
                <Route path="/schedule" component={Schedule} />
            </Switch>
        </BrowserRouter>
    );
}