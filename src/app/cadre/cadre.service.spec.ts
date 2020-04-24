import { TestBed } from '@angular/core/testing';

import { CadreService } from './cadre.service';

describe('CadreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadreService = TestBed.get(CadreService);
    expect(service).toBeTruthy();
  });
});
