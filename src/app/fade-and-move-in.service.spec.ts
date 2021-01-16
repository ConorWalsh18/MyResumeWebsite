import { TestBed } from '@angular/core/testing';

import { FadeAndMoveInService } from './fade-and-move-in.service';

describe('FadeAndMoveInService', () => {
  let service: FadeAndMoveInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FadeAndMoveInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
