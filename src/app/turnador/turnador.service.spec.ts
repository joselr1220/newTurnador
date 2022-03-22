import { TestBed } from '@angular/core/testing';

import { TurnadorService } from './turnador.service';

describe('TurnadorService', () => {
  let service: TurnadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurnadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
