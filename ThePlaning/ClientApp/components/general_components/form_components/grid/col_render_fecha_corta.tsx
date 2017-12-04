import * as React from "react";
import { Component } from "react";
import styled from 'styled-components';

import { formatearFecha } from '../../../../Global_functions/formats';

const ContenedorDatos = styled.span`
    float: right;
`;

export default class FechaRender extends Component<any, any>{

    render() {
        return (
            <ContenedorDatos>{formatearFecha(this.props.value)}</ContenedorDatos>
        );
    }
};