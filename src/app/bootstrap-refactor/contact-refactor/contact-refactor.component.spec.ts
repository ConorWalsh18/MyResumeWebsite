import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRefactorComponent } from './contact-refactor.component';

describe('ContactRefactorComponent', () => {
  let component: ContactRefactorComponent;
  let fixture: ComponentFixture<ContactRefactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactRefactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactRefactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
