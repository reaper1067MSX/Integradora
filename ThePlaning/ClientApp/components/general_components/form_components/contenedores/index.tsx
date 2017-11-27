﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import styled from 'styled-components';


export const FormGroup = styled.div`
    margin-bottom: 3px;
`;

export const Row = styled.div`
    margin-right: -15px;
    margin-left: -15px;
`;

export const HeaderForm = styled.div`
    height: 35px;
    background-color: #eceff1;    
    border-bottom: 1px solid #cfd8dc;
    padding: 0.75rem 1.25rem;
`;

export const CuerpoForm = styled.div`
    padding-bottom: 10px;
    padding-top: 0;    
    padding-left: 10px;
    padding-right: 10px;        
`;

export const TituloForm = styled.p`
    font-size: 12px;
    font-weight: 700;
`;

export const ContainerEdit = styled.div`    
    border-bottom: 1px solid #cfd8dc;
    height: 70px;  
    padding: 10px;
    margin-bottom: 15px;
`;
