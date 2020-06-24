import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoptopsComponent } from './loptops.component';

describe('LoptopsComponent', () => {
  let component: LoptopsComponent;
  let fixture: ComponentFixture<LoptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
