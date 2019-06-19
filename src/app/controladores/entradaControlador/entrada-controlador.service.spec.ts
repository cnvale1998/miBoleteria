import { TestBed } from '@angular/core/testing';

import { EntradaControladorService } from './entrada-controlador.service';

describe('EntradaControladorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntradaControladorService = TestBed.get(EntradaControladorService);
    expect(service).toBeTruthy();
  });
});
