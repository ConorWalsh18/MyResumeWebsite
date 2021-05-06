import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDownloadRefactorComponent } from './resume-download-refactor.component';

describe('ResumeDownloadRefactorComponent', () => {
  let component: ResumeDownloadRefactorComponent;
  let fixture: ComponentFixture<ResumeDownloadRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeDownloadRefactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDownloadRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
