import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockRevealComponent } from './block-reveal.component';

describe('BlockRevealComponent', () => {
  let component: BlockRevealComponent;
  let fixture: ComponentFixture<BlockRevealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockRevealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockRevealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
