import { TestBed } from '@angular/core/testing';

import { UrfumaterialService } from './urfumaterial.service';

describe('UrfumaterialService', () => {
  let service: UrfumaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrfumaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
