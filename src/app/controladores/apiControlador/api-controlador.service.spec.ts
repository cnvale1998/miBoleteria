import { TestBed } from '@angular/core/testing';

import { ApiControladorService } from './api-controlador.service';

describe('ApiControladorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiControladorService = TestBed.get(ApiControladorService);
    expect(service).toBeTruthy();
  });
});
