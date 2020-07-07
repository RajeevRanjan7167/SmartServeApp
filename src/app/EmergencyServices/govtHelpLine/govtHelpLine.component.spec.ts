/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GovtHelpLineComponent } from './govtHelpLine.component';

describe('GovtHelpLineComponent', () => {
  let component: GovtHelpLineComponent;
  let fixture: ComponentFixture<GovtHelpLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtHelpLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtHelpLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
