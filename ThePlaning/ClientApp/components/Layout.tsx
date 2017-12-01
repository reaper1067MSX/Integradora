import * as React from 'react';
import { NavPrueba } from './NavPrueba';
import TopBar from './general_components/form_components/topbar/TopBar';
import { CuerpoForm, ContainerEdit, Row } from './general_components/form_components/container';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <Row>
                {/*<TopBar />*/}
                    {/*TOP BAR POSITION*/}
            </Row>
            <Row>
                <div className='col-sm-3'>
                    <NavPrueba />
                    {/*<Menu />*/}
                </div>
                <div className='col-sm-9'>
                    { this.props.children }
                </div>
            </Row>
        </div>;
    }
}
