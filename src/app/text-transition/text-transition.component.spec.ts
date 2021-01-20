import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTransitionComponent } from './text-transition.component';

describe('TextTransitionComponent', () => {
  let component: TextTransitionComponent;
  let fixture: ComponentFixture<TextTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
