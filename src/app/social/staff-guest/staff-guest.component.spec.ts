import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffGuestComponent } from './staff-guest.component';

describe('StaffGuestComponent', () => {
  let component: StaffGuestComponent;
  let fixture: ComponentFixture<StaffGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
