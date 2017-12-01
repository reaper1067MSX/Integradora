import * as React from 'react';
import DayPicker from './general_components/form_components/daypicker/daypickerinput';
import Selects from './general_components/form_components/selects/select';
import { CuerpoForm, ContainerEdit, Row } from './general_components/form_components/container'; 

interface State {
    currentCount: number;
    fecha_caja: any;
    options_users: Array<any>
    select_combo: any;
}

export class Counter extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = {
                currentCount: 0,
                fecha_caja: "",
                options_users: [],
                select_combo: ""

            };
    }


    public render() {
        return <div>
            <CuerpoForm>
                <Row>
                    <div className='col-md-12'>
                        <h1>Counter</h1>
                    </div>
                </Row>
                <Row>
                    <div className='col-md-12'>
                        <p>This is a simple example of a React component.</p>
                    </div>
                </Row>
                <Row>
                    <div className='col-md-12'>
                        <p>Current count: <strong>{this.state.currentCount}</strong></p>

                        <button onClick={() => { this.incrementCounter() }}>Increment</button>

                        <br />

                        <h1>DayPicker</h1>

                        <p>This is a simple calendar selector for a React component.</p>

                        <DayPicker value={this.state.fecha_caja} onDayChange={this.changeDate} />
                    </div>
                </Row>
                <Row>
                    <div className='col-md-12'>
                        <Selects name="usuarios" value={this.state.select_combo} onChange={(value) => { this.setState({ select_combo: value })}} options={this.state.options_users} />
                    </div>
                </Row>
            </CuerpoForm>
              
        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    changeDate(event) {
        const target = event.target;
        const value = target.value;
        this.setState({ fecha_caja: value });
    }

    

    //REaliza todas estas operaciones al renderizar el form
    componentDidMount() {
        var options = [{ value: 0, label: 'YORK' },
                            { value: 1, label: 'Amadeus' },
                            { value: 2, label: 'Landa' },
                            { value: 3, label: 'FORK' }]

        this.setState({ options_users: options})

    }
}
