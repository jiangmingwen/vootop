import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifnoComponent } from './verifno.component';

describe('VerifnoComponent', () => {
  let component: VerifnoComponent;
  let fixture: ComponentFixture<VerifnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
