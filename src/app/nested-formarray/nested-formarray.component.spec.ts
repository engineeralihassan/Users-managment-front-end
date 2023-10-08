import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormarrayComponent } from './nested-formarray.component';

describe('NestedFormarrayComponent', () => {
  let component: NestedFormarrayComponent;
  let fixture: ComponentFixture<NestedFormarrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedFormarrayComponent]
    });
    fixture = TestBed.createComponent(NestedFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
