import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcasesComponent } from './addcases.component';

describe('AddcasesComponent', () => {
  let component: AddcasesComponent;
  let fixture: ComponentFixture<AddcasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcasesComponent]
    });
    fixture = TestBed.createComponent(AddcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
