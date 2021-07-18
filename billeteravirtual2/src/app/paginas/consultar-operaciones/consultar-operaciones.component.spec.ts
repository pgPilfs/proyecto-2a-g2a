import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarOperacionesComponent } from './consultar-operaciones.component';

describe('ConsultarOperacionesComponent', () => {
  let component: ConsultarOperacionesComponent;
  let fixture: ComponentFixture<ConsultarOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarOperacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
