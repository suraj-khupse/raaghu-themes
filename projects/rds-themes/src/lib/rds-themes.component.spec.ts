import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsThemesComponent } from './rds-themes.component';

describe('RdsThemeComponent', () => {
  let component: RdsThemesComponent;
  let fixture: ComponentFixture<RdsThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsThemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdsThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
