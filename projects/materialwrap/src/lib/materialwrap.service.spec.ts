import { TestBed } from '@angular/core/testing';

import { MaterialwrapService } from './materialwrap.service';

describe('MaterialwrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialwrapService = TestBed.get(MaterialwrapService);
    expect(service).toBeTruthy();
  });
});
