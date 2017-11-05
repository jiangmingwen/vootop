import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifokComponent } from './verifok.component';

describe('VerifokComponent', () => {
  let component: VerifokComponent;
  let fixture: ComponentFixture<VerifokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
