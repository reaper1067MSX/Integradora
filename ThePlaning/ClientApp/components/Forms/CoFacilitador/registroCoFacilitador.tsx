import * as React from 'react';
import styled from 'styled-components'; //STYLES
import DayPicker from '../../general_components/form_components/date-picker/date-piker';
import * as moment from 'moment';
import Selects from '../../general_components/form_components/selects/select';
import { CuerpoForm, ContainerEdit, Row, HeaderForm, TituloForm, Topbar } from '../../general_components/form_components/container'; 


interface State {
    codigo: any;
    nombres: any;
    apellidos: any;
    club: any;
    fecha_nacimiento: moment.Moment;
    observaciones: any;
    estado: any;
    options_users: Array<any>;


}

export class registroCoFacilitador extends React.Component<{} , State> {
    constructor() { //Permite pasar valores al componente
        super();
        this.state = {
            codigo: "",
            nombres: "",
            apellidos:"",
            club: "",
            fecha_nacimiento: moment(),
            estado: "",
            observaciones: "",
            options_users: [],
            

        };

        //Funciones binds
        this.changeValues = this.changeValues.bind(this);
        this.ChangeDateNacimiento = this.ChangeDateNacimiento.bind(this);

    }

    public render() {
        return <div className="container">
            <HeaderForm>
                <TituloForm>Registro Co-Facilitador</TituloForm>
            </HeaderForm>
            <CuerpoForm>
                <Row>
                    <Container className='col-md-6' offset-md-6>
                        <Label>Codigo Apadrinado:</Label>
                        <InputText name='codigo' value={this.state.codigo} type="number" className='form-control input-sm' placeholder='Codigo' onChange={this.changeValues} />
                    </Container>                    
                </Row>
                <Row>
                    <Container className='col-md-8' >
                        <Label>Nombres:</Label>
                        <InputText name='nombres' value={this.state.nombres} type="string" className='form-control input-sm' placeholder='Nombres' onChange={this.changeValues} />
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-4' >
                        <Label>Fecha Nacimiento:</Label>
                        <DayPicker id="fecha_nacimiento" selected={this.state.fecha_nacimiento} onChange={this.ChangeDateNacimiento} />
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-8' >
                        <Label>Apellidos:</Label>
                        <InputText name='apellidos' value={this.state.apellidos} type="string" className='form-control input-sm' placeholder='Apellidos' onChange={this.changeValues} />
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-4' >
                        <Label>Club:</Label>
                        <Selects name="club" value={this.state.club} onChange={(value) => { this.setState({ estado: value }) }} options={this.state.options_users} />
                    </Container>
                </Row>
                <Row>
                    <Container className='col-md-12' >
                        <Label>Observaciones:</Label>
                        <br/>
                        <textarea name='observaciones' placeholder='Observaciones'/>   
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

    ChangeDateNacimiento(day) {
        //SAVE
        this.setState({ fecha_nacimiento: day });

        //LEERLO
        //moment.locale('es');
        //alert(moment(this.state.fecha_creacion).format('L'));
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