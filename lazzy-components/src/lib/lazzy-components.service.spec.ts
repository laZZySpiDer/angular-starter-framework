import { TestBed } from '@angular/core/testing';

import { LazzyComponentsService } from './lazzy-components.service';

describe('LazzyComponentsService', () => {
  let service: LazzyComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazzyComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
