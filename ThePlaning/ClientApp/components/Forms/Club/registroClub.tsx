import * as React from 'react';
import styled from 'styled-components'; //STYLES

import DayPicker from '../../general_components/form_components/date-picker/date-piker';
import * as moment from 'moment';

import Selects from '../../general_components/form_components/selects/select';
import { CuerpoForm, ContainerEdit, Row, HeaderForm, Container, TituloForm, Topbar, HeaderModal, CuerpoModal } from '../../general_components/form_components/container';
import { Label, InputText } from '../../general_components/form_components/controles'; 

//GRID
import AgGridRender from '../../general_components/form_components/grid/ag_grid_render';
import { ColumnApi, GridApi } from "ag-grid";
import { GridOptions } from "ag-grid";

//Modal
import MyModal from '../../general_components/form_components/modal/modal';

/*
interface State {
    codigo: any;
    nombre: any;
    fecha_creacion: moment.Moment;
    fecha_vigencia: moment.Moment;
    punto_satelite: any;
    programa: any;
    estado: any;
    options_users: Array<any>;
    isShowingModal: any;
    data_importacion: any[];
    columnDefs: any[];

}
*/




export class registroClub extends React.Component<any , any> {
    columnApi: ColumnApi;
    api: GridApi;
    gridOptions: GridOptions;
    constructor() { //Permite pasar valores al componente
        super();
        this.state = {
            codigo: "",
            nombre: "",
            fecha_creacion: moment(),
            fecha_vigencia: moment(),
            punto_satelite: "",
            programa: "",
            estado: "",
            options_users: [],

            //Por cada modal un state para controlar su estado! 
            isShowingModal: false,

            //Grid
            data: [],
            columnDefs: [{
                header: "Forma de pg.",
                field: "DescripcionPago",
                width: 120,
                type: "string"
            },
            {
                header: "Banco",
                field: "Banco",
                width: 90,
                type: "string"
            },
            {
                header: "Cuenta",
                field: "Cuenta",
                width: 73,
                type: "string",
            },
            {
                header: "Doc.",
                field: "Cheque",
                width: 40,
                type: "num_entero",
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
        this.ChangeDateCreacion = this.ChangeDateCreacion.bind(this);
        this.ChangeDateVigencia = this.ChangeDateVigencia.bind(this);

        //Modals
        this.showModal = this.showModal.bind(this); //SWITCH OPEN/CLOSE
        this.onClose = this.onClose.bind(this);     //CLOSE

        //GRID
        this.onGridReady = this.onGridReady.bind(this);
    }

    public render() {
        const { fecha_vigencia } = this.state;
        return <div className="container">
            <HeaderForm>
                <TituloForm>Registro Club</TituloForm>
            </HeaderForm>
            <CuerpoForm>
                <Row>
                    <Container className='col-md-6' >
                        <Label>Codigo:</Label>
                        <InputText name='codigo' value={this.state.codigo} type="number" className='form-control input-sm' placeholder='Ej: 123' onChange={this.changeValues} />
                    </Container>
                    <Container className='col-md-6'>
                        <Label>Fecha de creacion:</Label>
                        <DayPicker id="fecha_creacion" selected={this.state.fecha_creacion} onChange={this.ChangeDateCreacion} />
                    </Container>                    
                </Row>
                <Row>
                    <Container className='col-md-6'>
                        <Label>Nombre:</Label>
                        <InputText name='nombre' value={this.state.nombre} type="text" className='form-control input-sm' placeholder='Ej: 123' onChange={this.changeValues} />
                    </Container>
                    <Container className='col-md-6'>
                        <Label>Fecha vigencia:</Label>
                        <DayPicker  id="fecha_vigencia" selected={this.state.fecha_vigencia} onChange={this.ChangeDateVigencia} />   
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-6'>
                        <Label>Programa:</Label>
                        <Selects name="programa" value={this.state.programa} onChange={(value) => { this.setState({ programa: value }) }} options={this.state.options_users} />
                    </Container>
                    <Container className='col-md-6'>
                        <Label>Punto satelite:</Label>
                        <Selects name="punto_satelite" value={this.state.punto_satelite} onChange={(value) => { this.setState({ punto_satelite: value }) }} options={this.state.options_users} />
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-6 offset-md-6'>
                        <Label>Estado:</Label>
                        <Selects name="estado" value={this.state.estado} onChange={(value) => { this.setState({ estado: value }) }} options={this.state.options_users} />
                    </Container>                   
                </Row>                
                <Row>
                    <Container className='col-md-12'>
                        <br/>
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-12'>
                        <div className="btn-group pull-right">
                            <button type="submit" className='btn btn-secondary btn-sm' onClick={this.showModal}>
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
                <Row>
                    <Container className='col-md-12'>
                        <AgGridRender altura={250} rowData={this.state.data} columnDefs={this.state.columnDefs} onGridReady={this.onGridReady} />                                                           
                    </Container>
                </Row>
            </CuerpoForm>

            <MyModal open={this.state.isShowingModal} onClose={this.onClose}>
                <HeaderModal>
                    <TituloForm>Registro Club</TituloForm>
                </HeaderModal>
                <CuerpoModal>
                    <Row>
                        <Container className='col-md-6' >
                            <Label>Codigo:</Label>
                            <InputText name='codigo' value={this.state.codigo} type="number" className='form-control input-sm' placeholder='Ej: 123' onChange={this.changeValues} />
                        </Container>
                        <Container className='col-md-6'>
                            <Label>Fecha de creacion:</Label>
                            <DayPicker id="fecha_creacion" selected={this.state.fecha_creacion} onChange={this.ChangeDateCreacion} />
                        </Container>
                    </Row>

                    <Row>
                        <Container className='col-md-12'>
                            <div className="btn-group pull-right">
                                <button type="submit" className='btn btn-secondary btn-sm' onClick={this.showModal}>
                                    <i className="fa fa-times-circle"></i> Cerrar
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
    

    //Functions

    ChangeDateCreacion(day) {
        //SAVE
        this.setState({ fecha_creacion: day });

        //LEERLO
        //moment.locale('es');
        //alert(moment(this.state.fecha_creacion).format('L'));
    }

    ChangeDateVigencia(event) {
        console.log(event);
        this.setState({ fecha_vigencia: event });
    }
    

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
