import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalDatosComponent } from './principal-datos.component';

describe('PrincipalDatosComponent', () => {
  let component: PrincipalDatosComponent;
  let fixture: ComponentFixture<PrincipalDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
