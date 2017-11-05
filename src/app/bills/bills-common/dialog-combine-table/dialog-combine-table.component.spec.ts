import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCombineTableComponent } from './dialog-combine-table.component';

describe('DialogCombineTableComponent', () => {
  let component: DialogCombineTableComponent;
  let fixture: ComponentFixture<DialogCombineTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCombineTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCombineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
