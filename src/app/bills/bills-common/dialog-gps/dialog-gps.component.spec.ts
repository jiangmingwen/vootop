import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGpsComponent } from './dialog-gps.component';

describe('DialogGpsComponent', () => {
  let component: DialogGpsComponent;
  let fixture: ComponentFixture<DialogGpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogGpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
