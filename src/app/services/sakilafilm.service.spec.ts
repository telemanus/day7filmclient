import { TestBed, inject } from '@angular/core/testing';

import { SakilafilmService } from './sakilafilm.service';

describe('SakilafilmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SakilafilmService]
    });
  });

  it('should be created', inject([SakilafilmService], (service: SakilafilmService) => {
    expect(service).toBeTruthy();
  }));
});
