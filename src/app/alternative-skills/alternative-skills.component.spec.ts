import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeSkillsComponent } from './alternative-skills.component';

describe('AlternativeSkillsComponent', () => {
  let component: AlternativeSkillsComponent;
  let fixture: ComponentFixture<AlternativeSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativeSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
