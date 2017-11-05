import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasswordComponent } from './repassword.component';

describe('RepasswordComponent', () => {
  let component: RepasswordComponent;
  let fixture: ComponentFixture<RepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
