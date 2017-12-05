import * as React from 'react';
import styled from 'styled-components'; //STYLES

import Selects from '../../general_components/form_components/selects/select';
import { CuerpoForm, ContainerEdit, Row, HeaderForm, Container, TituloForm, Topbar, HeaderModal, CuerpoModal } from '../../general_components/form_components/container';
import { Label, InputText } from '../../general_components/form_components/controles';


//GRID
import AgGridRender from '../../general_components/form_components/grid/ag_grid_render';
import { ColumnApi, GridApi } from "ag-grid";
import { GridOptions } from "ag-grid";

//Modal
import MyModal from '../../general_components/form_components/modal/modal';


export class visualizarPuntoSatelite extends React.Component<any, any> {
    columnApi: ColumnApi;
    api: GridApi;
    gridOptions: GridOptions
    constructor() { //Permite pasar valores al componente
        super();
        this.state = {
            buscar: "",
            nombre: "",
            punto_satelite: "",
            programa: "",
            estado: "",
            options_users: [],

            //Por cada modal un state para controlar su estado! 
            isShowingModal: false,

            //Grid
            data: [],
            columnDefs: [{
                header: "Codigo",
                field: "DescripcionPago",
                width: 150,
                type: "string"
            },
            {
                header: "Nombre",
                field: "Banco",
                width: 150,
                type: "string"
            },
            {
                header: "Tipo",
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
                <TituloForm>Visualizar Puntos Satelites</TituloForm>
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
                            <Label></Label>
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
                    <TituloForm>Registro Parametros</TituloForm>
                </HeaderModal>
                <CuerpoModal>
                    <Row>
                        <Container className='col-md-6' >
                            <Label>Codigo:</Label>
                                <InputText name='codigo' value={this.state.codigo} type="number" className='form-control input-sm' placeholder='Codigo' onChange={this.changeValues} />
                                <br />
                                <Label>Nombre:</Label>
                                <InputText name='nombre' value={this.state.nombre} type="text" className='form-control input-sm' placeholder='Nombre' onChange={this.changeValues} />
                                <br />
                            <Label>Tipo:</Label>
                                <Selects name="tipo" value={this.state.tipo} onChange={(value) => { this.setState({ programa: value }) }} options={this.state.options_users} />
                                <br />
                           
                        </Container>
                        <Container className='col-md-6'>
                            <Label>Direccion:</Label>
                            <InputText name='direccion' value={this.state.direccion} type="text" className='form-control input-sm' placeholder='Direccion' onChange={this.changeValues} />
                            <br />
                            <Label>Latitud:</Label>
                            <InputText name='latitud' value={this.state.latitud} type="text" className='form-control input-sm' placeholder='Latitud' onChange={this.changeValues} />
                            <br />
                            <Label>Longitud:</Label>
                            <InputText name='longitud' value={this.state.longitud} type="text" className='form-control input-sm' placeholder='Longitud' onChange={this.changeValues} />
                            <br />        
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
        var options = [{ value: 0, label: 'Interna' },
        { value: 1, label: 'Externa' }]

        this.setState({ options_users: options })
    }

}//End
