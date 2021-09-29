import { TestBed } from '@angular/core/testing';

import { OpercionesService } from './operciones.service';

describe('OpercionesService', () => {
  let service: OpercionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpercionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
