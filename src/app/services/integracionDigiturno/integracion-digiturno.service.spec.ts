import { TestBed } from '@angular/core/testing';

import { IntegracionDigiturnoService } from './integracion-digiturno.service';

describe('IntegracionDigiturnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegracionDigiturnoService = TestBed.get(IntegracionDigiturnoService);
    expect(service).toBeTruthy();
  });
});
