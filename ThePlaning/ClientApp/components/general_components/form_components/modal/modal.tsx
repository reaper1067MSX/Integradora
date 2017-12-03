// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import styled from 'styled-components';


export default class MyModal extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

    }

    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        const Overlay = styled.div`
            position          : fixed;
            top               : 0;
            left              : 0;
            right             : 0;
            bottom            : 0;
            background: rgba(0,0,0,0.7);
            z-index:  199;
          `;

        const Modal = styled.div`
            position: fixed;
              top: 25%;
              left: 25%;
              width: 50%;
              height: 50%;
            border                     : none;
            borderRadius               : 4px;
            padding                    : 20px;
            z.index:                   : 200;
            height: 100%;
          `;
        return (
            <Overlay>
                <Modal>
                    {this.props.children}
                </Modal>
            </Overlay>  
        );
    }
}