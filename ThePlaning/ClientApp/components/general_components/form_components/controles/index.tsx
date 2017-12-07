// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import styled from 'styled-components';


export const Label = styled.label` //LABEL STYLE
      display: inline-block;  
      font-size: 14px;
    `;

export const InputText = styled.input`
      height: 25px;
      padding: 5px 10px;
      font-size: 13px;
      line-height: 1.5;
      border-radius: 3px;
      display: block;
      width: 100%;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
    `;

export const TextArea = styled.textarea`
      height: 45px;
      padding: 5px 10px;
      font-size: 11px;
      line-height: 1.5;
      border-radius: 3px;
      display: block;
      width: 100%;
      color: #555;
      background-color: #fff;
      border: 1px solid #ccc;
    `;