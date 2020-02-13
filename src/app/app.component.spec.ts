import {async, TestBed} from '@angular/core/testing';
import {ListaComponent} from './app.component';

describe('ListaProductosComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListaComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ListaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'listaCompra'`, () => {
    const fixture = TestBed.createComponent(ListaComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('listaCompra');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ListaComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('listaCompra app is running!');
  });
});
