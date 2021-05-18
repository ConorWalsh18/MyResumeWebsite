import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRefactorComponent } from './main-refactor.component';

describe('MainRefactorComponent', () => {
  let component: MainRefactorComponent;
  let fixture: ComponentFixture<MainRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRefactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
