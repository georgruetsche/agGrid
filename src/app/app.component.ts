import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { FormControl, FormGroup } from '@angular/forms';
import { RowDataService } from './shared/row-data-service';


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
        { headerName: 'OE FS II', showRowGroup: 'OE FS II', cellRenderer: 'agGroupCellRenderer', minWidth: 200, tooltipField: 'OE FS II',
        pinned: 'left', sortable: true, cellRendererParams: {suppressCount: true}, wrapText: true, autoHeight: true},
        { field: 'OE FS II', rowGroup: true, hide: true, suppressColumnsToolPanel: true},
        { headerName: 'OE FS III', showRowGroup: 'OE FS III', cellRenderer: 'agGroupCellRenderer', minWidth: 200, tooltipField: 'OE FS III',
        pinned: 'left', sortable: true, cellRendererParams: {suppressCount: true}, wrapText: true, autoHeight: true},
        { field: 'OE FS III', rowGroup: true, hide: true, suppressColumnsToolPanel: true},
        { field: 'Mitarbeitername', rowGroup: false, hide: false, sortable: true, suppressColumnsToolPanel: false, resizable: true,
        suppressSizeToFit: true, tooltipField: 'Mitarbeitername', pinned: 'left'},
        ]},

        {headerName: 'DL',
        children: [
        { headerName: 'ILV', field: 'DL.ILV', hide: false, sortable: true, resizable: true,
        tooltipField: 'ILV', aggFunc: 'sum', enableValue: true},
        { headerName: 'Zeus', field: 'DL.Zeus', hide: false, sortable: true, resizable: true,
        aggFunc: 'sum', enableValue: true},
        { headerName: 'Δ', field: 'DL.Δ', hide: false, sortable: true, resizable: true,
        valueGetter: this.deltaValueGetter, enableValue: true, cellStyle: { fontWeight: 'bold'}},
        { headerName: 'Δ%', field: 'DL.Δ%', hide: false, sortable: true, resizable:
        true, aggFunc: 'sum', enableValue: true, cellStyle: { fontWeight: 'bold'}},
        ]},

        {headerName: 'FE',
            children: [
            { headerName: 'ILV', field: 'FE.ILV', rowGroup: false, hide: false, sortable: true, resizable: true,
            aggFunc: 'sum', enableValue: true},
            { headerName: 'Zeus', field: 'FE.Zeus',  rowGroup: false, hide: false, sortable: true, resizable: true,
            aggFunc: 'sum', enableValue: true},
            { headerName: 'Δ', field: 'FE.Δ', rowGroup: false, hide: false, sortable: true, resizable:
            true, valueGetter: this.deltaValueGetter, enableValue: true, cellStyle: { fontWeight: 'bold'}},
            { headerName: 'Δ%', field: 'FE.Δ%', rowGroup: false, hide: false, sortable: true, aggFunc: 'sum', resizable: true,
            enableValue: true, cellStyle: { fontWeight: 'bold'}},
            ]},

        {headerName: 'Interne_Projekte',
        children: [
        { headerName: 'ILV', field: 'Interne_Projekte.ILV', rowGroup: false, hide: false, sortable: true, resizable: true,
        aggFunc: 'sum', enableValue: true},
        { headerName: 'Zeus', field: 'Interne_Projekte.Zeus', rowGroup: false, hide: false, sortable: true, resizable: true,
        aggFunc: 'sum', enableValue: true},
        { headerName: 'Δ', field: 'Interne_Projekte.Δ', rowGroup: false, hide: false, sortable: true, resizable: true,
        valueGetter: this.deltaValueGetter, enableValue: true, cellStyle: { fontWeight: 'bold'}},
        { headerName: 'Δ%', field: 'Interne_Projekte.Δ%', rowGroup: false, hide: false, sortable: true, resizable: true,
        aggFunc: 'sum', enableValue: true, cellStyle: { fontWeight: 'bold'}},
        ]},

        {headerName: 'WB',
        children: [
        { headerName: 'ILV', field: 'WB.ILV', rowGroup: false, hide: false, sortable: true, resizable: true,
        aggFunc: 'sum', enableValue: true},
        { headerName: 'Zeus', field: 'WB.Zeus', rowGroup: false, hide: false, sortable: true, resizable: true,
        aggFunc: 'sum', enableValue: true},
        { headerName: 'Δ', field: 'WB.Δ', rowGroup: false, hide: false, sortable: true, resizable: true,
        valueGetter: this.deltaValueGetter, enableValue: true, cellStyle: { fontWeight: 'bold'}},
        { headerName: 'Δ%', field: 'WB.Δ%', rowGroup: false, hide: false, sortable: true, resizable: true,
        aggFunc: 'sum', enableValue: true, cellStyle: { fontWeight: 'bold'}},
        ]},

        {headerName: 'Gesamtergebnis',
        children: [
        { headerName: 'ILV', rowGroup: false, hide: false, sortable: true, resizable: true,
        valueGetter: this.totalValueGetter, enableValue: true},
        { headerName: 'Zeus', rowGroup: false, hide: false, sortable: true, resizable: true,
        valueGetter: this.totalValueGetter, enableValue: true},
        { headerName: 'Δ', rowGroup: false, hide: false, sortable: true, resizable: true,
        valueGetter: this.totalValueGetter, enableValue: true, cellStyle: { fontWeight: 'bold'}},
        { headerName: 'Δ%', rowGroup: false, hide: false, sortable: true, resizable: true,
        valueGetter: this.totalValueGetter, enableValue: true, cellStyle: {fontWeight: 'bold'}},
        ]},
    ];

    profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
      });

    theme = 'ag-theme-balham';

    rowData: object[];

    groupMultiAutoColumn: true;

    deltaValueGetter(params): number {
        let values = [];
        if (params.colDef.field === 'DL.Δ') {
            values = ['DL.ILV', 'DL.Zeus'];
        }
        if (params.colDef.field === 'FE.Δ') {
            values = ['FE.ILV', 'FE.Zeus'];
        }
        if (params.colDef.field === 'Interne_Projekte.Δ') {
            values = ['Interne_Projekte.ILV', 'Interne_Projekte.Zeus'];
        }
        if (params.colDef.field === 'WB.Δ') {
            values = ['WB.ILV', 'WB.Zeus'];
        }
        return params.getValue(values[0]) - params.getValue(values[1]);
    }


    totalValueGetter(params): number {
        let values = [];
        if (params.colDef.headerName === 'ILV' || params.colDef.headerName === 'Zeus') {
            if (params.colDef.headerName === 'ILV') {
                values = ['DL.ILV', 'FE.ILV', 'Interne_Projekte.ILV', 'WB.ILV'];
            }
            if (params.colDef.headerName === 'Zeus') {
                values = ['DL.Zeus', 'FE.Zeus', 'Interne_Projekte.Zeus', 'WB.Zeus'];
            }
            return params.getValue(values[0]) + params.getValue(values[1]) + params.getValue(values[2]) + params.getValue(values[3]);
        }
        if (params.colDef.headerName === 'Δ') {
            const valuesILV = ['DL.ILV', 'FE.ILV', 'Interne_Projekte.ILV', 'WB.ILV'];
            const valuesZeus = ['DL.Zeus', 'FE.Zeus', 'Interne_Projekte.Zeus', 'WB.Zeus'];
            // tslint:disable-next-line: max-line-length
            return (params.getValue(valuesILV[0]) + params.getValue(valuesILV[1]) + params.getValue(valuesILV[2]) + params.getValue(valuesILV[3])) - (params.getValue(valuesZeus[0]) + params.getValue(valuesZeus[1]) + params.getValue(valuesZeus[2]) + params.getValue(valuesZeus[3]));
        }
        if (params.colDef.headerName === 'Δ%') {
            const valuesDelta = ['DL.Δ', 'FE.Δ', 'Interne_Projekte.Δ', 'WB.Δ'];
            const valuesILV = ['DL.ILV', 'FE.ILV', 'Interne_Projekte.ILV', 'WB.ILV'];
            // tslint:disable-next-line: max-line-length
            const totalDelta = params.getValue(valuesDelta[0]) + params.getValue(valuesDelta[1]) + params.getValue(valuesDelta[2]) + params.getValue(valuesDelta[3]);
            // tslint:disable-next-line: max-line-length
            const totalILV =  params.getValue(valuesILV[0]) + params.getValue(valuesILV[1]) + params.getValue(valuesILV[2]) + params.getValue(valuesILV[3]);
            const totalDif = (totalDelta / totalILV) * 100;
            return Math.round(totalDif);
        }
    }

    constructor(private http: HttpClient, private rowDataService: RowDataService) {
    }

    ngOnInit(): void {
        this.rowData = this.rowDataService.getAllData();
    }

    onGridReady(): void {
        this.agGrid.gridOptions.api.sizeColumnsToFit();
      }

    getTheme(): string {
        return 'ag-theme-balham-dark';
    }

    getBooleanValue(cssSelector): boolean {
      return document.querySelector(cssSelector) ? document.querySelector(cssSelector).checked : false;
    }

    getTextValue(cssSelector): string {
      return document.querySelector(cssSelector).value;
    }

    getNumericValue(cssSelector): any {
      const value = parseFloat(this.getTextValue(cssSelector));
      if (isNaN(value)) {
        const message = 'Invalid number entered in ' + cssSelector + ' field';
        alert(message);
        throw new Error(message);
      }
      return value;
    }

    myColumnWidthCallback(params): number {
      const originalWidth = params.column.getActualWidth();
      if (params.index < 7) {
        return originalWidth;
      }
      return 30;
    }

    onBtExport(): void {
      const params = {
        sheetName: 'export',
        suppressTextAsCDATA: this.getBooleanValue('#suppressTextAsCDATA'),
        rowHeight: this.getBooleanValue('#rowHeight') ? this.getNumericValue('#rowHeightValue') : undefined,
        headerRowHeight: this.getBooleanValue('#headerRowHeight') ? this.getNumericValue('#headerRowHeightValue') : undefined,
        columnGroups: true,
      };
      this.agGrid.gridOptions.api.exportDataAsExcel(params);
    }


}
