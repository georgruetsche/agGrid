import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridAngular;

    title = 'my-app';

    columnDefs = [
        { field: 'make', sortable: true, filter: true, checkboxSelection: true },
        { field: 'model', sortable: true, filter: true },
        { field: 'price', sortable: true, filter: true },
        { field: 'available', sortable: true, filter: true }
    ];

    rowData: any;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data );
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
}