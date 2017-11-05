import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsidenavComponent } from './gsidenav.component';

describe('GsidenavComponent', () => {
  let component: GsidenavComponent;
  let fixture: ComponentFixture<GsidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
