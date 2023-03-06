import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlescategoryComponent } from './articlescategory.component';

describe('ArticlescategoryComponent', () => {
  let component: ArticlescategoryComponent;
  let fixture: ComponentFixture<ArticlescategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlescategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlescategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
