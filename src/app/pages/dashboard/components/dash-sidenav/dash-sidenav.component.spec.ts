import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSidenavComponent } from './dash-sidenav.component';

describe('DashSidenavComponent', () => {
  let component: DashSidenavComponent;
  let fixture: ComponentFixture<DashSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
