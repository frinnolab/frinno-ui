import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaconMdRegularComponent } from './facon-md-regular.component';

describe('FaconMdRegularComponent', () => {
  let component: FaconMdRegularComponent;
  let fixture: ComponentFixture<FaconMdRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaconMdRegularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaconMdRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
