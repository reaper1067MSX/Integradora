// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import './fielddatestyle.css';

interface Props {
    value: any;
    onDayChange: any;
}


export default class DayPicker extends React.Component<Props, {}> {

    render() {
        return (
            <DayPickerInput value={this.props.value} placeholder="DD/MM/YYYY" format="DD/MM/YYYY"
                onDayChange={this.props.onDayChange} />
        )
    }
} 