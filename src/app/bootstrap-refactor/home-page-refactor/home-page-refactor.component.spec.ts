import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageRefactorComponent } from './home-page-refactor.component';

describe('HomePageRefactorComponent', () => {
  let component: HomePageRefactorComponent;
  let fixture: ComponentFixture<HomePageRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageRefactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
