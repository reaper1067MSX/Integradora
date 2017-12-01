import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Club } from './components/Club';
import { PuntoSatelite } from './components/PuntoSatelite';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/dart' component={Home} />
    <Route path='/club' component={Club} />
    <Route path='/puntosatelite' component={PuntoSatelite} />
</Layout>;
