import * as React from 'react';
import styled from 'styled-components'; //STYLES
import Selects from '../../general_components/form_components/selects/select';
import { CuerpoForm, ContainerEdit, Row, HeaderForm, TituloForm, Topbar } from '../../general_components/form_components/container'; 
import { Link, NavLink } from 'react-router-dom';

interface State {
    buscar: any;
    nombre: any;
    punto_satelite: any;
    programa: any;
    estado: any;
    options_users: Array<any>;

}

export class visualizarObjetivoEstrategico extends React.Component<{} , State> {
    constructor() { //Permite pasar valores al componente
        super();
        this.state = {
            buscar: "",
            nombre: "",
            punto_satelite: "",
            programa: "",
            estado: "",
            options_users: [],
            

        };

        //Funciones binds
        this.changeValues = this.changeValues.bind(this);

    }

    public render() {

        return <div className="container">
            <HeaderForm>
                <TituloForm>Visualizar Objetivos Estrategicos</TituloForm>
            </HeaderForm>
            <CuerpoForm>
                <Row>
                    <Container className='col-md-6'>
                        <Label>Buscar:</Label>
                        <InputText name='buscar' value={this.state.buscar} type="number" className='form-control input-sm' placeholder='buscar' onChange={this.changeValues} />
                    </Container>  
                    <Container className='col-md-6'>
                        <NavLink to={'/registroObjetivoEstrategico'} activeClassName='active'> 
                            <div className="btn-group pull-right">
                                <Label></Label>
                                <button type="submit" className='btn btn-primary btn-sm'>
                                    <i className="fa fa-plus-circle"></i> Nuevo
                                </button>
                            </div>
                        </NavLink>
                    </Container>  
                </Row>
                <Row>
                    <Container className='col-md-12'>
                        <table className="table table-bordred table-striped">
                            <thead className="thead-inverse">
                                <tr>
                                    <th className="text-center">Codigo</th>
                                    <th className="text-center">Programa</th>
                                    <th className="text-center">Punto Satelite</th>
                                    <th className="text-center">Horario</th>
                                    <th className="text-center"><em className="fa fa-cog"></em></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="text-center" scope="row">1</th>
                                    <td className="text-center">Mark</td>
                                    <td className="text-center">Otto</td>
                                    <td className="text-center">@mdo</td>
                                    <td className="text-center">
                                        <a className="btn btn-primary btn-sm"><em className="fa fa-pencil"></em></a>
                                        &nbsp;
                                        <a className="btn btn-danger"><em className="fa fa-trash"></em></a>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-center" scope="row">2</th>
                                    <td className="text-center">Jacob</td>
                                    <td className="text-center">Thornton</td>
                                    <td className="text-center">@fat</td>
                                    <td className="text-center">
                                        <a className="btn btn-primary btn-sm"><em className="fa fa-pencil"></em></a>
                                        &nbsp;
                                        <a className="btn btn-danger"><em className="fa fa-trash"></em></a>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-center" scope="row">3</th>
                                    <td className="text-center">Larry</td>
                                    <td className="text-center">the Bird</td>
                                    <td className="text-center">@twitter</td>
                                    <td className="text-center">
                                        <a className="btn btn-primary btn-sm"><em className="fa fa-pencil"></em></a>
                                        &nbsp;
                                        <a className="btn btn-danger"><em className="fa fa-trash"></em></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Container> 
                </Row>
                <Row>
                    
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