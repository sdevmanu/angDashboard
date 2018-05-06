import { TestBed, inject } from '@angular/core/testing';

import { ImagesDService } from './images-d.service';

describe('ImagesDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagesDService]
    });
  });

  it('should be created', inject([ImagesDService], (service: ImagesDService) => {
    expect(service).toBeTruthy();
  }));
});
