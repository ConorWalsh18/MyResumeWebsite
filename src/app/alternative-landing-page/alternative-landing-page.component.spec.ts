import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeLandingPageComponent } from './alternative-landing-page.component';

describe('AlternativeLandingPageComponent', () => {
  let component: AlternativeLandingPageComponent;
  let fixture: ComponentFixture<AlternativeLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativeLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
