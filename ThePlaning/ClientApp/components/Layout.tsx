import * as React from 'react';
import { NavMenu } from './NavMenu';
import Menu from './general_components/menu/menu';
import { CuerpoForm, ContainerEdit, Row } from './general_components/form_components/contenedores'; 

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <Row>
                {/*TOP BAR POSITION*/}                
            </Row>
            <Row>
                <div className='col-sm-3'>
                    {/*<NavMenu /> */}
                    <Menu />
                </div>
                <div className='col-sm-9'>
                    { this.props.children }
                </div>
            </Row>
        </div>;
    }
}
