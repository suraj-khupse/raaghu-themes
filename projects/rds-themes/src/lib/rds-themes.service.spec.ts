import { TestBed } from '@angular/core/testing';
import { RdsThemesService } from './rds-themes.service';

describe('RdsThemeService', () => {
  let service: RdsThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdsThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
