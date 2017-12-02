import * as React from 'react';
import styled from 'styled-components'; //STYLES

import Selects from '../../general_components/form_components/selects/select';
import { CuerpoForm, ContainerEdit, Row, HeaderForm, TituloForm, Topbar } from '../../general_components/form_components/container';


interface State {
    codigo: any;
    nombre: any;
    responsable: any;
    tipo: any;
    desde: any;
    hasta: any;
    capacidad: any;
    estado: any;
    options_users: Array<any>;


}

export class registroPuntoSatelite extends React.Component<{}, State> {
    constructor() { //Permite pasar valores al componente
        super();
        this.state = {
            codigo: "",
            nombre: "",
            responsable: "",
            tipo: "",
            desde: "",
            hasta: "",
            capacidad: "",
            estado: "",
            options_users: [],
        };

        //Funciones binds
        this.changeValues = this.changeValues.bind(this);

    }

    public render() {
        return <div className="container">
            <HeaderForm>
                <TituloForm>Registro Punto Satelite</TituloForm>
            </HeaderForm>
            <CuerpoForm>
                <Row>
                    <Container className='col-md-6' offset-md-6>
                        <Label>Codigo:</Label>
                        <InputText name='codigo' value={this.state.codigo} type="number" className='form-control input-sm' placeholder='Codigo' onChange={this.changeValues} />
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-8' >
                        <Label>Nombre:</Label>
                        <InputText name='nombre' value={this.state.nombre} type="string" className='form-control input-sm' placeholder='Nombre' onChange={this.changeValues} />
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-4' >
                        <Label>Tipo:</Label>
                        <Selects name="tipo" value={this.state.tipo} onChange={(value) => { this.setState({ estado: value }) }} options={this.state.options_users} />  
                    </Container>
                </Row>

                <Row>
                    <Container className='col-md-8' >
                        <Label>Responsable:</Label>
                        <Selects name="responsable" value={this.state.responsable} onChange={(value) => { this.setState({ estado: value }) }} options={this.state.options_users} />                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-4' >
                        <Label>Desde:</Label>
                        <Selects name="desde" value={this.state.desde} onChange={(value) => { this.setState({ estado: value }) }} options={this.state.options_users} />
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-8' >
                        <Label>Capacidad:</Label>
                        <InputText name='capacidad' value={this.state.capacidad} type="numeric" className='form-control input-sm' placeholder='Capacidad' onChange={this.changeValues} />
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-4' >
                        <Label>Hasta:</Label>
                        <Selects name="hasta" value={this.state.hasta} onChange={(value) => { this.setState({ estado: value }) }} options={this.state.options_users} />
                    </Container>
                </Row>

                <Row>
                    <Container className='col-md-12'>
                        <div className="btn-group pull-right">
                            <button type="submit" className='btn btn-secondary btn-sm'>
                                <i className="fa fa-trash-o fa-lg"></i> Limpiar
                            </button>
                        </div>
                        <div className="btn-group pull-right">
                            <button type="submit" className='btn btn-primary btn-sm'>
                                <i className="fa fa-floppy-o fa-lg"></i> Guardar
                            </button>
                        </div>
                    </Container>
                </Row>
            </CuerpoForm>
        </div>;
    }




    //Functions


    changeValues(event) {

        console.log("evento: ", event)
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    //Realiza todas estas operaciones al renderizar el form
    componentDidMount() {
        var options = [{ value: 0, label: 'YORK' },
        { value: 1, label: 'Amadeus' },
        { value: 2, label: 'Landa' },
        { value: 3, label: 'FORK' }]

        this.setState({ options_users: options })
    }

}//End

//Style Components
const Label = styled.label` //LABEL STYLE
      display: inline-block;  
      font-size: 12px;
    `;

const InputText = styled.input`
      height: 25px;
      padding: 5px 10px;
      font-size: 11px;
      line-height: 1.5;
      border-radius: 3px;
      display: block;
      width: 100%;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
    `;

const Container = styled.div`
      margin-bottom: 6px;
    `;

