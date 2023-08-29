import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProjectsComponent } from './dash-projects.component';

describe('DashProjectsComponent', () => {
  let component: DashProjectsComponent;
  let fixture: ComponentFixture<DashProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
