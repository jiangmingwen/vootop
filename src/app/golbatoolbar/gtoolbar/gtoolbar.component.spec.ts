import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtoolbarComponent } from './gtoolbar.component';

describe('GtoolbarComponent', () => {
  let component: GtoolbarComponent;
  let fixture: ComponentFixture<GtoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
