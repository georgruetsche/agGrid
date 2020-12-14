import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-enterprise';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    @ViewChild('agGrid') agGrid: AgGridAngular;

    title = 'AppProjectAgGrid';

    columnDefs = [
        {headerName: '',
        children: [
        { headerName: 'OE FS II', showRowGroup: 'OE FS II', cellRenderer: 'agGroupCellRenderer', minWidth: 150, tooltipField: 'OE FS II', resizable: true},
        { field: 'OE FS II', rowGroup: true, hide: true, suppressColumnsToolPanel: true},
        { headerName: 'OE FS III', showRowGroup: 'OE FS III', cellRenderer: 'agGroupCellRenderer', minWidth: 150, tooltipField: 'OE FS III', resizable: true},
        { field: 'OE FS III', rowGroup: true, hide: true, suppressColumnsToolPanel: true},
        { field: 'Mitarbeitername', rowGroup: false, hide: false, sortable: true, suppressColumnsToolPanel: false, resizable: true, suppressSizeToFit: true, tooltipField: 'Mitarbeitername'},
        ]},
        {headerName: 'DL',
        children: [
        { field: 'ILV', rowGroup: false, hide: false, sortable: true, resizable: true, tooltipField: 'ILV'},
        { field: 'Zeus', rowGroup: false, hide: false, sortable: true, resizable: true},
        { field: 'Delta', rowGroup: false, hide: false, sortable: true, resizable: true},
        { field: 'Delta in %', rowGroup: false, hide: false, sortable: true, resizable: true,}
        ]
    },
        {headerName: 'F&E',
            children: [
            { field: 'ILV', rowGroup: false, hide: false, sortable: true, resizable: true},
            { field: 'Zeus', rowGroup: false, hide: false, sortable: true, resizable: true },
            { field: 'Delta', rowGroup: false, hide: false, sortable: true, resizable: true },
            { field: 'Delta in %', rowGroup: false, hide: false, sortable: true, resizable: true  }
            ]
        },
        {headerName: 'Interne Projekte',
        children: [
        { field: 'ILV', rowGroup: false, hide: false, sortable: true, resizable: true},
        { field: 'Zeus', rowGroup: false, hide: false, sortable: true, resizable: true },
        { field: 'Delta', rowGroup: false, hide: false, sortable: true, resizable: true },
        { field: 'Delta in %', rowGroup: false, hide: false, sortable: true, resizable: true  }
        ]
    },
        {headerName: 'WB',
        children: [
        { field: 'ILV', rowGroup: false, hide: false, sortable: true, resizable: true },
        { field: 'Zeus', rowGroup: false, hide: false, sortable: true, resizable: true },
        { field: 'Delta', rowGroup: false, hide: false, sortable: true, resizable: true },
        { field: 'Delta in %', rowGroup: false, hide: false, sortable: true, resizable: true }
        ]
}
        

    ];


    rowData: any;
    
    groupMultiAutoColumn: true;


    constructor(private http: HttpClient) {

    }

    

    ngOnInit() {
        this.rowData = [
            { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W Abt. Banking, Finance, Insurance Ltg.', 'Mitarbeitername': 'Hans Muster'  },
            { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W Abt. Banking, Finance, Insurance Ltg.', 'Mitarbeitername': 'Peter Muster'  },
            { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W Abt. Banking, Finance, Insurance Ltg.', 'Mitarbeitername': 'Ralf Muster'  },
            { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W FS Corporate Finance & Private Equity' },
            { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W Lehre Banking, Finance, Insurance' },
            { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W Zentrum für Accounting&Controlling' },
            { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W Zentrum für Banking & Finance' },
            { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W Zentrum für Risk & Insurance' },
            
        ];
    }

    onGridReady() {
        this.agGrid.gridOptions.api.sizeColumnsToFit();
      }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data );
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }
}