import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjudgeComponent } from './addjudge.component';

describe('AddjudgeComponent', () => {
  let component: AddjudgeComponent;
  let fixture: ComponentFixture<AddjudgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddjudgeComponent]
    });
    fixture = TestBed.createComponent(AddjudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
