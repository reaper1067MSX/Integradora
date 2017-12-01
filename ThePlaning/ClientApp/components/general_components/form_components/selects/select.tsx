// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import Select from 'react-select';
import './react-select.css';


interface Props {
    name: string;
    value: any;
    onChange: any;
    options: Array<any>;
}

export default class Selects extends React.Component<Props, {}> {

    render() {
        return (
            <Select name={this.props.name} value={this.props.value} onChange={this.props.onChange} options={this.props.options}
            />
        )
    }

}




