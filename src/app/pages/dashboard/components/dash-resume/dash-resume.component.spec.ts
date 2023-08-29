import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashResumeComponent } from './dash-resume.component';

describe('DashResumeComponent', () => {
  let component: DashResumeComponent;
  let fixture: ComponentFixture<DashResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
