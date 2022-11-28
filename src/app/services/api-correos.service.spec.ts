import { TestBed } from '@angular/core/testing';

import { ApiCorreosService } from './api-correos.service';

describe('ApiCorreosService', () => {
  let service: ApiCorreosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCorreosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
