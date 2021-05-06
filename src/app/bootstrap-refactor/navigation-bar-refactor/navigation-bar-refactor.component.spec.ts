import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarRefactorComponent } from './navigation-bar-refactor.component';

describe('NavigationBarRefactorComponent', () => {
  let component: NavigationBarRefactorComponent;
  let fixture: ComponentFixture<NavigationBarRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationBarRefactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
