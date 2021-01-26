import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticSkillsComponent } from './static-skills.component';

describe('StaticSkillsComponent', () => {
  let component: StaticSkillsComponent;
  let fixture: ComponentFixture<StaticSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
