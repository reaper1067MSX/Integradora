import * as React from "react";
import { Component } from "react";
import styled from 'styled-components';

const BotonLink = styled.button`
    color: #337ab7;
    border-radius: 0;
    font-weight: normal;
    background-color: transparent;
    border-color: transparent;
    padding: 0px;
    width: 100%;
    &:hover {
        border-color: transparent;        
        text-decoration: underline;
    };
    &:focus {
        border-color: transparent;        
    };
    &:active {
        border-color: transparent;        
    };
`;


export default class LinkEliminarRenderer extends Component<any, any> {
    constructor(props) {
        super(props);
        this.invokeParentMethod = this.invokeParentMethod.bind(this);
    }

    invokeParentMethod() {
        this.props.context.componentParent.methodFromParent(this.props.node.id, this.props.node.data)
    }


    render() {
        return (
            <span><BotonLink type="button" onClick={this.invokeParentMethod}>Eliminar</BotonLink></span>
        );
    }


};
