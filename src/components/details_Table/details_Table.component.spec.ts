/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Details_TableComponent } from './details_Table.component';

describe('Details_TableComponent', () => {
  let component: Details_TableComponent;
  let fixture: ComponentFixture<Details_TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Details_TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Details_TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
