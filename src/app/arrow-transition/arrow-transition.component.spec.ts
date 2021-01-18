import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowTransitionComponent } from './arrow-transition.component';

describe('ArrowTransitionComponent', () => {
  let component: ArrowTransitionComponent;
  let fixture: ComponentFixture<ArrowTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
