import * as React from 'react';
import { NavBar } from './menu/NavBar';
import TopBar from './topbar/TopBar';
import { CuerpoForm, ContainerEdit, Row } from '../container';

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
                    <NavBar />
                    {/*<Menu />*/}
                </div>
                <div className='col-sm-9'>
                    { this.props.children }
                </div>
            </Row>
        </div>;
    }
}
