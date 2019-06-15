import { TestBed } from '@angular/core/testing';

import { EntradaControllersService } from './entrada-controllers.service';

describe('EntradaControllersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntradaControllersService = TestBed.get(EntradaControllersService);
    expect(service).toBeTruthy();
  });
});
