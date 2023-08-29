import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashArticlesComponent } from './dash-articles.component';

describe('DashArticlesComponent', () => {
  let component: DashArticlesComponent;
  let fixture: ComponentFixture<DashArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
