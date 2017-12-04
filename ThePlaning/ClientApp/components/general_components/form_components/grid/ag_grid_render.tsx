import * as React from "react";
import { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColumnApi, GridApi } from "ag-grid";
import { GridOptions } from "ag-grid";
import styled, { StyledFunction } from 'styled-components'; //STYLES

import './ag_grid.css';
import './theme_silver.css';
import './theme-bootstrap.css';

import DecimalRenderer from './col_render_numerodecimal';
import EnteroRenderer from './col_render_numeroentero';
import LinkEliminarRenderer from './col_render_link_elim';
import FechaRenderer from './col_render_fecha_corta';
import EnteroEditor from './col_edit_numeroentero';
import DecimalEditor from './col_edit_numerodecimal';

interface Props {
    altura: any;
}



export default class AgGridRender extends Component<any, any> {

    gridOptions: GridOptions;
    //private gridOptions: GridOptions = <GridOptions>{};
    constructor() {
        super();
        //this.gridOptions = this.props.gridOptions;
    }

    renderizarColumnas(def_columnas_input) {
        let def_columnas = [];

        def_columnas_input.forEach(function (columna) {
            console.log("COLUNMA", columna)

            let defcol: any = {};

            defcol.headerName = columna.header;
            defcol.field = columna.field;
            defcol.width = columna.width;
            defcol.editable = columna.editable;
            defcol.valueFormatter = columna.valueFormatter;
            defcol.valueGetter = columna.valueGetter;
            defcol.checkboxSelection = columna.checkboxSelection;
            defcol.suppressSorting = columna.suppressSorting;
            defcol.suppressMenu = columna.suppressMenu;
            defcol.suppressFilter = columna.suppressFilter;
            defcol.pinned = columna.pinned;

            switch (columna.type) {
                case "num_entero":
                    defcol.cellRendererFramework = EnteroRenderer;
                    console.log("num_entero")
                    break;
                case "num_decimal":
                    defcol.cellRendererFramework = DecimalRenderer;
                    break;
                case "link_elim":
                    defcol.cellRendererFramework = LinkEliminarRenderer;
                    break;
                case "fecha":
                    defcol.cellRendererFramework = FechaRenderer;
                    break;
                case "num_entero_edit":
                    defcol.cellEditorFramework = EnteroEditor;
                    defcol.cellClass = 'number-cell';
                    break;
                case "num_decimal_edit":
                    defcol.cellEditorFramework = DecimalEditor;
                    defcol.cellClass = 'number-cell';
                    break;

                default:
                    break;
            }

            def_columnas.push(defcol);
        });
        return def_columnas;
    }

    
    componentDidUpdate() {
        //this.props.gridOptions.api.refreshCells();
        this.gridOptions = this.props.gridOptions;
    }
    

    render() {
        let containerStyle = {
            width: '100%',
            height: this.props.ancho
        };

        return (
            
            <ContenedorGrid  className="ag-silver">
                <AgGridReact
                    columnDefs={this.renderizarColumnas(this.props.columnDefs)}
                    rowData={this.props.rowData}
                    
                    onGridReady={this.props.onGridReady}>
                </AgGridReact>
            </ContenedorGrid>
    
        )
    }

    
};


const ContenedorGrid = styled.div`
        width: 100%;
        height: 160px;
        margin-bottom: 10px;
        margin-top: 10px;
    `;

{/*<div style={containerStyle} className="ag-silver">  height: ${(p: Props) => p.altura};     */}
                    {/*</div>*/}