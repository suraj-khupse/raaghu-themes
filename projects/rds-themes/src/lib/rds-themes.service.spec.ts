import { TestBed } from '@angular/core/testing';

import { LibThemeService } from './rds-themes.service';

describe('LibThemeService', () => {
  let service: LibThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
