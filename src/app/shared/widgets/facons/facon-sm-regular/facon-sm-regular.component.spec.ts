import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaconSmRegularComponent } from './facon-sm-regular.component';

describe('FaconSmRegularComponent', () => {
  let component: FaconSmRegularComponent;
  let fixture: ComponentFixture<FaconSmRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaconSmRegularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaconSmRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
