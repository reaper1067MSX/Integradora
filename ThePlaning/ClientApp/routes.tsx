import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/general_components/form_components/layout/Layout';
import { Home } from './components/Forms/Home/Home';

import { registroClub } from './components/Forms/Club/registroClub';
import { visualizarClub } from './components/Forms/Club/visualizarClub';

import { registroPuntoSatelite } from './components/Forms/Punto_Satelite/registroPuntoSatelite';
import { visualizarPuntoSatelite } from './components/Forms/Punto_Satelite/visualizarPuntoSatelite';

import { registroCoFacilitador } from './components/Forms/CoFacilitador/registroCoFacilitador';
import { visualizarCoFacilitador } from './components/Forms/CoFacilitador/visualizarCoFacilitador';


import { registroBeneficiario } from './components/Forms/Beneficiario/registroBeneficiario';
import { visualizarBeneficiario } from './components/Forms/Beneficiario/visualizarBeneficiario';

import { visualizarParametros } from './components/Forms/Parametros/visualizarParametros';



//import { Counter } from './components/Counter';


export const routes = <Layout>
    <Route exact path='/' component={Home} />

    <Route path='/registroClub' component={registroClub} />
    <Route path='/visualizarClub' component={visualizarClub} />

    <Route path='/registroPuntoSatelite' component={registroPuntoSatelite} />
    <Route path='/visualizarPuntoSatelite' component={visualizarPuntoSatelite} />

    <Route path='/registroCoFacilitador' component={registroCoFacilitador} />
    <Route path='/visualizarCoFacilitador' component={visualizarCoFacilitador} />

    <Route path='/registroBeneficiario' component={registroBeneficiario} />
    <Route path='/visualizarBeneficiario' component={visualizarBeneficiario} />

    <Route path='/visualizarParametros' component={visualizarParametros} />

</Layout>;
