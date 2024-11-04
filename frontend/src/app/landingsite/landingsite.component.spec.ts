import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingsiteComponent } from './landingsite.component';

describe('LandingsiteComponent', () => {
  let component: LandingsiteComponent;
  let fixture: ComponentFixture<LandingsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingsiteComponent]
    });
    fixture = TestBed.createComponent(LandingsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
