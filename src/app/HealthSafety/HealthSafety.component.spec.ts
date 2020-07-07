/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HealthSafetyComponent } from './HealthSafety.component';

describe('HealthSafetyComponent', () => {
  let component: HealthSafetyComponent;
  let fixture: ComponentFixture<HealthSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
