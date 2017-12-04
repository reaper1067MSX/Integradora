// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import styled from 'styled-components';
import Modal from 'react-responsive-modal';

export default class MyModal extends React.Component<any, any> {
    state = {
        open: false,
    };

    onOpenModal = () => {

        this.setState({ open: true });
    };

    onCloseModal(){
       this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <Modal open={this.props.open} onClose={this.props.onClose} little closeOnOverlayClick={false} closeOnEsc={false}>
                    {this.props.children}
                </Modal>
            </div>
        );
    }
}