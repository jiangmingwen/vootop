import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsCommonComponent } from './bills-common.component';

describe('BillsCommonComponent', () => {
  let component: BillsCommonComponent;
  let fixture: ComponentFixture<BillsCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
