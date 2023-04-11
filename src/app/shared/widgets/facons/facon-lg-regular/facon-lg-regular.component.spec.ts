import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaconLgRegularComponent } from './facon-lg-regular.component';

describe('FaconLgRegularComponent', () => {
  let component: FaconLgRegularComponent;
  let fixture: ComponentFixture<FaconLgRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaconLgRegularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaconLgRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
