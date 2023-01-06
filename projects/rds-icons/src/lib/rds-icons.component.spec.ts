import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsIconsComponent } from './rds-icons.component';

describe('RdsIconsComponent', () => {
  let component: RdsIconsComponent;
  let fixture: ComponentFixture<RdsIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
