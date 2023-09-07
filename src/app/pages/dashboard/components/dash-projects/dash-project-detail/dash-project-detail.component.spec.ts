import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProjectDetailComponent } from './dash-project-detail.component';

describe('DashProjectDetailComponent', () => {
  let component: DashProjectDetailComponent;
  let fixture: ComponentFixture<DashProjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashProjectDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
