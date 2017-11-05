import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPrintBillComponent } from './dialog-print-bill.component';

describe('DialogPrintBillComponent', () => {
  let component: DialogPrintBillComponent;
  let fixture: ComponentFixture<DialogPrintBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPrintBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPrintBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
