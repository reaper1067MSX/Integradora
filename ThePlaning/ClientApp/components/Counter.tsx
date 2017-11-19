import * as React from 'react';
import DayPicker from './general_components/form_components/daypicker/daypickerinput';

interface State {
    currentCount: number;
    fecha_caja: any;
}

export class Counter extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = {
                currentCount: 0,
                fecha_caja: ""
            };
    }

    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{ this.state.currentCount }</strong></p>

            <button onClick={() => { this.incrementCounter() }}>Increment</button>

            <br/>

            <h1>DayPicker</h1>

            <p>This is a simple calendar selector for a React component.</p>

            <DayPicker value={this.state.fecha_caja} onDayChange={this.changeDate} />
            
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
}
