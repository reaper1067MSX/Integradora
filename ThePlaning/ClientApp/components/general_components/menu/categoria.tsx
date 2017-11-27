// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import MenuItem from './menuItem';
import { CuerpoForm, ContainerEdit, Row } from '../form_components/contenedores';
import './category.css';

export interface Props {
    name: any;
    items: any;
    icon: any;
}

export interface State {
    visible: any;
}

class Categoria extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false        
        }
    }

    handClick(event) {
        event.preventDefault();
        this.setState({ visible: !this.state.visible})
    }


    public render() {
        return <div className='category'>
            <li>
                <h3 onClick={this.handClick.bind(this)}><i className={this.props.icon} aria-hidden="true"></i>{this.props.name}</h3>
                <ul className={this.state.visible?'visible':'no-visible'}>
                    {this.props.items.map((item, i) => {
                        return <MenuItem name={item.option} link={item.link} key={i} />
                    })}                    
                </ul>
            </li>
        </div>
    }
}

export default Categoria;