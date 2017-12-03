import * as React from "react";
import { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColumnApi, GridApi } from "ag-grid";

import './ag_grid.css';
import './theme_silver.css';

interface State {
    rowData: any[],
    columnDefs: any[]
}

export default class SimpleGridExample extends Component<{}, State> {
    private gridApi: GridApi;
    private columnApi: ColumnApi;

    constructor(props: any) {
        super(props);

        this.state = {
            columnDefs: this.createColumnDefs(),
            rowData: this.createRowData()
        }
    }

    onGridReady(params: any) {
        this.gridApi = params.api;
        this.columnApi = params.columnApi;

        this.gridApi.sizeColumnsToFit();
    }

    createColumnDefs() {
        return [
            { headerName: "Make", field: "make" },
            { headerName: "Model", field: "model" },
            { headerName: "Price", field: "price" }
        ];
    }

    createRowData() {
        return [
            { make: "Toyota", model: "Celica", price: 35000 },
            { make: "Ford", model: "Mondeo", price: 32000 },
            { make: "Porsche", model: "Boxter", price: 72000 }
        ];
    }

    render() {
        let containerStyle = {
            height: 115,
            width: 500
        };

        return (
            <div style={containerStyle} className="ag-silver">
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}

                    onGridReady={this.onGridReady}>
                </AgGridReact>
            </div>
        )
    }
};
