import * as React from 'react';
import styled from 'styled-components'; //STYLES

import Selects from '../../general_components/form_components/selects/select';
import { CuerpoForm, ContainerEdit, Row, HeaderForm, Container, TituloForm, Topbar, HeaderModal, CuerpoModal } from '../../general_components/form_components/container';
import { Label, InputText } from '../../general_components/form_components/controles';

import DayPicker from '../../general_components/form_components/date-picker/date-piker';
import * as moment from 'moment';

//GRID
import AgGridRender from '../../general_components/form_components/grid/ag_grid_render';
import { ColumnApi, GridApi } from "ag-grid";
import { GridOptions } from "ag-grid";

//Modal
import MyModal from '../../general_components/form_components/modal/modal';


export class visualizarCoFacilitador extends React.Component<any, any> {
    columnApi: ColumnApi;
    api: GridApi;
    gridOptions: GridOptions;
    constructor() { //Permite pasar valores al componente
        super();
        this.state = {
            buscar: "",
            codigo: "",
            nombres: "",
            apellidos: "",
            club: "",
            fecha_nacimiento: moment(),
            observaciones: "",

            //Por cada modal un state para controlar su estado! 
            isShowingModal: false,

            //Grid
            data: [],
            columnDefs: [{
                header: "Nombre",
                field: "DescripcionPago",
                width: 150,
                type: "string"
            },
            {
                header: "Edad",
                field: "Banco",
                width: 150,
                type: "string"
            },
            {
                header: "Objetivo Estrategico",
                field: "Cuenta",
                width: 150,
                type: "string",
            },
            {
                header: "Punto Satelite",
                field: "Cuenta",
                width: 150,
                type: "string",
            }
            ],

            gridOptionsX: {
                context: {
                    componentParent: this
                },
                enableColResize: true
            }

        };

        //Funciones binds
        this.changeValues = this.changeValues.bind(this);

        //Modals
        this.showModal = this.showModal.bind(this); //SWITCH OPEN/CLOSE
        this.onClose = this.onClose.bind(this);     //CLOSE

        //GRID
        this.onGridReady = this.onGridReady.bind(this);

    }

    public render() {
        return <div className="container">
            <HeaderForm>
                <TituloForm>Visualizar Co-Facilitador</TituloForm>
            </HeaderForm>
            <CuerpoForm>
                <Row>
                    <Container className='col-md-6'>
                        <Label>Buscar:</Label>
                        <InputText name='buscar' value={this.state.buscar} type="number" className='form-control input-sm' placeholder='buscar' onChange={this.changeValues} />
                    </Container>
                    <Container className='col-md-6'>
                        <br />
                        <div className="btn-group pull-right">
                            <button type="submit" className='btn btn-primary btn-sm' onClick={this.showModal}>
                                <i className="fa fa-plus-circle"></i> Nuevo
                                </button>
                        </div>
                    </Container>
                </Row>
                <Row>
                </Row>
                <Row>
                    <Container className='col-md-12'>
                        <AgGridRender altura={250} rowData={this.state.data} columnDefs={this.state.columnDefs} onGridReady={this.onGridReady} />
                    </Container>
                </Row>
            </CuerpoForm>



            {/*-----------------------------------------------Modal---------------------------------------------------*/}

            <MyModal open={this.state.isShowingModal} onClose={this.onClose}>
                <HeaderModal>
                    <TituloForm>Registro Co-Facilitador</TituloForm>
                </HeaderModal>
                <CuerpoModal>
                    <Row>
                        <Container className='col-md-12' >
                            <div className="btn-group pull-left">
                                <Label>Codigo Apadrinado:</Label>
                                <InputText name='codigo' value={this.state.codigo} type="number" className='form-control input-sm' placeholder='Codigo' onChange={this.changeValues} />
                            </div>
                       </Container>
                    </Row>
                    <Row>
                        <Container className='col-md-6' >
                            <Label>Nombres:</Label>
                            <InputText name='nombres' value={this.state.nombres} type="string" className='form-control input-sm' placeholder='Nombres' onChange={this.changeValues} />
                        </Container>
                        <Container className='col-md-6' >
                            <Label>Apellidos:</Label>
                            <InputText name='apellidos' value={this.state.apellidos} type="string" className='form-control input-sm' placeholder='Apellidos' onChange={this.changeValues} />
                        </Container>
                    </Row>
                    <Row>
                        <Container className='col-md-6' >
                            <Label>Fecha Nacimiento:</Label>
                            <DayPicker id="fecha_nacimiento" selected={this.state.fecha_nacimiento} onChange={this.ChangeDateNacimiento} />
                        </Container>
                        <Container className='col-md-6' >
                            <Label>Club:</Label>
                            <Selects name="club" value={this.state.club} onChange={(value) => { this.setState({ estado: value }) }} options={this.state.options_users} />
                        </Container>
                    </Row>
                    <Row>
                        <Container className='col-md-12' >
                            <Label>Observaciones:</Label>
                            <br />
                            <textarea name='observaciones' placeholder='Observaciones' />
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
                </CuerpoModal>
            </MyModal>

        </div>;
    }


    //--------------------------------------------------Funciones-------------------------------------------------------------

    //Funciones Grid
    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }

    //Valores aplicados


    //Functions modal
    //Abrir/cerrar
    showModal(event) {
        this.setState({ isShowingModal: !this.state.isShowingModal })
    }

    onClose(event) {
        this.setState({ isShowingModal: false });
    }

    ChangeDateNacimiento(day) {
        //SAVE
        this.setState({ fecha_nacimiento: day });

        //LEERLO
        //moment.locale('es');
        //alert(moment(this.state.fecha_creacion).format('L'));
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