// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

//LINK: DONDE SE PONDRAN LAS RUTAS PARA LAS PAGINAS

import * as React from 'react';
import Categoria from './categoria';
import { CuerpoForm, ContainerEdit, Row } from '../form_components/contenedores'; 
import './Menu.css';

export interface Props {
    children?: React.ReactNode;
}

export default class Menu extends React.Component<Props, {}> {
    public render() {
        return <div className='Menu'>
            <ul>
                <Categoria name="Punto Satelite" items={[{ option: 'Visualizar', link: '/fetchdata' }, { option: 'Registro', link: '/counter' }]} icon="fa fa-podcast"/>
                <Categoria name="Co-Facilitador" items={[{ option: 'Visualizar', link: '/counter' }, { option: 'Registro', link: '/' }, { option: 'Asignar', link: '/' }]} icon="fa fa-handshake-o"/>
                <Categoria name="Club" items={[{ option: 'Visualizar', link: '/' }, { option: 'Registro', link: '/' }, { option: 'Asignación de co-facilitador', link: '/' }]} icon="fa fa-address-book-o"/>
                <Categoria name="Beneficiario" items={[{ option: 'Visualizar', link: '/' }, { option: 'Registro', link: '/' }, { option: 'Disponibilidad', link: '/' }, { option: 'Asignar a club', link: '/' }, { option: 'Control de faltas', link: '/' }]} icon="fa fa-user-circle-o"/>
            </ul>            
        </div>
    }
}