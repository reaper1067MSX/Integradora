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

export class visualizarClub extends React.Component<{} , State> {
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
                <TituloForm>Visualizar Club</TituloForm>
            </HeaderForm>
            <CuerpoForm>
                <Row>
                    <Container className='col-md-6'>
                        <Label>Buscar:</Label>
                        <InputText name='buscar' value={this.state.buscar} type="number" className='form-control input-sm' placeholder='buscar' onChange={this.changeValues} />
                    </Container>  
                    <Container className='col-md-6'>
                        <NavLink to={'/registroClub'} activeClassName='active'> 
                            <div className="btn-group pull-right">
                                <button type="submit" className='btn btn-primary btn-sm'>
                                    <i className="fa fa-plus-circle"></i> Nuevo
                                </button>
                            </div>
                        </NavLink>
                    </Container>  
                </Row>
                <Row>
                    <Container className='col-md-12'>
                        <table className="table">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>Codigo</th>
                                    <th>Programa</th>
                                    <th>Punto Satelite</th>
                                    <th>Horario</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="glyphicon glyphicon-pencil"></span></button></p></td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="glyphicon glyphicon-pencil"></span></button></p></td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p></td>

                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit" ><span className="glyphicon glyphicon-pencil"></span></button></p></td>
                                    <td><p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete" ><span className="glyphicon glyphicon-trash"></span></button></p></td>

                                </tr>
                            </tbody>
                        </table>
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