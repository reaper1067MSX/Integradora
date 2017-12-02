// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import * as  moment from 'moment'; 
import DatePicker from 'react-datepicker';

import './react-datepicker.css';

interface Props {
    selected: any;
    onChange: any;
    id: any;
}

export default class DayPicker extends React.Component<Props, {}> {

    render() {
        return (
            <DatePicker id={this.props.id} selected={this.props.selected} onChange={this.props.onChange} />
        )
    }
} 



