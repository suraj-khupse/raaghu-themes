import { TestBed } from '@angular/core/testing';

import { RdsIconsService } from './rds-icons.service';

describe('RdsIconsService', () => {
  let service: RdsIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
