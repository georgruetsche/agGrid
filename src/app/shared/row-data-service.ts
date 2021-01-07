import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RowDataService {
  rowData: object[];

  constructor() {
    this.rowData = [
      { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W Abt. Banking, Finance, Insurance Ltg.',
      Mitarbeitername: 'Hans Muster', DL: {ILV: 0, Zeus: -40, 'Δ%': 0 }, FE: {ILV: -192, Zeus: -60, 'Δ%': 69 },
      Interne_Projekte: {ILV: -843, Zeus: -600, 'Δ%': 29 }, WB: {ILV: -24, Zeus: -8, 'Δ%': 69 }},
      { 'OE FS II': 'W Abteilung Banking, Finance, Insurance Gesamt', 'OE FS III': 'W Abt. Banking, Finance, Insurance Ltg.',
      Mitarbeitername: 'Peter Muster', DL: {ILV: 0, Zeus: 0, 'Δ%': 0 }, FE: {ILV: -17, Zeus: 0, 'Δ%': 100 },
      Interne_Projekte: {ILV: -42, Zeus: -70, 'Δ%': -66 }, WB: {ILV: 0, Zeus: 0, 'Δ%': 0 }},
      { 'OE FS II': 'W Abteilung Business Law Gesamt', 'OE FS III': 'W Abteilung Business Law Ltg. Gesamt',
      Mitarbeitername: 'Petra Müller', DL: {ILV: 0, Zeus: 0, 'Δ%': 0 }, FE: {ILV: 0, Zeus: 0, 'Δ%': 0 },
      Interne_Projekte: {ILV: -55, Zeus: -75, 'Δ%': -37 }, WB: {ILV: 0, Zeus: 0, 'Δ%': 0 }},
      { 'OE FS II': 'W Abteilung Business Law Gesamt', 'OE FS III': 'W Abteilung Business Law Ltg. Gesamt',
      Mitarbeitername: 'Ramon Müller', DL: {ILV: -63, Zeus: 0, 'Δ%': 100}, FE: {ILV: 0, Zeus: 0, 'Δ%': 0 },
      Interne_Projekte: {ILV: -278, Zeus: -618, 'Δ%': -123 }, WB: {ILV: -300, Zeus: 0, 'Δ%': 100 }},
      { 'OE FS II': 'W Abteilung Business Test Gesamt', 'OE FS III': 'W Abteilung Business Law Ltg. Gesamt',
      Mitarbeitername: 'Petra Müller', DL: {ILV: 0, Zeus: 0, 'Δ%': 0 }, FE: {ILV: 0, Zeus: 0, 'Δ%': 0 },
      Interne_Projekte: {ILV: -55, Zeus: -75, 'Δ%': -37 }, WB: {ILV: 0, Zeus: 0, 'Δ%': 0 }},
      { 'OE FS II': 'W Abteilung Business Test Gesamt', 'OE FS III': 'W Abteilung Business Law Ltg. Gesamt',
      Mitarbeitername: 'Ramon Müller', DL: {ILV: -63, Zeus: 0, 'Δ%': 100}, FE: {ILV: 0, Zeus: 0, 'Δ%': 0 },
      Interne_Projekte: {ILV: -278, Zeus: -618, 'Δ%': -123 }, WB: {ILV: -300, Zeus: 0, 'Δ%': 100 }},
    ];
   }
   // tslint:disable-next-line: typedef
   getAllData() {
     return this.rowData;
   }
}
