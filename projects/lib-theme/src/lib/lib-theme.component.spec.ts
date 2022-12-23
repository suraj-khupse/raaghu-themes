import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibThemeComponent } from './lib-theme.component';

describe('LibThemeComponent', () => {
  let component: LibThemeComponent;
  let fixture: ComponentFixture<LibThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
