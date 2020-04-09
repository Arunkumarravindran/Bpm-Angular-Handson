import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePharmachyDetailsComponent } from './update-pharmachy-details.component';

describe('UpdatePharmachyDetailsComponent', () => {
  let component: UpdatePharmachyDetailsComponent;
  let fixture: ComponentFixture<UpdatePharmachyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePharmachyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePharmachyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
