import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeTableComponent } from './dialog-change-table.component';

describe('DialogChangeTableComponent', () => {
  let component: DialogChangeTableComponent;
  let fixture: ComponentFixture<DialogChangeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogChangeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChangeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
