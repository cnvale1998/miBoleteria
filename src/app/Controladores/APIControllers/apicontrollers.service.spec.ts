import { TestBed } from '@angular/core/testing';

import { APIControllersService } from './apicontrollers.service';

describe('APIControllersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIControllersService = TestBed.get(APIControllersService);
    expect(service).toBeTruthy();
  });
});
