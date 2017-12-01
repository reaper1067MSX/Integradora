import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/general_components/form_components/layout/Layout';
import { Home } from './components/Forms/Home/Home';
import { registroClub } from './components/Forms/Club/registroClub';
//import { Counter } from './components/Counter';
//import { PuntoSatelite } from './components/PuntoSatelite';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/registroClub' component={registroClub} />
</Layout>;
