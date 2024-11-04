import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddclerkComponent } from './addclerk.component';

describe('AddclerkComponent', () => {
  let component: AddclerkComponent;
  let fixture: ComponentFixture<AddclerkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddclerkComponent]
    });
    fixture = TestBed.createComponent(AddclerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
