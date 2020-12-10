import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        AgGridModule.withComponents([])
    ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
 
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AppProjectAgGrid'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AppProjectAgGrid');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('app-project-ag-grid app is running!');
  });

  it('grid API is not available until  `detectChanges`', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.agGrid).not.toBeTruthy();
});

it('grid API is available after `detectChanges`', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.agGrid.api).toBeTruthy();
});
});
