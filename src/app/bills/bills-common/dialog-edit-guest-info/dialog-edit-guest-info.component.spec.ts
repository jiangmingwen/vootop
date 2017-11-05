import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditGuestInfoComponent } from './dialog-edit-guest-info.component';

describe('DialogEditGuestInfoComponent', () => {
  let component: DialogEditGuestInfoComponent;
  let fixture: ComponentFixture<DialogEditGuestInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditGuestInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditGuestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
