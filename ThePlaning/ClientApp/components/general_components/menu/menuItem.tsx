// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { CuerpoForm, ContainerEdit, Row } from '../form_components/contenedores';
import { Link, NavLink } from 'react-router-dom';


export interface Props {
    name: any;
    link: string;
}

class MenuItem extends React.Component<Props, {}> {

    public render() {
        return <div className='category'>
            <li>
                <NavLink to={this.props.link} exact activeClassName='active'>
                    {/*<span className='glyphicon glyphicon-home'></span>*/}<p>{this.props.name}</p>
                </NavLink>
            </li>

        </div>
    }
}

export default MenuItem;