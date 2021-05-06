import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeRefactorComponent } from './about-me-refactor.component';

describe('AboutMeRefactorComponent', () => {
  let component: AboutMeRefactorComponent;
  let fixture: ComponentFixture<AboutMeRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeRefactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
