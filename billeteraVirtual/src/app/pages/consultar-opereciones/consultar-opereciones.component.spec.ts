import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarOperecionesComponent } from './consultar-opereciones.component';

describe('ConsultarOperecionesComponent', () => {
  let component: ConsultarOperecionesComponent;
  let fixture: ComponentFixture<ConsultarOperecionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarOperecionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarOperecionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
