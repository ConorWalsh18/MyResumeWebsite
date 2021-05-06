import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsRefactorComponent } from './skills-refactor.component';

describe('SkillsRefactorComponent', () => {
  let component: SkillsRefactorComponent;
  let fixture: ComponentFixture<SkillsRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsRefactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
